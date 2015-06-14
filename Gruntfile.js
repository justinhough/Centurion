/*!
 * Centurion Gruntfile
 * http://www.centurionframework.com
 * @author Justin Hough
 */

'use strict';

var banner = '/* -------------------------------------------------------- \n' +
             ' *  <%= pkg.projectName %> v<%= pkg.version %> \n' +
             ' *  <%= pkg.author.name %> (<%= pkg.author.url %>) \n' +
             ' *  Licensed under GPL and MIT. \n' +
             ' * -------------------------------------------------------- */\n';

var shortBanner = '/* <%= pkg.projectName %> - v <%= pkg.version %> */\n';

var version = require('./package.json').version;

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('./package.json'),

    clean: {
      build: {
        src: ['_build']
      }
    },

    'http-server': {
      'dev': {
        root: '_build',
        port: 4000,
        host: '0.0.0.0',
        cache: 0,
        showDir : true,
        autoIndex: true,
        ext: 'html',
        runInBackground: true,
        // turns off logging in terminal
        logFn: null
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      configFiles: {
        files: ['Gruntfile.js', 'package.js'],
        tasks: ['uglify'],
        options: {
          reload: true
        }
      },
      html: {
        files: ['docs/**/*.html'],
        tasks: ['includereplace']
      },
      sass: {
        files: ['lib/sass/**/*.scss'],
        tasks: ['sass', 'postcss', 'usebanner']
      },
      scripts: {
        files: ['lib/js/**/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
    },

    usebanner: {
      options: {
        linebreak: true
      },
      fullBanner: {
        options: {
          banner: banner,
        },
        files: {
          src: [ '_build/css/*.css' ]
        }
      },
      shortBanner: {
        options: {
          banner: shortBanner,
        },
        files: {
          src: [ '_build/css/minified/*.css']
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
          dest: '_build/css',
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
          dest: '_build/css/minified',
          ext: '.min.css'
        }]
      }
    },

    postcss: {
      options: {
        //map: true,
        processors: [
          require('autoprefixer-core')({browsers: 'last 2 version, > 5%, ie > 8'})
        ]
      },
      dist: {
        src: '_build/css/*.css'
      }
    },

    'uglify': {
      options: {
        flatten: false,
        beautify: false,
        mangle: false,
        banner: banner
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'lib/js',
          src: ['**/*.js'],
          dest: '_build/js/'
        }]
      }
    },

    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'lib/js/libs', src: ['**'], dest: '_build/js/libs'},
          {expand: true, cwd: 'lib/img', src: ['**'], dest: '_build/img'},
        ]
      }
    },

    'compress': {
      main: {
        options: {
          archive: '_releases/centurion_'+ version +'.zip'
        },
        files: [{
          flatten: true,
          src: ['_build/**/*.css', '_build/**/*.js', '!_build/libs/**/*.js', '!build/__MACOSX'],
          dest: './centurion_'+ version
        }]
      }
    },

    includereplace: {
      dist: {
        flatten: true,
        expand: true,
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
          includesDir: 'docs/_partials/'
        },
        src: 'docs/*.html',
        dest: '_build/'
      }
    },

    concurrent: {
      dist: {
        tasks: ['includereplace', 'copy', 'uglify', 'sass', 'usebanner'],
        options: {
          logConcurrentOutput: false
        }
      }
    },

    'gh-pages': {
      options: {
        base: '_build',
        //repo: ''
      },
      src: ['**']
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default Task
  grunt.registerTask('default', ['clean', 'concurrent:dist', 'postcss', 'http-server', 'watch']);

  // Release updates to Github Pages
  grunt.registerTask('page-release', ['gh-pages']);

};
