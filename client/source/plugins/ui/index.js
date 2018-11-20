module.exports = require('./ui.js');

if(module.hot) {
    module.hot.accept('./ui.js', function() {
        var plugin = require('./ui.js');
        core.reloadPlugin(plugin);
    });
}