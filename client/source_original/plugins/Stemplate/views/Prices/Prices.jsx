
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
                    <div>
                        Prices Page
                    </div>
                )
            }            
        }
    }
}