module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'styles/css/main.css': 'styles/sass/main.scss'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};