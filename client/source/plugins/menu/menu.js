module.exports = {
    name: 'menu',
    components: [
        require('./components/Menu')
    ],
    tree: {
        isOpen : false,
        getContent(){
            return null
        },
        getAnchorElement(){
            return null;
        },
        close(){
            core.menu.close();
        }
    },
    init(definition, done){
        
        var core = this;

        var menu = {
            open(anchorElement, content){
                menu.set('isOpen', true);
                menu.set('getContent', () => content);
                menu.set('getAnchorElement', () => anchorElement);
            },
            close(){
                menu.set('isOpen', false);
            }
        }

        core.extend({
            menu: menu
        });

        done(menu);
    }
};