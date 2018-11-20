
import { TextField } from '@material-ui/core';

module.exports = {
    name: "Number",
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

                let { required, value, onChange, label, id, style } = this.props;
                return (
                    <TextField
                        required={ required }
                        autoComplete={ 'off' }
                        id={ id }
                        value={ value }
                        label={ label }
                        style={{ width: '100%', marginTop: 10, ...style }}
                        onChange={ e => onChange(e.target.value) }
                        type={ 'number' }
                    />
                )
            }            
        }
    }
}