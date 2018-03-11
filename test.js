let subject = require('/Users/changyan/Documents/repos/TestGeneration/mystery.js')
let mock = require('mock-fs');
try { subject.inc(99, -77); } catch (e) {} 
try { subject.inc(99, NaN); } catch (e) {} 
try { subject.inc(99, NaN); } catch (e) {} 
try { subject.inc(101, -77); } catch (e) {} 
try { subject.inc(101, NaN); } catch (e) {} 
try { subject.inc(101, NaN); } catch (e) {} 
try { subject.weird(98, 10, 32, "mode"); } catch (e) {} 
try { subject.weird(98, 10, 32, '"mode" - mode'); } catch (e) {} 
try { subject.weird(98, 10, 32, 'hello'); } catch (e) {} 
try { subject.weird(98, 10, 32, "street"); } catch (e) {} 
try { subject.weird(98, 10, 32, "strictly"); } catch (e) {} 
try { subject.weird(98, 10, 32, '"strictly" - strictly'); } catch (e) {} 
try { subject.weird(98, 10, 32, 'hello'); } catch (e) {} 
try { subject.weird(98, 10, 34, "mode"); } catch (e) {} 
try { subject.weird(98, 10, 34, '"mode" - mode'); } catch (e) {} 
try { subject.weird(98, 10, 34, 'hello'); } catch (e) {} 
try { subject.weird(98, 10, 34, "street"); } catch (e) {} 
try { subject.weird(98, 10, 34, "strictly"); } catch (e) {} 
try { subject.weird(98, 10, 34, '"strictly" - strictly'); } catch (e) {} 
try { subject.weird(98, 10, 34, 'hello'); } catch (e) {} 
try { subject.weird(98, 12, 32, "mode"); } catch (e) {} 
try { subject.weird(98, 12, 32, '"mode" - mode'); } catch (e) {} 
try { subject.weird(98, 12, 32, 'hello'); } catch (e) {} 
try { subject.weird(98, 12, 32, "street"); } catch (e) {} 
try { subject.weird(98, 12, 32, "strictly"); } catch (e) {} 
try { subject.weird(98, 12, 32, '"strictly" - strictly'); } catch (e) {} 
try { subject.weird(98, 12, 32, 'hello'); } catch (e) {} 
try { subject.weird(98, 12, 34, "mode"); } catch (e) {} 
try { subject.weird(98, 12, 34, '"mode" - mode'); } catch (e) {} 
try { subject.weird(98, 12, 34, 'hello'); } catch (e) {} 
try { subject.weird(98, 12, 34, "street"); } catch (e) {} 
try { subject.weird(98, 12, 34, "strictly"); } catch (e) {} 
try { subject.weird(98, 12, 34, '"strictly" - strictly'); } catch (e) {} 
try { subject.weird(98, 12, 34, 'hello'); } catch (e) {} 
try { subject.weird(100, 10, 32, "mode"); } catch (e) {} 
try { subject.weird(100, 10, 32, '"mode" - mode'); } catch (e) {} 
try { subject.weird(100, 10, 32, 'hello'); } catch (e) {} 
try { subject.weird(100, 10, 32, "street"); } catch (e) {} 
try { subject.weird(100, 10, 32, "strictly"); } catch (e) {} 
try { subject.weird(100, 10, 32, '"strictly" - strictly'); } catch (e) {} 
try { subject.weird(100, 10, 32, 'hello'); } catch (e) {} 
try { subject.weird(100, 10, 34, "mode"); } catch (e) {} 
try { subject.weird(100, 10, 34, '"mode" - mode'); } catch (e) {} 
try { subject.weird(100, 10, 34, 'hello'); } catch (e) {} 
try { subject.weird(100, 10, 34, "street"); } catch (e) {} 
try { subject.weird(100, 10, 34, "strictly"); } catch (e) {} 
try { subject.weird(100, 10, 34, '"strictly" - strictly'); } catch (e) {} 
try { subject.weird(100, 10, 34, 'hello'); } catch (e) {} 
try { subject.weird(100, 12, 32, "mode"); } catch (e) {} 
try { subject.weird(100, 12, 32, '"mode" - mode'); } catch (e) {} 
try { subject.weird(100, 12, 32, 'hello'); } catch (e) {} 
try { subject.weird(100, 12, 32, "street"); } catch (e) {} 
try { subject.weird(100, 12, 32, "strictly"); } catch (e) {} 
try { subject.weird(100, 12, 32, '"strictly" - strictly'); } catch (e) {} 
try { subject.weird(100, 12, 32, 'hello'); } catch (e) {} 
try { subject.weird(100, 12, 34, "mode"); } catch (e) {} 
try { subject.weird(100, 12, 34, '"mode" - mode'); } catch (e) {} 
try { subject.weird(100, 12, 34, 'hello'); } catch (e) {} 
try { subject.weird(100, 12, 34, "street"); } catch (e) {} 
try { subject.weird(100, 12, 34, "strictly"); } catch (e) {} 
try { subject.weird(100, 12, 34, '"strictly" - strictly'); } catch (e) {} 
try { subject.weird(100, 12, 34, 'hello'); } catch (e) {} 
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
		subject.fileTest('pathContent/file1', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/file1', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('pathContent/file1', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/file1', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/file1', '');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/file1', '');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('pathContent/file1', '');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/file1', '');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/someDir', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/someDir', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('pathContent/someDir', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/someDir', 'doesnt exists');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file(),pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/someDir', '');
	mock.restore();
} catch(e) {}
try{
	mock({pathContent:{file1:new Buffer('abc'),someDir:mock.directory()}});
		subject.fileTest('pathContent/someDir', '');
	mock.restore();
} catch(e) {}
try{
	mock({emptyDir:mock.directory(),nonEmptyDir:mock.directory({ items: { file: mock.file() } }),file:mock.file()});
		subject.fileTest('pathContent/someDir', '');
	mock.restore();
} catch(e) {}
try{
	mock({});
		subject.fileTest('pathContent/someDir', '');
	mock.restore();
} catch(e) {}
try { subject.normalize(''); } catch (e) {} 
try { subject.format('1231231234', '(NNN)-NNN-NNNN', ''); } catch (e) {} 
try { subject.format('1231231234', '(NNN)-NNN-NNNN', { normalize: true }); } catch (e) {} 
try { subject.blackListNumber("2121111111"); } catch (e) {} 
try { subject.blackListNumber("2131111111"); } catch (e) {} 
