
module.exports = require('./String.jsx');

if(module.hot) {
    module.hot.accept('./String.jsx', function() {

        var String = require('./String.jsx');
        
        core.injector.revoke(String.name);
        core.Component(String);
        core.emit('hotUpdate');
        
    });
}