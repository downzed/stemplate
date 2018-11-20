
import { DialogContent, Dialog, TextField, Button, DialogActions, DialogTitle 
} from '@material-ui/core';

        // custom popup
        // closeAll  -- logout
        // closeSelector
        // closeFunction
        // esc key


function match(a, b){
    if(a === b) { return true; }
    if(!a || !b) { return false; }
    var typeA = typeof a;
    var typeB = typeof b;
    if(typeA !== typeB) { return false; }
    if(typeA !== 'object'){
        return false;
    }
    if(Array.isArray(a)){
        if(!Array.isArray(b)){ return false; }
        for(var i = 0; i < a.length; i++){
            if(!match(a[i], b[i])){ return false; }
        }
    }
    else{
        if(Array.isArray(b)){ return false; }
        for(var m in a){
            if(!match(a[m], b[m])){ return false; }
        }
    }
    return true;
}

module.exports = {
    name: 'popup',
    tree: {
        popups: []
    },
    types: [{
        name: 'popup',
        schema: [
            {
                key: 'isOpen',
                type: 'boolean',
                defaultValue: false
            },
            {
                key: 'title',
                type: 'string',
                defaultValue: 'Popup'
            },
            {
                key: 'actions',
                type: 'array',
                defaultValue: []
            },
            {
                key: 'render',
                type: 'function'
            },
            {
                key: 'renderBody',
                type: 'function',
                defaultValue(){ return 'Popup'; }
            }
        ]
    }],
    components: [{
        name: 'PopupInstance',
        get(){
            var core = this;
            var { React } = core.imports;

            return {
                shouldComponentUpdate(nextProps){
                    return (nextProps.popup !== this.props.popup);
                },
                render(){
                    var { popup } = this.props;
                    if(!popup){ return null; }
                    if(popup.render){
                        return popup.render(popup);
                    }
                    var actions = popup.actions || (popup.getActions && popup.getActions(popup)) || []
                    return (
                        <Dialog
                            title={ popup.title }
                            actions={ actions }
                            open={ popup.isOpen }
                            onClose={ e => popup.close() }>
                            {
                                popup.renderBody(popup)
                            }
                        </Dialog>
                    );
                }
            }
        }
    }],
    views: [{
        name: 'Popup',
        dependencies: ['popup.PopupInstance'],
        bindings: {
            popups: 'popups'
        },
        get(PopupInstance){
            var core = this;
            var { React } = core.imports;
            return {
                render(){
                    return (
                        <div style={{ ...this.props.style }}>
                            {
                                this.props.popups.map((popup, index) => 
                                    <PopupInstance key={ index } popup={ popup } index={ index }/>
                                )
                            }
                        </div>
                    )
                }
            }
        }
    }],
    init(definition, done){
        
        var core = this;

        var defaults = {
            index: 0,
            isOpen: false,
            state: {},
            get(path){
                if(!Array.isArray(path)){
                    path = [path];
                }
                return plugin.get(['popups', this.index, 'state'].concat(path));
            },
            setState(object, value){
                var statePath = ['popups', this.index, 'state'];
                var state = Object.assign({}, plugin.get(statePath), object);
                plugin.set(statePath, state);
            },
            set(path, value){
                if(!Array.isArray(path)){
                    path = [path];
                }
                plugin.set(['popups', this.index].concat(path), value);
            },
            title: 'Popup',
            renderBody(){
                return 'Popup'
            },
            submit(popup){
                popup.close();
            },
            close(){
                plugin.close(this.index);
            },

        }

        var plugin = {
            open(popup, options){
                var popups = [ ...plugin.get(['popups']) ];
                if(core.isFunction(popup)){
                    var index = popups.length;
                    popup = { renderBody: popup, isOpen: true, close: plugin.close, index: index, ...options };
                }
                else{
                    if(popup.id){
                        var existing = plugin.get(['popups', { id: popup.id }]);
                        if(existing){
                            popup = Object.assign({}, existing, popup);
                            plugin.set(['popups', { id: popup.id }], popup);
                            return popup;
                        }
                    }
                    var popupSubmit = popup.submit || defaults.submit;
                    popup = Object.assign({}, defaults, popup, { 
                        isOpen: true, 
                        submit(){
                            popupSubmit(plugin.get(['popups', popup.index]));
                        } 
                    });
                }
                var reopened = popups.find((instance, i) => { 
                    if(!instance.isOpen){
                        popup.index = i;
                        popups[i] = popup;
                        return true;
                    }
                });
                if(!reopened){
                    popup.index = popups.length;
                    popups.push(popup);
                }
                plugin.set(['popups'], popups);
                return popup;
            },
            close(selector){
                var type = core.typeOf(selector);
                if(type === 'undefined'){  // no selector - just close the last popup that was opened
                    plugin.set(['popups', plugin.getLastOpenedIndex(), 'isOpen'], false);
                }
                else if(type === 'number'){  // selector is a number - close the popup at this index
                    plugin.set(['popups', selector, 'isOpen'], false);
                }
                else if(type === 'object'){  // selector is an object - close all popup that match this object ( all the keys of selector have the same value on the popup )
                    plugin.set(['popups'], plugin.get(['popups']).map(popup => {
                        if(match(selector, popup)){ return { ...popup, isOpen: false }; }
                        return popup;
                    }));
                }
                else if(type === 'function'){  // selector is a function - use it as a filter function.
                    plugin.set(['popups'], plugin.get(['popups']).map(popup => {
                        if(selector(popup)){ return { ...popup, isOpen: false }; }
                        return popup;
                    }));
                }
            },
            getLastOpenedPopup(popups){
                var reversed = [ ...popups ].reverse();
                return reversed.find(i => i.isOpen);
            },
            getLastOpenedIndex(){
                var popups = plugin.get(['popups']);
                var lastOpen = this.getLastOpenedPopup(popups);
                return ( lastOpen ? popups.indexOf(lastOpen) : popups.length - 1 );
            },
            closeAll(){
                plugin.set(['popups'], plugin.get(['popups']).map(popup => ({ ...popup, isOpen: false })));
            },
            create({ title, schema, data = {} }, done){
                let { React } = core.imports;
                let state = {};
                schema.map(item => {
                    let value, type = item.type.toLowerCase();
                    if(item.key in data){
                        value = data[item.key];
                    }
                    else if(core.types[type]){
                        value = core.type.getDefaultValue(type);
                    }
                    state[item.key] =  value;
                })
                plugin.open({
                    title,
                    state,
                    render(popup){
                        return (
                            <Dialog
                                open={popup.isOpen}
                                onClose={popup.close}
                                aria-labelledby="form-dialog-title"
                                >
                                <DialogTitle id="form-dialog-title">{ title }</DialogTitle>
                                <DialogContent>
                                    {
                                        schema.map(item => {
                                            let Component = core.plugins.inputs.components[item.type]
                                            return (
                                                <Component
                                                    value={ popup.state[item.key] }
                                                    onChange={ value => popup.setState({ [item.key]: value }) }
                                                        { ...item }
                                                    />
                                            );
                                        })
                                    }
                                    
                                </DialogContent>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', padding: 20 }}>
                                        <Button
                                            size="small"
                                            variant="flat"
                                            color="primary"
                                            style={ { color: core.theme('colors.secondary'), marginRight: 20 } }
                                            onClick={ () => {
                                                popup.close();
                                                done();
                                            }}
                                        >
                                            { core.translate('Cancel') }
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            // color="primary"
                                            style={ { color: core.theme('colors.white'),  backgroundColor: core.theme('colors.secondary')} }
                                            onClick={ e => {
                                                popup.close();
                                                done(popup.state);
                                            }}
                                        >
                                        { core.translate('Create') }
                                        </Button>
                                    </div>
                                </Dialog>
                        );
                    }
                })
            }
        };

        core.extend({ popup: plugin });

        done(plugin);
    }
};

// core.popup is called twice but only one popup will open
// core.popup({
//     id: 'myCustomPopupId',
//     render(popup){
//         return (
//             <MyCustomPopup
//                 isOpen={ popup.isOpen }
//                 close={ e => popup.close() }/>
//         );
//     }
// });

// core.popup(popup => 'This text will appear inside a popup', { title: 'My Popup', id: '123' });





// core.plugin({
//     name: 'links',
//     components: [
//         require('./components/LinksPopup')
//     ],
//     actions: [
//         require('./actions/createLink')
//     ],
//     init(def, done){

//         var linksPlugin = {
//             create(params, done){
//                 core.popup({
//                     render(popup){
//                         var { LinksPopup } = linksPlugin.components;
//                         return (
//                             <LinksPopup 
//                                 isOpen={ popup.isOpen }
//                                 close={ e => popup.close() }
//                                 onSubmit={ data => linksPlugin.run('createLink', data) }
//                                 onDone={ done }
//                                 params={ params }/>
//                         );
//                     }
//                 });
//             }
//         };

//         done(linksPlugin);
//     }
// });















