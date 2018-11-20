
module.exports = require('./popup.js');

if(module.hot) {
    module.hot.accept('./popup.js', function() {
        var plugin = require('./popup.js');
        core.reloadPlugin(plugin);
    });
}