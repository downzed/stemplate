

import { Card, CardActions, CardContent, CardMedia, Button, Typography, TextField, FormControl, FormHelperText, CircularProgress,
} from '@material-ui/core';

module.exports = {
    name: "Login",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    dependencies: ['agent'],    
    get(agent) {
        
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
                    email: 'koko@loko.com',
                    password: 'loko',
                    name: 'Koko',
                    signup: false,
                    ranAuth: false,
                    error: null,
                    loading: false
                };
            },
            componentDidMount() {
                agent.on('unauthorized', this.onUnauthorized);
                agent.post('/auth').end((err, res) => {
                    this.setState({
                        ranAuth: true
                    });
                    let user = res.body && res.body.user;
                    if(!err && user){
                        core.plugins.login.set('user', user);
                        this.onLogin(user);
                        // setTimeout(e => {
                        //     history.replaceState({}, document.title, '/');
                        // }, 20)
                    }
                })
            },
            componentWillUnmount() {
                agent.off('unauthorized', this.onUnauthorized);
            },
            onUnauthorized(){
                if(core.plugins.login.get('user')){
                    core.plugins.login.set('user', null);
                }
            },
            onLogin(user){
                if(this.props.onLogin){
                    this.props.onLogin(user);
                }
            },
            login(){
                let { email, password } = this.state;
                if(this.state.error){ this.setState({ error: null }); }
                agent.post('/login').send({ email, password }).end((err, res) => {
                    if(err){
                        return this.setState({ error: res.text || res.statusText || String(err) })
                    }
                    let user = res.body.user;
                    if(user){
                        core.plugins.login.set('user', user);
                        this.onLogin(user);
                        // setTimeout(e => {
                        //     history.replaceState({}, document.title, '/');
                        // }, 20)
                    }
                })
            },
            signUp(){
                if(this.state.error){ this.setState({ error: null }); }
                let { name, email, password } = this.state;
                agent.post('/signup').send({ name, email, password, parentId: '' }).end((err, res) => {
                    if(err){
                        return this.setState({ error: res.text || res.statusText || String(err) })
                    }
                    let user = res.body.user;
                    if(user){
                        core.plugins.login.set('user', user);
                        this.onLogin(user);
                    }
                })
            },
            submit(){
                let { signup } = this.state;
                signup ? this.signUp() : this.login();
            },
            handleChange(stateValue) {
                return (event) => {
                    this.setState({ [stateValue]: event.target.value, error: false });
                }
            },

            emailField() {
                let label = core.translate('email', 'Email');

                const pressEnter = (e) => {
                    if (e.charCode === 13 || e.key === 'Enter' ) {
                        this.logIn()
                    }
                };

                return (
                    <FormControl style={ styles.formControl} >
                        <FormHelperText id={'login_email'}>{ label }</FormHelperText>
                        <TextField
                            required
                            autoComplete={ 'off' }
                            id={ 'login_email' }
                            value={ this.state.email }
                            style={ styles.textField }
                            onChange={ this.handleChange('email') }
                            margin="normal"
                            type={ 'text' }
                            autoFocus={ true }
                            onKeyPress={ pressEnter }
                        />
                    </FormControl>
                );
            },

            passwordField() {
                let label = core.translate('password', 'Password');

                const pressEnter = (e) => {
                    if (e.charCode === 13 || e.key === 'Enter' ) {
                        this.logIn()
                    }
                };

                return (
                    <FormControl style={ styles.formControl} >
                        <FormHelperText id={'login_password'}>{ label }</FormHelperText>
                        <TextField
                            required
                            autoComplete={ 'off' }
                            id={ 'login_password' }
                            value={ this.state.password }
                            style={ styles.textField }
                            onChange={ this.handleChange('password') }
                            margin="normal"
                            type={ 'password' }
                            onKeyPress={ pressEnter }
                        />
                    </FormControl>
                );
            },

            errorWarning() {
                let {error} = this.state;

                let errorMsg = core.translate('usernameOrPasswordAreIncorrect', 'Username or Password are incorrect')

                if (error) return (
                    <Typography
                        variant={ "body1" }
                        component={ "div" }
                        color={ 'error' }
                        noWrap={ true }
                        style={ styles.errorMsg }
                    >
                        { errorMsg }
                    </Typography>
                );

                return null;
            },

            forgotPwd() {
                core.plugins.popovers.openPopup({
                    title: core.translate('forgotPassword', 'Forgot Password'),
                    body: <ForgotPassword/>,
                    bodyStyle: { minWidth: 530, minHeight: 'unset', padding: '0px 22px' },
                    okButton: {
                        btnTitle: core.translate('send', 'Send'),
                        btnFunc: (data)=>{
                            core.emit('ForgotPassword.action.play', data );
                        }
                    }
                });
            },

            renderLoginButton() {
                let {isWaiting} = this.state;

                if(isWaiting){
                    return(
                        <CircularProgress
                            size={ 20 }
                            thickness={ 4 }
                            color={ 'primary' }
                        />
                    )
                }

                return ( core.translate('Sign in') )
            },

            clear() {
                this.setState({email: '', password: ''});
            },

            renderLogo() {
                return(
                    <Card
                        style={ {...styles.media, backgroundColor: core.theme('backgrounds.primary')} }
                        title="Simple Switch" >
                        <Typography variant="body1" component="span" style={ {...styles.mediaHeader, color: core.theme('colors.white')} }>
                            {core.translate('Stemplate', 'Stemplate') }
                        </Typography>
                    </Card>
                );
            },

            renderButtons() {
                let { email, password, error, isWaiting } = this.state;
                let disabled = isWaiting || email.length < 1 || password.length < 1;

                const pressEnter = (e) => {
                    if (e.charCode === 13 || e.key === 'Enter' ) {
                        this.logIn()
                    }
                };

                return(
                    <CardActions style={ styles.buttonsLine }>
                        <Button
                            size="small"
                            variant="flat"
                            color="primary"
                            style={ {...styles.button, color: core.theme('colors.secondary') } }
                            onClick={ this.clear }
                            onKeyPress={ pressEnter }
                        >
                            { core.translate('Clear') }
                        </Button>
                        <Button
                            size="small"
                            variant="contained"
                            // color="primary"
                            style={ {...styles.button, color: core.theme('colors.white'),  backgroundColor: core.theme('colors.secondary')} }
                            onClick={ e => core.plugins.login.set('user', { name: 'Koko' }) }
                            onKeyPress={ pressEnter }
                            disabled={ disabled }
                        >
                            { this.renderLoginButton() }
                        </Button>
                    </CardActions>
                );
            },

            renderForgotPwd() {
                return(
                    <CardActions style={ styles.forgetPwdLine }>
                        <Button size="small" variant="flat" color="primary" onClick={ this.forgotPwd } style={ styles.ForgotPasswordButton } >
                            <span style={ {...styles.forgetPwdText, color: core.theme('colors.secondary') } } >
                                { core.translate('forgotYourPassword', 'Forgot your password?') }
                            </span>
                        </Button>
                    </CardActions>
                );
            },

            renderContent() {
                return(
                    <CardContent style={ styles.content }>
                        { this.emailField() }
                        { this.passwordField() }
                        { this.errorWarning() }
                    </CardContent>
                );
            },

            render() {
                let { login } = core.plugins;
                let { children } = this.props;
                let { ranAuth } = this.state;
                if(!ranAuth){
                    return null;
                }
                return login.bind(['user'], user => user ? children : (
                    <div className={'loginBackground'} style={ styles.root }>
                        <form>
                            <Card style={ styles.card }>
                                { this.renderLogo()      }
                                { this.renderContent()   }
                                { this.renderButtons()   }
                                { this.renderForgotPwd() }
                            </Card>
                        </form>
                    </div>
                ));
            },
            renderLogin() {
                let { signup, error } = this.state;
                return (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <div 
                            style={{ 
                                width: '300px',
                                background: '#ddd',
                                padding: 26,
                                boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
                            }}>
                            {
                                signup ? 
                                    <input 
                                        name="name"
                                        // autoComplete="username"
                                        style={{ marginBottom: 26, width: '100%', borderRadius: '6px', height: '34px', padding: '0 10px' }}
                                        type="text"
                                        placeholder="Name"
                                        value={ this.state.name }
                                        onChange={ e => this.setState({ name: e.target.value }) }/>
                                    : null                                    
                            }
                            <input 
                                name="email" 
                                // autoComplete="email" 
                                style={{ marginBottom: 26, width: '100%', borderRadius: '6px', height: '34px', padding: '0 10px' }}
                                type="email"
                                placeholder="Email"
                                value={ this.state.email }
                                onChange={ e => this.setState({ email: e.target.value }) }/>
                            <input 
                                name="password"
                                // autoComplete="current-password"
                                onKeyDown={ e => { if(e.keyCode === 13){ this.submit() } }}
                                style={{ marginBottom: 26, width: '100%', borderRadius: '6px', height: '34px', padding: '0 10px' }}
                                type="password"
                                placeholder="Password" value={ this.state.password }
                                onChange={ e => this.setState({ password: e.target.value }) }/>
                            <button style={{ 
                                borderRadius: '6px',
                                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 1px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px',
                                border: '0',
                                marginBottom: 18,
                                height: '34px',
                                width: '100%',
                                color: '#fff',
                                cursor:'pointer',
                                fontSize: '14px',
                                outline: 0,
                                background: 'rgb(67, 69, 136)' }} onClick={ this.submit }>
                                { signup ? 'Sign Up' : 'Log In' }
                            </button>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '14px'}}>
                                <div>
                                    <a href="#" onClick={ e => { this.setState({ signup: !signup }); e.preventDefault() } }>
                                        {
                                            signup ? 
                                            'Log In'  
                                            :  'Sign Up'
                                        }
                                    </a>
                                </div>
                                <div>
                                    <span style={{ color: '#e63535', fontSize: '14px' }}>
                                     { error }
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            },
            // render(){
            //     let { login } = core.plugins;
            //     let { children } = this.props;
            //     let { ranAuth } = this.state;
            //     if(!ranAuth){
            //         return null;
            //     }
            //     return login.bind(['user'], user => user ? children : this.renderLogin());
            // }         
        }
    }
}



const styles = {
    root: {
        height: '100%',
        width: '100%',
        overflow: "hidden",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'column',
    },
    card: {
        width: 290,
    },
    content: {
        padding: '22px 22px 0px 22px',
    },
    formControl: {
        width: '100%',
    },
    media: {
        height: 80,
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    mediaHeader: {
        fontSize: 14,
        fontFamily: "Roboto, sans-serif !important",
        fontStyle: "italic",
        marginTop: 5,
    },
    buttonsLine: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      margin: '6px',
    },
    button: {
        width: 85,
        height: 36,
    },
    forgetPwdLine: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      margin: '0px 6px 22px',
    },
    ForgotPasswordButton: {
        // padding: '7px 0px',
    },
    forgetPwdText: {
        fontSize: 10,
    },
    textField: {
        flex: 1,
        width: '100%',
        marginTop: 5,
        marginBottom: 15,
    },
    errorMsg: {
        color: 'red',
        display: 'flex',
        alignItems: 'center',
        height: 36,
    },
};