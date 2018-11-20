
module.exports = require('./inputs.js');

if(module.hot) {
    module.hot.accept('./inputs.js', function() {
        var plugin = require('./inputs.js');
        core.reloadPlugin(plugin);
    });
}