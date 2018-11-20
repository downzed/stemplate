
module.exports = require('./Menu.jsx');

if(module.hot) {
    module.hot.accept('./Menu.jsx', function() {

        var Menu = require('./Menu.jsx');
        
        core.injector.revoke(Menu.name);
        core.Component(Menu);
        core.emit('hotUpdate');
        
    });
}