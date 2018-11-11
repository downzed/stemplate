import Card from '@material-ui/core/Card';

module.exports = {
    name: "Prices",
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

                };
            },
            componentDidMount() {

            },
            componentWillUnmount() {

            },
            render() {

                return (
                    <Card style={{display: 'inline-flex', padding: 24, flexDirection: 'column', width: 300, height: 180, justifyContent: 'center', alignItems: 'center'}}>
                        <span style={{fontSize: 64, color: core.theme("colors.darkGray")}}>Prices</span>
                    </Card>
                )
            }            
        }
    }
}