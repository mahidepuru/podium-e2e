module.exports = function (grunt) {


    grunt.initConfig({
        protractor: {
            options: {
                configFile: "node_modules/grunt-protractor-runner/node_modules/protractor/example/conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            e2e: {
                options: {
                    configFile: "config.js", // Target-specific config file
                    // Stops Grunt process if a test fails
                    keepAlive: false
                }
            },
            continuous: {
                options: {
                    configFile: "config.js", // Target-specific config file
                    keepAlive: true
                }
            }

        },
        watch: {
            options: {
                livereload: true
            },
            protractor: {
                files: ['tests/**/*.spec.js'],
                tasks: ['protractor:continuous']
            }
        }
    });


    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-watch');


    //grunt.registerTask('e2e-test', ['connect:test', 'protractor:continuous', 'watch:protractor']);
    grunt.registerTask('e2e-watch', ['protractor:continuous', 'watch:protractor']);
    grunt.registerTask('e2e', ['protractor:e2e', 'watch:protractor']);

    //TODO ALLOW to run protractor SUITS -very important

    grunt.registerTask('default', ['e2e']);
};
