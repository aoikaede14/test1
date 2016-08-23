module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'dist/bower_components/angular/angular.js',
      'dist/bower_components/angular-mocks/angular-mocks.js',
      'dist/bower_components/angular-ui-router/release/angular-ui-router.js',
      'dist/bower_components/jquery/dist/jquery.js',
      'dist/bower_components/igniteui-angular/src/igniteui-angular.js',
      'app/scripts/**/*.js',
      'test/**/*.spec.js'
    ],

    exclude: [
    ],

    preprocessors: {
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
};
