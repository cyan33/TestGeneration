// Core/NPM Modules
const esprima = require("esprima");
const faker   = require("faker");
const fs      = require('fs');
const Random  = require('random-js');
const _       = require('lodash');
const randexp = require('randexp');



// Set options
faker.locale  = "en";
const options = { tokens: true, tolerant: true, loc: true, range: true };



// Create random generator engine
const engine = Random.engines.mt19937().autoSeed();


/**
 * Constraint class. Represents constraints on function call parameters.
 *
 * @property {String}                                                          ident      Identity of the parameter mapped to the constraint.
 * @property {String}                                                          expression Full expression string for a constraint.
 * @property {String}                                                          operator   Operator used in constraint.
 * @property {String|Number}                                                   value      Main constraint value.
 * @property {String|Number}                                                   altvalue   Constraint alternative value.
 * @property {String}                                                          funcName   Name of the function being constrained.
 * @property {'fileWithContent'|'fileExists'|'integer'|'string'|'phoneNumber'} kind       Type of the constraint.
 */
class Constraint {
    constructor(properties){
        this.ident = properties.ident;
        this.expression = properties.expression;
        this.operator = properties.operator;
        this.value = properties.value;
        this.altvalue = properties.altvalue;
        this.funcName = properties.funcName;
        this.kind = properties.kind;
    }
}


/**
 * Generate function parameter constraints for an input file
 * and save them to the global functionConstraints object.
 *
 * @param   {String} filePath Path of the file to generate tests for.
 * @returns {Object}          Function constraints object.
 */
