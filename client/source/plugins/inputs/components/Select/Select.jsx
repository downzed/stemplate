
import { Select, MenuItem } from '@material-ui/core';

module.exports = {
    name: "Select",
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
                let { value, onChange, label, id, options, style } = this.props;
                return (
                    <Select
                        id={ id }
                        label={ label }
                        value={ value || '' }
                        style={{ width: '100%', ...style }}
                        onChange={ e => onChange(e.target.value) }
                        >
                    {
                        options.map(option => 
                            <MenuItem key={ option } value={ option }>{ option }</MenuItem>    
                            )
                        }
                    </Select>
                )
            }            
        }
    }
}