
module.exports = require('./Income.jsx');

if(module.hot) {
    module.hot.accept('./Income.jsx', function() {

        var Income = require('./Income.jsx');
        
        core.injector.revoke(Income.name);
        core.Component(Income);
        core.emit('hotUpdate');
        
    });
}