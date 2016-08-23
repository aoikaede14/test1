'use strict';

describe('ContentAController', function() {
  beforeEach(module('myApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('this.grade', function() {
    it('title is "Content A"', function() {
      var controller = $controller('ContentAController', { });
      expect(controller.title).toEqual('Content A');
    });
  });
});
