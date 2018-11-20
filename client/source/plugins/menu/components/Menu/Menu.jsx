
import Menu from '@material-ui/core/Menu';

module.exports = {
    name: "Menu",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: [],    
    get() {
        
        var core = this;

        var { React, PropTypes } = core.imports;

        return {
            propsTypes: {
                // title: PropTypes.string
            },
            getDefaultProps(){
                return {

                };
            },
            getInitialState() {

                return {
                    anchorEl: null
                };
            },
            componentDidMount() {

            },
            componentWillUnmount() {

            },
            render() {
                // let { id } = this.props;
                return core.menu.bind([], menu => {
                    return <Menu
                    id={ 'core.menu'}
                    anchorEl={ menu.getAnchorElement() }
                    open={ menu.isOpen }
                    onClose={ menu.close }
                    >
                        { menu.getContent() }
                    </Menu>
                }
                )
            }            
        }
    }
}