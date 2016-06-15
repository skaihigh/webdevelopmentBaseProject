module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            files: ['src/js/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                latedef: true,
                noarg: true,
                trailing: true
                //ignores: ['public/**/*.js']
            },
            client: {
                options: {
                    browser: true,
                    globals: {
                        jQuery: true
                    },
                    ignores: ['libs/*.js']
                },
                files: {
                    src: ['client/js/**/*.js']
                }
            }
        },

        sass: {
            options: {
                includePaths: [
                    'src/css/*.scss'
                ]
            },
            dest: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'src/css/styles.css': 'src/css/project.scss'
                }
            }
        },
        watch: {
            clientjs: {
                files: ['src/js/*.js'],
                tasks: ['jshint']
            },
            scss: {
                files: ['src/css/*.scss'],
                tasks: ['sass']
            },
            templates: {
                files: ['client/views/**/*.html'],
                tasks: ['copy:templates']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
   //  grunt.loadNpmTasks('grunt-contrib-concat');
   // grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
   // grunt.loadNpmTasks('grunt-angular-gettext');

    grunt.registerTask('default', ['jshint', 'sass']);
    grunt.registerTask('prod', ['default'/*, 'uglify'*/]);
    grunt.registerTask('hint', ['jshint']);
};
