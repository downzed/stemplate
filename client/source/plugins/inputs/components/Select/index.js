
module.exports = require('./Select.jsx');

if(module.hot) {
    module.hot.accept('./Select.jsx', function() {

        var Select = require('./Select.jsx');
        
        core.injector.revoke(Select.name);
        core.Component(Select);
        core.emit('hotUpdate');
        
    });
}