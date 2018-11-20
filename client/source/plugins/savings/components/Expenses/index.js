
module.exports = require('./Expenses.jsx');

if(module.hot) {
    module.hot.accept('./Expenses.jsx', function() {

        var Expenses = require('./Expenses.jsx');
        
        core.injector.revoke(Expenses.name);
        core.Component(Expenses);
        core.emit('hotUpdate');
        
    });
}