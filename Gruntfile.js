/*!
 * Centurion Gruntfile
 * http://www.centurionframework.com
 * @author Justin Hough
 */
 
'use strict';

module.exports = function (grunt) {
  
  grunt.initConfig({
  
    pkg: grunt.file.readJSON('./package.json'),
    
    banner: '/* -------------------------------------------------------- \n' +
            ' * \n' +
            ' *  <%= pkg.projectName %> v<%= pkg.version %> \n' +
            ' *  Created by: <%= pkg.author.name %> (<%= pkg.author.url %>) \n' +
            ' * \n' +
            ' *  Documentation: <%= pkg.homepage %> \n' +
            ' *  Licensed under GPL and MIT. \n' +
            ' * \n' +
            ' * -------------------------------------------------------- */',
    
    shortBanner: '/* <%= pkg.projectName %> - v <%= pkg.version %> */ ',
            
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

    watch: {
      options: {
        livereload: true,
      },
      configFiles: {
        files: ['Gruntfile.js', 'package.js'],
        tasks: ['html', 'copy', 'sass', 'usebanner'],
        options: {
          reload: true
        }
      },
      html: {
        files: ['*.html', '_partials/**/*.html'],
        tasks: ['html', 'copy', 'sass', 'usebanner']
      },
      sass: {
        files: ['lib/sass/**/*.scss'],
        tasks: ['html', 'copy', 'sass', 'usebanner']
      },
      scripts: {
        files: ['lib/**/*.js'],
        tasks: ['html', 'copy', 'sass', 'usebanner'],
        options: {
          spawn: false,
        },
      },
    },

    usebanner: {
      options: {
        banner: '<%= banner %>',
        linebreak: true
      },
      fullBanner: {
        options: {
          banner: '<%= banner %>',
        },
        files: {
          src: [ 'build/css/*.css' ]
        }
      },
      shortBanner: {
        options: {
          banner: '<%= shortBanner %>',
        },
        files: {
          src: [ 'build/css/minified/*.css']
        }
      }
    },

    'sass': {
      options: {
        precision: 4,
        banner: 'Testing',
      },
      expanded: {
        options: {
          outputStyle: 'expanded'
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
          outputStyle: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'lib/sass',
          src: ['*.scss'],
          dest: 'build/css/minified',
          ext: '.min.css'
        }]
      }
    },
    
    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'lib/js', src: ['**'], dest: 'build/js'},
          {expand: true, cwd: 'lib/img', src: ['**'], dest: 'build/img'},
        ]
      }
    },
    
    includereplace: {
      dist: {
        options: {
          globals: {
            projectName: '<%= pkg.projectName %>',
            projectDescription: '<%= pkg.simpleDescription %>',
            meta_keyword: '<%= pkg.keywords.toString() %>',
            meta_description: '<%= pkg.description %>',
            version: '<%= pkg.version %>',
            author_name: '<%= pkg.author.name %>',
            author_url: '<%= pkg.author.url %>',
          },
          prefix: '<!--##',
          suffix: '-->',
          includesDir: '_partials/'
        },
        src: '*.html',
        dest: 'build/'
      }
    },

    'gh-pages': {
      options: {
        base: 'build',
      },
      src: ['**']
    },
    
  });

  require('load-grunt-tasks')(grunt);
  
  grunt.registerTask('html', ['includereplace:dist']);
  grunt.registerTask('serve', ['connect:local']);

  // Default Task
  grunt.registerTask('default', ['html', 'copy', 'sass', 'usebanner', 'serve', 'watch']);

  // Release updates to Github Pages
  grunt.registerTask('page-release', ['gh-pages']);

};