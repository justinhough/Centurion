module.exports = function (grunt) {

  pkg: grunt.file.readJSON('package.json'),
 
  grunt.initConfig({
    
    connect: {
      local: {
        options: {
          livereload: true,
          hostname: 'localhost',
          port: 5316,
          base: 'build'
        }
      }
    },

    'sass': {
      expanded: {
        options: {
          style: 'expanded',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: 'lib/sass',
          src: ['*.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      },
      minified: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
          compass: true,
          trace: true
        },
        files: [{
          expand: true,
          cwd: 'lib/sass',
          src: ['*.scss'],
          dest: 'build/css',
          ext: '.css'
        }]
      }
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
        files: ['lib/sass/**/*.scss'],
        tasks: ['sass:expanded', 'html', 'watch:scripts', 'copy']
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
            version: '3.5.2',
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
    
    // Deploy to gh-pages
    'gh-pages': {
      options: {
        base: 'build',
      },
      src: ['**']
    },
    
    
  });
  
  
  require('load-grunt-tasks')(grunt);
  // grunt.file.setBase('../');

  grunt.registerTask('html', ['processhtml:dist']);
  grunt.registerTask('serve', ['connect:local']);
  
  // Default Task
  grunt.registerTask('default', ['html', 'sass:expanded', 'copy', 'serve', 'watch']);

  // Release deploy to gh-pages
  grunt.registerTask('page-release', ['gh-pages']);

};