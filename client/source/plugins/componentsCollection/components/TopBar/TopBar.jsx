import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

module.exports = {
    name: 'TopBar',
    dependencies: [],
    get() {

        var core = this;
        var { React } = core.imports;

        return {

            getInitialState(){
                return {
                    logedIn: true
                };
            },

            render() {
                let { logedIn } = this.state;

                return (
                    <AppBar position="static" style={{height: 60, alignItems: 'center', flexDirection: 'row', background: core.theme('colors.purple'), justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px 0 8px', background: core.theme('colors.primary')}}>
                            <IconButton onClick={e => {}} style={{width: 48, height: 48, marginRight: 8}}>
                                <Icon style={{color: core.theme('colors.white')}}>{core.icons('general.menu')}</Icon>
                            </IconButton>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <img src="resources/images/logo.png" style={{height: 28, maxWidth: '100%', marginRight: 12}}/>
                                <span style={{fontSize: 18, letterSpacing: 2}}>Stemplate</span>
                            </div>
                        </div>
                        <div style={{display: 'flex', height: '100%', alignItems: 'center', flex: 1, justifyContent: 'space-between', padding: '0 16px'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <Avatar style={{width: 32, height: 32, background: core.theme('colors.secondary'), marginRight: 12}}><Icon>{core.icons('topBar.user')}</Icon></Avatar>
                                <div style={{display: 'flex', flexDirection: 'column'}}>
                                    <span style={{fontSize: 14, display: 'flex', alignItems: 'center', color: core.theme('colors.white'), fontWeight: 500}}>Ido Ofir</span>
                                    <span style={{fontSize: 12, display: 'flex', alignItems: 'center', color: core.theme('colors.white'), opacity: .75}}>Administrator</span>
                                </div>
                            </div>
                            <div style={{display: 'flex', alignItems: 'center', padding: '0 16px'}}></div>
                            <Button size="small" color="primary" style={{background: core.theme('colors.secondary'), borderRadius: 0, padding: '6px 12px'}} onClick={e => this.setState({logedIn: !logedIn})}>
                                <span style={{fontSize: 12, color: core.theme('colors.white'), marginRight: 8}}>{logedIn ? "Logout" : "Login"}</span>
                                <Icon style={{color: core.theme('colors.white'), fontSize: 16}}>{logedIn ? core.icons('topBar.signOut') : core.icons('topBar.signIn')}</Icon>
                            </Button>
                        </div>
                    </AppBar>
                );
            }
        };
    }
};
