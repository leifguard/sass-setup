module.exports = function (grunt) {
    // load all grunt tasks
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({
        sass:        {
            dist: {
                files: {
                    'css/styles.css' : 'css/scss/styles.scss'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'css/styles.min.css': ['css/styles.css']
                }
            }
        },
        watch: {
            css: {
                files: 'css/scss/**/*.scss',
                tasks: ['sass', 'cssmin']
            }
        }
    });
    grunt.registerTask('build', ['sass', 'cssmin']);
    grunt.registerTask('dev', ['sass', 'cssmin', 'watch']);
};
