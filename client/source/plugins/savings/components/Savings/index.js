
module.exports = require('./Savings.jsx');

if(module.hot) {
    module.hot.accept('./Savings.jsx', function() {

        var Savings = require('./Savings.jsx');
        
        core.injector.revoke(Savings.name);
        core.Component(Savings);
        core.emit('hotUpdate');
        
    });
}