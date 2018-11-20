
module.exports = require('./Number.jsx');

if(module.hot) {
    module.hot.accept('./Number.jsx', function() {

        var Number = require('./Number.jsx');
        
        core.injector.revoke(Number.name);
        core.Component(Number);
        core.emit('hotUpdate');
        
    });
}