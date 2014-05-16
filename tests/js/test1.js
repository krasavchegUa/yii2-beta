angular.module('myApp.services', []).
    value('version', '0.2');

'use strict';

describe('service', function() {
    beforeEach(module('myApp.services'));


    describe('version', function() {
        it('should return current version', inject(function(version) {
            expect(version).toEqual('0.2');
        }));
    });
});

describe('Places service', function() {
    var $httpBackend, injector;

    var response = [
        {
            'id': 1,
            'p_title': 'title 1',
            'p_description': 'desc 1',
            "p_lng": 50.4,
            "p_lat": 30.76,
            'p_user': 1
        }
    ];

    var newPlace = {
        'id': '3',
        'p_title': 'title 3',
        'p_description': 'desc 3',
        'p_lng': '50.4',
        'p_lat': '30.76',
        'p_user': 1
    };

    beforeEach(function() {
        module('personalmaps', function($provide) {
            $provide.value('lang', '');
        });

        inject(function($injector, lang) {
            injector = $injector;
            $httpBackend = $injector.get('$httpBackend');
            $httpBackend.when('GET', 'api/places').respond(response);
            $httpBackend.when('POST', 'api/places').respond(newPlace);
            $httpBackend.when('PUT', 'api/places/2').respond(response[1]);
            $httpBackend.when('PUT', 'api/places/5').respond(response[1]);
            $httpBackend.when('DELETE', 'api/places/2').respond('');
            $httpBackend.when('GET', 'foo/bar.json?lang=en').respond('[]');
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('calls api/places', function() {
        $httpBackend.expectGET('api/places');
        injector.get('Places');
        $httpBackend.flush();
    });

});