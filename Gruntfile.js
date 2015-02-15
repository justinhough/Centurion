module.exports = function (grunt) {
  
  grunt.initConfig({
  
    pkg: grunt.file.readJSON('./package.json'),
    
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
      configFiles: {
        files: [ 'Gruntfile.js', 'package.js' ],
        tasks: ['html', 'sass:expanded', 'copy'],
        options: {
          reload: true
        }
      },
      html: {
        files: ['*.html', '_partials/**/*.html'],
        tasks: ['html']
      },
      sass: {
        files: ['lib/sass/**/*.scss'],
        tasks: ['sass:expanded', 'html', 'copy']
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
  grunt.registerTask('default', ['html', 'sass:expanded', 'copy', 'serve', 'watch']);

  // Release updates to Github Pages
  grunt.registerTask('page-release', ['gh-pages']);

};