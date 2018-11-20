
module.exports = require('./core.node.log.js');

if(module.hot) {
    module.hot.accept('./core.node.log.js', function() {
        var plugin = require('./core.node.log.js');
        core.reloadPlugin(plugin);
    });
}