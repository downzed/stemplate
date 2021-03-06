module.exports = {
    name: 'componentsCollection',
    dependencies: ['core.plugin.tree'],
    actions: [],
    modules: [],
    components: [
        require('./components/ExpandingPanel'),
        require('./components/TopBar'),
        require('./components/TitleBar'),
        require('./components/NoResults'),
        require('./components/ActionButton'),
        require('./components/Badge'),
        require('./components/Loader'),
        require('./components/IconPopover'),
        require('./components/Nav'),
        require('./components/CountrySelect'),
    ],

    extend: {
    },

    init(def, done){
        
    done({});    
    }
};