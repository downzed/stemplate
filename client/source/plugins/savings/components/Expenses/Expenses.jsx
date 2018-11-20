

import { IconButton, Icon, MenuItem, CardActions, CardContent, Button, TextField, FormControl, FormHelperText, Select,
} from '@material-ui/core';

module.exports = {
    name: "Expenses",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: ['Chart'],    
    get(Chart) {
        
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
                let { savings } = core.plugins;
                return (
                    <div style={{ height: '100%', position: 'relative' }}>
                        {
                            savings.bind(['expenses'], expenses =>
                                <Chart options={{
                                    tooltip: {
                                        trigger: 'item',
                                        formatter: "{a} <br/>{b}: {c} ({d}%)"
                                    },
                                    series : [
                                        {
                                            name: 'Expenses',
                                            type: 'pie',
                                            radius: '55%',
                                            data: expenses
                                        }
                                    ]
                                }}/>
                            )
                        }
                        <div style={{ position: 'absolute', top: 10, right: 10 }}>
                            <IconButton onClick={e => savings.run('addExpense') } style={{width: 48, height: 48, marginRight: 8}}>
                                <Icon style={{color: core.theme('colors.dark')}}>{core.icons('add')}</Icon>
                            </IconButton>
                            <IconButton 
                                onClick={e => 
                                    core.menu.open(e.currentTarget, [
                                        <MenuItem key="1" onClick={this.handleClose}>Profile</MenuItem>,
                                        <MenuItem key="2" onClick={this.handleClose}>My account</MenuItem>,
                                        <MenuItem key="3" onClick={this.handleClose}>Logout</MenuItem>
                                    ])
                            } style={{width: 48, height: 48, marginRight: 8}}>
                                <Icon style={{color: core.theme('colors.dark')}}>{core.icons('add')}</Icon>
                            </IconButton>
                        </div>
                    </div>
                )
            }            
        }
    }
}