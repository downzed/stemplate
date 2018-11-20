
module.exports = require('./core.plugin.widget.js');

if(module.hot) {
    module.hot.accept('./core.plugin.widget.js', function() {
        var plugin = require('./core.plugin.widget.js');
        core.reloadPlugin(plugin);
    });
}