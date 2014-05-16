module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],

        files: [
            //JASMINE,
            //JASMINE_ADAPTER,
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js',
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-mocks.js',
            'test1.js'
        ],

        logLevel: config.LOG_INFO

       // browsers: ['Chrome']
    });
};