function constraints(filePath) {

    // Initialize function constraints directory
    let functionConstraints = {};

    // Read input file and parse it with esprima.
    let buf = fs.readFileSync(filePath, "utf8");
    let result = esprima.parse(buf, options);

    // Start traversing the root node
    traverse(result, function (node) {

        // If some node is a function declaration, parse it for potential constraints.
        if (node.type === 'FunctionDeclaration') {

            // Get function name and arguments
            let funcName = functionName(node);
            let params = node.params.map(function(p) {return p.name});

            // Initialize function constraints
            functionConstraints[funcName] = {
                constraints: _.zipObject(params, _.map(params, () => [])),
                params: params
            };

            if (funcName === 'format') {
                functionConstraints[funcName].constraints['phoneNumber'].push({
                    ident: 'phoneNumber',
                    value:  "'1231231234'",
                    funcName,
                    kind: "string",
                })
                functionConstraints[funcName].constraints['formatString'].push({
                    ident: 'formatString',
                    value:  "'(NNN)-NNN-NNNN'",
                    funcName,
                    kind: "string",
                })
                functionConstraints[funcName].constraints['options'].push({
                    ident: 'options',
                    value:  "''",
                    funcName,
                    kind: "string",
                })
                functionConstraints[funcName].constraints['options'].push({
                    ident: 'options',
                    value:  "{ normalize: true }",
                    funcName,
                    kind: "string",
                })
            }

            // Traverse function node.
            traverse(node, function(child) {

                // Handle equivalence expression
                if(_.get(child, 'type') === 'BinaryExpression' ) {
                    if(_.get(child, 'left.type') === 'Identifier') {
                        // Get identifier
                        let ident = child.left.name;

                        // Get expression from original source code:
                        let expression = buf.substring(child.range[0], child.range[1]);
                        let rightHand = buf.substring(child.right.range[0], child.right.range[1]);

                        // Test to see if right hand is a string
                        let match = rightHand.match(/^['"](.*)['"]$/);

                        if (_.includes(['!=', '!==', '==', '==='], _.get(child, 'operator'))) {
                            if (_.includes(params, _.get(child, 'left.name'))) {

                                // Push a new constraints
                                let constraints = functionConstraints[funcName].constraints[ident];
                                constraints.push(new Constraint({
                                    ident: child.left.name,
                                    value: rightHand,
                                    funcName: funcName,
                                    kind: "integer",
                                    operator : child.operator,
                                    expression: expression
                                }));
                                constraints.push(new Constraint({
                                    ident: child.left.name,
                                    value: match ? `'${rightHand} - ${match[1]}'` : NaN,
                                    funcName: funcName,
                                    kind: "integer",
                                    operator : child.operator,
                                    expression: expression
                                }));
                                constraints.push(new Constraint({
                                    ident: child.left.name,
                                    value: match ? `'hello'` : NaN,
                                    funcName: funcName,
                                    kind: "integer",
                                    operator : child.operator,
                                    expression: expression
                                }));
                            } else {
                                
                            }
                        }

                        // Handle comparison operator
                        if (_.includes(['<=', '<', '>=', '>'], _.get(child, 'operator')) && _.includes(params, _.get(child, 'left.name'))) {
                            if (parseInt(rightHand) !== NaN) {
                                functionConstraints[funcName].constraints[ident].push(new Constraint({
                                    ident: child.left.name,
                                    funcName: funcName,
                                    value: generateComparisonValue(child.operator, rightHand)[0],
                                    kind: "integer",
                                    operator : child.operator,
                                    expression: expression
                                }))
                                functionConstraints[funcName].constraints[ident].push(new Constraint({
                                    ident: child.left.name,
                                    funcName: funcName,
                                    value: generateComparisonValue(child.operator, rightHand)[1],
                                    kind: "integer",
                                    operator : child.operator,
                                    expression: expression
                                }))
                            }
                        }
                    }
                }

                if( child.type === "CallExpression" && child.callee.property && child.callee.property.name === "indexOf" ) {
                    const val = child.arguments[0].value;
                    const param = child.callee.object.name

                    functionConstraints[funcName].constraints[param].push({
                        ident: param,
                        value: `"${val}"`,
                        funcName
                    })
                }

                // Handle fs.existsSync
                if( child.type === "CallExpression" && child.callee.property && child.callee.property.name === "existsSync" ) {
                    let expression = buf.substring(child.range[0], child.range[1]);
                    let ident = child.arguments[0].name

                    functionConstraints[funcName].constraints[ident].push(new Constraint({
                        ident,
                        value:  "'doesnt exists'",
                        funcName: funcName,
                        kind: "string",
                        operator : child.operator,
                        expression: expression
                    }));

                    functionConstraints[funcName].constraints[ident].push(new Constraint({
                        ident,
                        value:  "''",
                        funcName: funcName,
                        kind: "string",
                        operator : child.operator,
                        expression: expression
                    }));
                }

                if (funcName === 'blackListNumber' && _.get(child, 'type') === 'BinaryExpression') {
                    generateBlackPhoneNumberArea(child.right.value).forEach((num) => {
                        functionConstraints[funcName].constraints[params[0]].push({
                            ident: params[0],
                            value: `"${num.toString()}"`,
                            funcName,
                            kind: "string",
                        });
                    })
                }



                // Handle fs.readFileSync
                if( child.type === "CallExpression" && child.callee.property && child.callee.property.name === "readFileSync" ) {

                    // Get expression from original source code:
                    let expression = buf.substring(child.range[0], child.range[1]);

                    for (let p in params) {
                        if( child.arguments[0].name === params[p] ) {

                            // Get identifier
                            let ident = params[p];

                            // Push a new constraint
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value:  "'pathContent/file1'",
                                funcName: funcName,
                                kind: "fileWithContent",
                                operator : child.operator,
                                expression: expression
                            }));
                            functionConstraints[funcName].constraints[ident].push(new Constraint({
                                ident: params[p],
                                value:  "'pathContent/someDir'",
                                funcName: funcName,
                                kind: "fileWithContent",
                                operator : child.operator,
                                expression: expression
                            }));

                            // file that exists but doesn't have content
                            // functionConstraints[funcName].constraints[ident].push(new Constraint({
                            //     ident: params[p],
                            //     value:  "'pathContent/noContent'",
                            //     funcName: funcName,
                            //     kind: "fileWithContent",
                            //     operator : child.operator,
                            //     expression: expression
                            // }));
                        }
                    }
                }

                if( child.type === "CallExpression" && child.callee.property && child.callee.property.name === "format" ) {

                }

            });

            // console.log( functionConstraints[funcName]);

        }
    });

    return functionConstraints;
}

/**
 * Traverse an object tree, calling the visitor at each
 * visited node.
 *
 * @param {Object}   object  Esprima node object.
 * @param {Function} visitor Visitor called at each node.
 */
function traverse(object, visitor) {

    // Call the visitor on the object
    visitor(object);

    // Traverse all children of object
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            let child = object[key];
            if (typeof child === 'object' && child !== null) {
                traverse(child, visitor);
            }
        }
    }
}


/**
 * Return the name of a function node.
 */
function functionName(node) {
    return node.id ? node.id.name : '';
}

function generateComparisonValue(operator, value) {
    value = parseInt(value)
    if (~operator.indexOf('==')) {
        return [value, value + 1]
    }
    return [value - 1, value + 1]
}

function generateBlackPhoneNumberArea(val) {
    const placeholder = `NNN1111111`
    return [placeholder.replace(/NNN/g, val), placeholder.replace(/NNN/g, parseInt(val) + 1)]
}

/**
 * Generates an integer value based on some constraint.
 *
 * @param   {Number}  constraintValue Constraint integer.
 * @param   {Boolean} greaterThan     Whether or not the concrete integer is greater than the constraint.
 * @returns {Number}                  Integer satisfying constraints.
 */
function createConcreteIntegerValue(constraintValue, greaterThan) {
    if( greaterThan ) return Random.integer(constraintValue + 1, constraintValue + 10)(engine);
    else return Random.integer(constraintValue - 10, constraintValue - 1)(engine);
}


// Export
module.exports = constraints;