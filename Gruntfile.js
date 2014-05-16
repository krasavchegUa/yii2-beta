module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
           dist: {
               src: [
                'web/js/angular-route.min.js',
                   'web/js/ng-script.js'
               ],
               dest: 'web/js/concat.js'
           }
        },
        uglify: {
            build: {
                src: 'web/js/concat.js',
                dest: 'web/js/concat.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },
        watch: {
            /*scripts: {
                files: ['web/js/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false
                }
            }*/
            karma: {
                files: ['web/js/**/*.js'],
                tasks: ['karma:unit:run'] //NOTE the :run flag
            }
        },
        clean: ["web/assets/*/"],
        karma: {
            unit: {
                configFile: 'tests/js/karma.conf.js',
                autoWatch: true
            }
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'karma']);

};