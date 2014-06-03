module.exports = function(grunt) {

	grunt.loadNpmTasks("grunt-ts");
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({

		ts: {

			kurst: {
				src: ['src/**/*.ts'],
				outDir:'bin/js',
				options: {
					target: 'es5',
					sourcemap: false,
					declaration: false,
					comments: false,
					module: 'amd'
				}
			}
		},

		watch: {
			main: {
				files: ['**/*.ts'],
				tasks: ['ts:kurst' ],
				options: {
					spawn: false
				}
			}

		}

    });

	grunt.registerTask('default', 		[ 'ts:kurst' ]);
	grunt.registerTask('watch-main', 	[ 'watch:main' ]);


};