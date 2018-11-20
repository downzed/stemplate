
module.exports = require('./savings.js');

if(module.hot) {
    module.hot.accept('./savings.js', function() {
        var plugin = require('./savings.js');
        core.reloadPlugin(plugin);
    });
}