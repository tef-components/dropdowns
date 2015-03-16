module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        options: {
          optimization: 2
        },
        files: {
          "css/dropdowns.telefonica.css": "less/dropdowns.less",
          "css/dropdowns.movistar.css": "less/movistar.less",
          "css/dropdowns.o2.css": "less/o2.less",
          "css/dropdowns.vivo.css": "less/vivo.less"
        }
      },
      production: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "css/dropdowns.telefonica.min.css": "less/dropdowns.less",
          "css/dropdowns.movistar.min.css": "less/movistar.less",
          "css/dropdowns.o2.min.css": "less/o2.less",
          "css/dropdowns.vivo.min.css": "less/vivo.less"
        }
      }
    },

    watch: {
      styles: {
        files: ['less/**/*.less'],
        tasks: ['less', 'autoprefixer'],
        options: {
          nospawn: true
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 5 versions']
      },
      dist: {
        src: 'css/*.css'
      },
    },
  });

  grunt.registerTask('default', ['less','autoprefixer','watch']);
};
