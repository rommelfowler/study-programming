
module.exports = function(grunt){
    // project configuration
    grunt.initConfig({

        concat:{
            release: {
                src: ['js/values.js',
                'js/prompt.js',
                'js/getImages.js'
                ],
                dest:'release/main.js'
            }
        },
        copy: {
            release: {
                src: 'manifest.json',
                dest: 'release/manifest.json'
            }
        },
        jshint: {
            files: [
              'js/values.js',
              'js/prompt.js',
              'js/getImages.js'
            ]
        },
        watch: {
          files: ['<%= jshint.files %>', 'manifest.json'],
          tasks: ['default']
        }
    });
    // we will load grunt plugins here
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // we will register tasks here
    grunt.registerTask('default', ['jshint', 'concat', 'copy']);

};
