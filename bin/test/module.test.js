/**
 * Module dependencies
 */
var expect = require('./fixtures/expect');
var assert = require('./fixtures/assertions');
var simpleGenerator = require('./fixtures/simpleGenerator');



describe('module generator', function () {

	before(function () {
		this.fn = require('../generators/_helpers/module');
	});

	describe('when used WITHOUT a `generator` option', function () {

		before(function () {
			this.options = {
				id: this.heap.getFilename( this.heap.alloc() )
			};
		});

		it('should trigger `invalid`', expect('invalid'));
	});



	describe('with an empty `generator`', function () {

		before(function () {
			this.options = {
				generator: {},
				pathToNew: this.heap.alloc()
			};
		});

		it('should trigger `ok`', expect('ok'));
		it('should create an empty file', assert.fileExists);

	});


	describe('using a `generator` with a simple render function', function () {
		before(function () {
			this.options = {
				generator: simpleGenerator,
				contents: 'foo',
				pathToNew: this.heap.alloc()
			};
		});

		it('should trigger `ok`', expect('ok'));
		it('should create a file', assert.fileExists);
	});

		// describe('when used OUTSIDE of a sails app', function () {

		// 	before(function () {
		// 		this.options = {
		// 			id: this.heap.getFilename( this.heap.alloc() )
		// 		};
		// 	});


		// 	it('should trigger `notSailsApp`', expect('notSailsApp'));

		// });


		// describe('when used OUTSIDE of a sails app with `force`', function () {

		// 	before(function () {
		// 		this.options = {
		// 			id: this.heap.getFilename (this.heap.alloc()),
		// 			force: true
		// 		};
		// 	});


		// 	it('should trigger `ok`', expect('ok'));

		// });






	// describe('with empty data', function () {

	// 	before(function () {
	// 		this.options = {
	// 			pathToNew: this.heap.alloc(),
	// 			pathToTemplate: this.templates.file.path,
	// 			data: {}
	// 		};
	// 	});

	// 	it('should trigger `ok`', expect('ok'));
	// 	it('should create a file', assert.fileExists);
	// 	it('should create a file with the same checksum as the template', assert.fileChecksumMatchesTemplate);

	// });




	// describe('if file/folder already exists at `pathToNew`', function () {
	// 	before(function (){
	// 		this.options = {
	// 			pathToTemplate: this.templates.file.path
	// 		};
	// 	});

	// 	describe('(file)', function () {
	// 		// Create an extra file beforehand to simulate a collision
	// 		before(function (cb) {
	// 			this.options.pathToNew = this.heap.alloc();
	// 			this.heap.touch(this.options.pathToNew, cb);
	// 		});
	// 		it(	'should trigger "alreadyExists" handler', expect({ alreadyExists: true, ok: 'Should not override existing file without `options.force`!' }));
	// 	});

	// 	describe('(directory)', function () {
	// 		// Create an extra folder beforehand to simulate a collision
	// 		before(function (cb) {
	// 			this.options.pathToNew = this.heap.alloc();
	// 			this.heap.mkdirp(this.options.pathToNew, cb);
	// 		});
	// 		it(	'should trigger "alreadyExists" handler', expect({ alreadyExists: true, ok: 'Should not override existing directory without `options.force`!' }));
	// 	});

	// });


	// describe('if file/folder already exists and `force` option is true', function () {
	// 	before(function() {
	// 		this.options = {
	// 			force: true,
	// 			pathToTemplate: this.templates.file.path
	// 		};
	// 	});

	// 	describe('(file)', function () {
	// 		before(function(cb) {
	// 			this.options.pathToNew = this.heap.alloc();

	// 			// Create an extra file beforehand to simulate a collision
	// 			this.heap.touch(this.options.pathToNew, cb);
	// 		});

	// 		it('should trigger `ok`', expect('ok'));
	// 	});

	// 	describe('(directory)', function () {
	// 		before(function(cb) {
	// 			this.options.pathToNew = this.heap.alloc();
				
	// 			// Create an extra dir beforehand to simulate a collision
	// 			this.heap.mkdirp(this.options.pathToNew, cb);
	// 		});

	// 		it('should trigger `ok`', expect('ok'));
	// 	});

	// });


});
