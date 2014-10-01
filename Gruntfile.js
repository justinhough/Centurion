module.exports = function (grunt) {

  pkg: grunt.file.readJSON('package.json'),
 
  grunt.initConfig({
    
    connect: {
      local: {
        options: {
          livereload: true,
          hostname: 'centurion-framework.dev',
          port: 9001,
          base: 'build'
        }
      }
    },
    
    open: {
      server: {
        url: 'http://centurion-framework.dev:9001',
        app: 'Safari'
      }
    },
    
    compass: {
      options: {
        config: 'lib/config.rb'
      },
      sass: {
        options: {
          sassDir: 'lib/sass/',
          cssDir: 'build/css/'
        }
      },
    },

    watch: {    
      options: {
        livereload: true,
      },      
      html: {
        files: ['source/layouts/**/*.html'],
        tasks: ['copy', 'html', 'watch:sass', 'watch:scripts']
      },
      sass: {
        files: ['lib/sass/*.sass'],
        tasks: ['compass:sass', 'html', 'watch:scripts', 'copy']
      },
      scripts: {
        files: ['lib/**/*.js'],
        tasks: ['copy'],
        options: {
          spawn: false,
        },
      },
    },
    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'lib/js', src: ['**'], dest: 'build/js'},
          {expand: true, cwd: 'lib/img', src: ['**'], dest: 'build/img'},
        ]
      }
    },
    processhtml: {
      dist: {
        options: {
          process: true,
          data: {
            site_title: 'Centurion Framework',
            version: '3.5.0',
            page_title: 'Page Title',
            meta_description: '_______',
            meta_keywords: '_______',
            message: 'A web framework'
          },
          customBlockTypes: ['source/change-text.js'],
          recursive: true
        },
        files: {
          'build/index.html': ['source/layouts/index.html'],
          'build/components.html': ['source/layouts/components.html'],
          'build/features.html': ['source/layouts/features.html'],
          'build/grid.html': ['source/layouts/grid.html']
        }
      },
    },
  });
  
  
  require('load-grunt-tasks')(grunt);
  // grunt.file.setBase('../');

  grunt.registerTask('html', ['processhtml:dist']);
  grunt.registerTask('serve', ['connect:local']);
  
  // Default Task
  grunt.registerTask('default', ['html', 'compass', 'copy', 'serve', 'open', 'watch']);

};