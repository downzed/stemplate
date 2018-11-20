module.exports = {
    name: 'core.plugin.widget',
    tree: {},
    init(definition, done){
        
        let core = this;
        let plugin = {};

        core.extend({
            widgets: {},
            Widget(options){
                let type = core.typeOf(options);
                if(type === 'object'){
                    let id = options.id;
                    if(!id){
                        throw new Error(`core.Widget() - a widget must have an id`);
                    }
                    let widget = Object.create(plugin.select(id));
                    widget.render = function(render){
                        return plugin.bind(id, render);
                    };
                    core.widgets[id] = widget;
                    widget.set(options.data);
                    return widget;
                }
                else if(type === 'array'){
                    return options.map(core.Widget);
                }
                throw new Error(`core.Widget() - argument must be an object or an array, got '${ type }'`)
            }
        });

        done(plugin);
    }
};