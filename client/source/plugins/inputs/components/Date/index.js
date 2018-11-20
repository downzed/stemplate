
module.exports = require('./Date.jsx');

if(module.hot) {
    module.hot.accept('./Date.jsx', function() {

        var Date = require('./Date.jsx');
        
        core.injector.revoke(Date.name);
        core.Component(Date);
        core.emit('hotUpdate');
        
    });
}