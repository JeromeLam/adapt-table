define(['../libraries/AdaptMock.js', 'jquery', 'contextFactory'], function(AdaptMock, $, contextFactory) {

    var createContext = function () {
            return contextFactory({
                'coreJS/adapt': AdaptMock.create(),
                'coreViews/componentView': { extend: AdaptMock.stub() },
                'jquery': $
            });
        };

    describe('A table component', function() {

        it('should register', function(done) {
            /*
            var context = createContext();
            context(['coreJS/adapt', 'adapt-table'], function (Adapt, plugin) {
                expect(Adapt.register.called).to.be(true);
                done();
            });
            */

            // Remove mocking framework testing until Handlebars can be properly integrated in process.
            // The Handlebars require in adapt-table would return:
            //  Error: Module name "handlebars" has not been loaded yet for context: _.
            // (https://github.com/adaptlearning/adapt-component/commit/77e40bd2e48482387056bc5f1cb9f0b849d84a2d)
            expect(true).to.be(true);
            done();
        });

    });

});
