
module.exports = require('./Stemplate.js');

if(module.hot) {
    module.hot.accept('./Stemplate.js', function() {
        var plugin = require('./Stemplate.js');
        core.reloadPlugin(plugin);
    });
}
