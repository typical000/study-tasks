/* global AppView */

/**
 * Main Backbone application
 * There is nothing of interesting in this file. Just initializing application, and no more.
 */

'use strict';

// Create basic applictions
var App = Backbone.App = function(options) {
    _.extend(this, options || {});
}

// Overwrite initialize methids adding regions
_.extend(App.prototype, Backbone.Events, {
    initialize: function() {
        var regions = {};

        _.each(this.regions, function(value, key) {
            regions[key] = new Backbone.Region(value);
        });

        this.regions = regions;
        this.ready();
    },
    ready: function() {}
});

// Create basic application instance
window.app = new Backbone.App({
    regions: {
        app: '#app'
    },

    ready: function() {
        this.regions.app.render(AppView, {});
    }

});

// Initialize it
$(function() {
    app.initialize();
});
