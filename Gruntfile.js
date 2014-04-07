module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

	  sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'expanded'
	      },
	      files: {                         // Dictionary of files
	        'css/main.css': 'css/main.scss',       // 'destination': 'source'
	      }
	    }
	  },

		watch: {
	    sass: {
	      // We watch and compile sass files as normal but don't live reload here
	      files: ['src/sass/*.sass'],
	      tasks: ['sass'],
      	options: {
		      interrupt: true,
		    },
	    }
		},
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= connect.all.options.port%>'
      }
    },

 
    // grunt-contrib-connect will serve the files of the project
    // on specified port and hostname
    connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
          // Prevents Grunt to close just after the task (starting the server) completes
          // This will be removed later as `watch` will take care of that
          keepalive: true
        }
      }
    }

  });


  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['sass']);

  // Creates the `server` task
  grunt.registerTask('server',[
  	'open',
    'connect'
  ]);
};