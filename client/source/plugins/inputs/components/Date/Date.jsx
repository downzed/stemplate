
// import { MuiPickersUtilsProvider } from 'material-ui-pickers';
// pick utils
// import MomentUtils from '@date-io/moment';
// import { DatePicker } from 'material-ui-pickers';

module.exports = {
    name: "Date",
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
                let { value, onChange, label } = this.props;
                return (
                    <input type="date" onChange={ onChange } value={ value }/>
                    // <MuiPickersUtilsProvider utils={MomentUtils}>
                        // <DatePicker
                        //     style={{ marginTop: 10, width: '100%' }}
                        //     value={ value }
                        //     onChange={ onChange }
                        //     showTodayButton
                        //     label={ label }
                        // />
                    // </MuiPickersUtilsProvider>
                )
            }            
        }
    }
}