
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      useNextVariants: false,
    },
  });

import { Card, CardActions, CardContent, Button, TextField, FormControl, FormHelperText, Select,
} from '@material-ui/core';

module.exports = {
    name: "Savings",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: [
        'login.Login',
        'TopBar',
        'Nav',
        'popup.Popup',
        'menu.Menu',
    ],
    get(Login, TopBar, Nav, Popup, Menu) {
        
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
                    activeView: 'home'
                };
            },
            componentDidMount() {
                core.onStateChange(e => this.forceUpdate() )
            },
            componentWillUnmount() {

            },
            addCategory(){
                core.popup({
                    state: {
                        name: 'kok'
                    },
                    renderBody(popup){
                            return (
                                <Card style={{ padding: 10 }}>
                                    <FormControl style={{ padding: 20 }} >
                                        <FormHelperText>Category Name</FormHelperText>
                                        <TextField
                                            required
                                            autoComplete={ 'off' }
                                            id={ 'category_name' }
                                            value={ popup.state.name }
                                            style={ {} }
                                            onChange={ e => popup.setState({ name: e.target.value }) }
                                            margin="normal"
                                            type={ 'text' }
                                            autoFocus={ true }
                                        />
                                    </FormControl>
                                    <CardActions style={{ justifyContent: 'space-between' }}>
                                        <Button
                                            size="small"
                                            variant="flat"
                                            color="primary"
                                            style={ { color: core.theme('colors.secondary') } }
                                            onClick={ () => popup.close() }
                                        >
                                            { core.translate('Cancel') }
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            // color="primary"
                                            style={ { color: core.theme('colors.white'),  backgroundColor: core.theme('colors.secondary')} }
                                            onClick={ e => popup.close() && savings.addCategory(popup.state.name) }
                                        >
                                        { core.translate('Create') }
                                        </Button>
                                    )
                                }
                                    
                            </CardActions>
                                </Card>
                            );
                    }
                })
            },
            render() {
                let { activeView } = this.state;
                return (
                    <MuiThemeProvider theme={theme}>
                        <Login>
                            <div style={{ height: '100%' }}>
                                <TopBar/>
                                <Nav/>
                                <div style={{ position: 'absolute', left: 225, right: 0, bottom: 0, top: 60 }}>
                                    { core.router.render() }
                                </div>
                            </div>
                        </Login>
                        <Popup/>
                        <Menu/>
                    </MuiThemeProvider>
                )
            }            
        }
    }
}