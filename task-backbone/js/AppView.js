/**
 * Base application view
 */

var AppView = Backbone.View.extend({
    initialize: function() {

    },

    render: function() {
        this.$el.html(tpl.render('App', {}));
        return this;
    }

});
