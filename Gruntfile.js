/*!
 * Centurion Gruntfile
 * http://www.centurionframework.com
 * @author Justin Hough
 */

'use strict';

const banner = '/* -------------------------------------------------------- \n' +
             ' *  <%= pkg.projectName %> v<%= pkg.version %> \n' +
             ' *  <%= pkg.author.name %> (<%= pkg.author.url %>) \n' +
             ' *  Licensed under GPL and MIT. \n' +
             ' * -------------------------------------------------------- */\n';

const shortBanner = '/* <%= pkg.projectName %> - v <%= pkg.version %> */\n';

const repoName = require('./package.json').name;
const version = require('./package.json').version;

const sass = require('node-sass');

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('./package.json'),

    clean: {
      build: {
        src: ['release']
      }
    },

    'http-server': {
      'dev': {
        root: 'release',
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
        tasks: ['sass', 'postcss', 'usebanner', 'scsslint']
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
          src: [ 'release/css/*.css' ]
        }
      },
      shortBanner: {
        options: {
          banner: shortBanner,
        },
        files: {
          src: [ 'release/css/minified/*.css']
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
          implementation: sass,
          outputStyle: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'lib/sass',
          src: ['*.scss'],
          dest: 'release/css',
          ext: '.css'
        }]
      },
      minified: {
        options: {
          implementation: sass,
          outputStyle: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'lib/sass',
          src: ['*.scss'],
          dest: 'release/css/minified',
          ext: '.min.css'
        }]
      }
    },

    scsslint: {
      allFiles: [
        'lib/sass/**/*.scss',
      ],
      options: {
        exclude: 'lib/sass/centurion/_normalize.scss',
        config: '.scss-style.yml',
        colorizeOutput: true
      },
    },

    postcss: {
      options: {
        //map: true,
        processors: [
          require('autoprefixer')({overrideBrowserslist: 'last 2 version, > 5%, ie > 8'})
        ]
      },
      dist: {
        src: 'release/css/*.css'
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
          dest: 'release/js/'
        }]
      }
    },

    copy: {
      dist: {
        files: [
          {expand: true, cwd: 'lib/js/libs', src: ['**'], dest: 'release/js/libs'},
          {expand: true, cwd: 'lib/img', src: ['**'], dest: 'release/img'},
        ]
      }
    },

    includereplace: {
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
      dist: {
        flatten: true,
        expand: true,
        src: 'docs/*.html',
        dest: 'release/'
      },
      layouts: {
        flatten: true,
        expand: true,
        src: 'docs/layouts/*.html',
        dest: 'release/layouts/'
      }
    },

    'compress': {
      main: {
        options: {
          archive: './' + repoName + '.zip'
        },
        files: [{
          flatten: true,
          src: ['release/**'],
          dest: './'
        }]
      }
    },

    'github-release': {
      options: {
        repository: 'justinhough/Centurion',
        release: {
          tag_name: 'v' + version,
          name: 'v' + version,
          body: 'Releasing Centurion v' + version + ' into the wild.'
        },
        auth: {
          password: process.env.GITHUB_TERMINAL
        }
      },
      files: {
        src: ['./' + repoName + '.zip']
      }
    },

    prompt: {
      target: {
        options: {
          questions: [
            {
              config: 'github-release.options.auth.user',
              type: 'input',
              message: 'GitHub username:'
            }
          ]
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'release',
        //repo: ''
      },
      src: ['**']
    },

    concurrent: {
      dist: {
        tasks: ['includereplace', 'copy', 'uglify', 'sass', 'usebanner'],
        options: {
          logConcurrentOutput: false
        }
      }
    },

  });

  require('load-grunt-tasks')(grunt);

  // Default Task
  grunt.registerTask('default', ['build', 'scsslint', 'http-server', 'watch']);

  // Build
  grunt.registerTask('build', ['clean', 'concurrent:dist', 'postcss'])

  // Release updates to Github Pages
  grunt.registerTask('pages', ['gh-pages']);

  // Release new version to Github
  grunt.registerTask('release', [
    'build',
    'prompt',
    'compress',
    'github-release'
  ]);


};
