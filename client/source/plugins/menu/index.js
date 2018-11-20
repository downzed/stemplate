
module.exports = require('./menu.js');

if(module.hot) {
    module.hot.accept('./menu.js', function() {
        var plugin = require('./menu.js');
        core.reloadPlugin(plugin);
    });
}