module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/main.css': 'scss/main.scss',
				}
			}
		},

		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: ['sass'],
			}
		},

		jst: {
			compile: {
				options: {
					amd: true
				},
				files: {
					"client/scripts/templates.js": ["client/templates/**/*.html"]
				}
			}
		}

		
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jst');

	grunt.registerTask('default', ['sass', 'watch'] );
};
