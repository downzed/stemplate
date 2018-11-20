module.exports = require('./router.js');

if(module.hot) {
    module.hot.accept('./router.js', function() {
        var plugin = require('./router.js');
        core.reloadPlugin(plugin);
    });
}