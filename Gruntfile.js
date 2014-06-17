module.exports = function (grunt) {

 
  grunt.initConfig({
    
    express: {
      options: {
        background: true,
        port: 3000,
        delay: 0,
      },
      web: {
        options: {
          script: 'app.js',
        }
      },
    },
    
    compass: {
      options: {
        config: 'config.rb'
      },
      sass: {
        options: {
          sassDir: 'source/assets/sass/',
          cssDir: 'public/css/'
        }
      },
    },

    watch: {
      frontend: {
        options: {
          livereload: 12345
        },
        files: [
          'public/css/*.css',
          'public/js/*.js',
          //'img/**/*'
        ]
      },
      sass: {
        files: [
          //'!/sass/centurion.sass',
          'source/assets/sass/*.sass'
        ],
        tasks: [
          'compass:sass'
        ]
      },
      web: {
        files: [
          'public/assets/js/*.js',
        ],
        tasks: [
          'express:web'
        ],
        options: {
          nospawn: true, //Without this option specified express won't be reloaded
          atBegin: true,
        }
      }
    },
        
    'includereplace': {
      options: {
        includesDir: 'source/partials',
        globals: {
          message: "<!-- GENERATED FILE --> \n"
        }
      },
      dist: {
        src: '*.html',
        dest: 'public/',
        expand: true,
        cwd: 'source/layouts'
      }
    },
    
    parallel: {
      web: {
        options: {
          stream: true
        },
        tasks: [{
          grunt: true,
          args: ['includereplace']
        }, {
          grunt: true,
          args: ['watch:frontend']
        }, {
          grunt: true,
          args: ['watch:sass']
        }, {
          grunt: true,
          args: ['open:server', 'watch:web']
        }]
      },
    },
    
    open: {
      server: {
        path: 'http://localhost:3000'
      }
    }
    
  });
  
  
  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-parallel');
  
 // grunt.file.setBase('../');
  
  grunt.registerTask('web', 'launch webserver and watch tasks', [
    'parallel:web'
  ]);
  
  grunt.registerTask('default', ['compass:sass', 'web']);
  
};