module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: ['gruntfile.js', 'fh-aaa-client.js', 'lib/*.js', 'test/**/*.js'],
        options: {
          livereload: true
        }
      }
    },
    concurrent: {
      serve: ['nodemon', 'watch'],
      debug: ['node-inspector', 'shell:debug', 'open:debug'],
      options: {
        logConcurrentOutput: true
      }
    },
    _test_runner: 'node',
    _unit_args: './test/index.js',
    unit: '<%= _test_runner %> <%= _unit_args %>',
    unit_cover: 'istanbul cover --dir cov-unit <%= _test_runner %> -- <%= _unit_args %>'
  });

  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  grunt.registerTask('test', ['eslint', 'fh-test']);
  grunt.registerTask('coverage', ['fh-coverage']);
  grunt.registerTask('dist', ['fh-dist']);
  grunt.registerTask('default', ['fh-default']);
};
