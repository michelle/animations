var imprt = require('rework-import');
// TODO: need?
var vars = require('rework-vars');
var calc = require('rework-calc');
var inherit = require('rework-inherit');
var ease = require('rework-plugin-ease');

module.exports = function(grunt) {
  grunt.initConfig({
    rework: {
      'animations.css': 'src/animations.css',
      options: {
        use: [
          imprt({
            path: ['src']
          }),
          vars(),
          calc,
          ease(),
          inherit()
        ]
      }
    },
    autoprefixer: {
      css: {
        src: 'animations.css'
      }
    },
    watch: {
      all: {
        files: ['src/*.css', 'index.html', 'images/*'],
        tasks: ['rework', 'autoprefixer']
      }
    }
  });

  grunt.loadNpmTasks('grunt-rework');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['rework', 'autoprefixer', 'watch']);
};
