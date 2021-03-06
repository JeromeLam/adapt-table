/*
 * adapt-table
 * License - https://github.com/JeromeLam/adapt-table/blob/master/LICENSE
 * Maintainers - Jerome Lam <jerome.lam@gmail.com>
 */
define(["coreViews/componentView", "coreJS/adapt"], function(ComponentView, Adapt) {

    var Handlebars = require('handlebars');

    // http://stackoverflow.com/a/19990215
    Handlebars.registerHelper('ifObject', function(item, options) {
        if (item.constructor && item.constructor === Object) {
            return options.fn(this);
        } else {
            return options.inverse(this);
        }
    });

    var Table = ComponentView.extend({

        preRender: function() {
            // Checks to see if the component should be reset on revisit
            this.checkIfResetOnRevisit();
        },

        postRender: function() {
            console.log("rendering");

            // IMPORTANT!
            // Both of the following methods need to be called inside your view.

            // Use this to set the model status to ready.
            // It should be used when telling Adapt that this view is completely loaded.
            // This is sometimes used in conjunction with imageReady.
            this.setReadyStatus();

            // Use this to set the model status to complete.
            // This can be used with inview or when the model is set to complete/the question has been answered.
            this.setCompletionStatus();
        },

        // Used to check if the component should reset on revisit
        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled then state and model attributes should be reset to default.
            if (isResetOnRevisit) {
                this.model.set({
                    _isEnabled: true,
                    _isComplete: false
                });
            }
        }

    });

    Adapt.register("table", Table);

    return Table;

});
