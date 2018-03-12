let subject = require('/Users/changyan/Documents/repos/TestGeneration/subject.js')
let mock = require('mock-fs');
try { subject.inc(-1, undefined); } catch (e) {} 
try { subject.inc(-1, NaN); } catch (e) {} 
try { subject.inc(-1, NaN); } catch (e) {} 
try { subject.inc(1, undefined); } catch (e) {} 
try { subject.inc(1, NaN); } catch (e) {} 
try { subject.inc(1, NaN); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, '"strict" - strict'); } catch (e) {} 
try { subject.weird(6, -1, 41, 'hello'); } catch (e) {} 
try { subject.weird(6, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(6, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 41, '"strict" - strict'); } catch (e) {} 
try { subject.weird(6, -1, 41, 'hello'); } catch (e) {} 
try { subject.weird(6, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 43, '"strict" - strict'); } catch (e) {} 
try { subject.weird(6, -1, 43, 'hello'); } catch (e) {} 
try { subject.weird(6, -1, 43, "werw"); } catch (e) {} 
try { subject.weird(6, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, -1, 43, '"strict" - strict'); } catch (e) {} 
try { subject.weird(6, -1, 43, 'hello'); } catch (e) {} 
try { subject.weird(6, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 41, '"strict" - strict'); } catch (e) {} 
try { subject.weird(6, 1, 41, 'hello'); } catch (e) {} 
try { subject.weird(6, 1, 41, "werw"); } catch (e) {} 
try { subject.weird(6, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 41, '"strict" - strict'); } catch (e) {} 
try { subject.weird(6, 1, 41, 'hello'); } catch (e) {} 
try { subject.weird(6, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 43, '"strict" - strict'); } catch (e) {} 
try { subject.weird(6, 1, 43, 'hello'); } catch (e) {} 
try { subject.weird(6, 1, 43, "werw"); } catch (e) {} 
try { subject.weird(6, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(6, 1, 43, '"strict" - strict'); } catch (e) {} 
try { subject.weird(6, 1, 43, 'hello'); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, '"strict" - strict'); } catch (e) {} 
try { subject.weird(8, -1, 41, 'hello'); } catch (e) {} 
try { subject.weird(8, -1, 41, "werw"); } catch (e) {} 
try { subject.weird(8, -1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 41, '"strict" - strict'); } catch (e) {} 
try { subject.weird(8, -1, 41, 'hello'); } catch (e) {} 
try { subject.weird(8, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 43, '"strict" - strict'); } catch (e) {} 
try { subject.weird(8, -1, 43, 'hello'); } catch (e) {} 
try { subject.weird(8, -1, 43, "werw"); } catch (e) {} 
try { subject.weird(8, -1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, -1, 43, '"strict" - strict'); } catch (e) {} 
try { subject.weird(8, -1, 43, 'hello'); } catch (e) {} 
try { subject.weird(8, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 41, '"strict" - strict'); } catch (e) {} 
try { subject.weird(8, 1, 41, 'hello'); } catch (e) {} 
try { subject.weird(8, 1, 41, "werw"); } catch (e) {} 
try { subject.weird(8, 1, 41, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 41, '"strict" - strict'); } catch (e) {} 
try { subject.weird(8, 1, 41, 'hello'); } catch (e) {} 
try { subject.weird(8, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 43, '"strict" - strict'); } catch (e) {} 
try { subject.weird(8, 1, 43, 'hello'); } catch (e) {} 
try { subject.weird(8, 1, 43, "werw"); } catch (e) {} 
try { subject.weird(8, 1, 43, "strict"); } catch (e) {} 
try { subject.weird(8, 1, 43, '"strict" - strict'); } catch (e) {} 
try { subject.weird(8, 1, 43, 'hello'); } catch (e) {} 
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('doesnt exists', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('doesnt exists', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('doesnt exists', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('doesnt exists', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('doesnt exists', '');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('doesnt exists', '');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('doesnt exists', '');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('doesnt exists', '');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('doesnt exists', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('doesnt exists', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('doesnt exists', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('doesnt exists', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('doesnt exists', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('doesnt exists', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('doesnt exists', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('doesnt exists', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', '');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', '');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('', '');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('', '');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('', 'pathContent/file1');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('', 'pathContent/someDir');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('1231231234', '(NNN)-NNN-NNNN', ''); } catch (e) {} 
try { subject.format('1231231234', '(NNN)-NNN-NNNN', { normalize: true }); } catch (e) {} 
try { subject.blackListNumber("2121111111"); } catch (e) {} 
try { subject.blackListNumber("2131111111"); } catch (e) {} 
