
module.exports = require('./Prices.jsx');

if(module.hot) {
    module.hot.accept('./Prices.jsx', function() {

        var Prices = require('./Prices.jsx');
        
        core.injector.revoke(Prices.name);
        core.Component(Prices);
        core.emit('hotUpdate');
        
    });
}