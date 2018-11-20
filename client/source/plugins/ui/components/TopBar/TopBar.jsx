import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const styles = {
    appBar: {
        boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)', 
        height: 60, 
        alignItems: 'center', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    logoWrapper: {
        overflow: 'hidden', 
        transition: 'all 0.25s ease-out 0s', 
        display: 'flex', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 16px 0 6px'
    },
    logoContainer: {
        display: 'flex', 
        alignItems: 'center'
    },
    logoButton: {
        width: 48, 
        height: 48
    },
    logoImage: {
        height: 26, 
        maxWidth: '100%'
    },
    logoLabel: {
        fontSize: 18, 
        letterSpacing: 2, 
        padding: '0 6px'
    },
    appBarRight: {
        display: 'flex', 
        height: '100%', 
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'space-between', 
        padding: '0px 16px 0 8px'
    },
    appBarRight_left: {
        display: 'flex', 
        alignItems: 'center'
    },
    appBarRight_right: {
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 0 0 16px'
    },
    navButton: {
        width: 48, 
        height: 48, 
        marginRight: 8
    },
    userAvatar: {
        width: 32, 
        height: 32, 
        marginRight: 12
    },
    userInfo: {
        display: 'flex',
        flexDirection: 'column'
    },
    userName: {
        fontSize: 14, 
        display: 'flex', 
        alignItems: 'center',
        fontWeight: 500
    },
    userGroup: {
        fontSize: 12, 
        display: 'flex', 
        alignItems: 'center', 
        opacity: .75
    },
    loginBtn: {
        borderRadius: 0, 
        padding: '6px 9px', 
        minHeight: 30
    },
    loginBtnLabel: {
        fontSize: 12, 
        marginRight: 8
    },
    loginBtnIcon: {
        fontSize: 16
    }
}

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
                let { handleNavState, navWidth, navIsOpen } = this.props;

                return (
                    <AppBar position="static" style={{...styles.appBar, background: core.theme('backgrounds.white')}}>
                        <div style={{ ...styles.logoWrapper, width: navWidth, background: core.theme('colors.primary')}}>
                            <div style={styles.logoContainer}>
                                <IconButton onClick={() => {}} style={styles.logoButton}>
                                    <img src="resources/images/logo.png" style={styles.logoImage}/>
                                </IconButton>
                                <span style={styles.logoLabel}>Stemplate</span>
                            </div>
                        </div>
                        <div style={styles.appBarRight}>
                            <div style={styles.appBarRight_left}>
                                <IconButton onClick={handleNavState} style={styles.navButton}>
                                    <Icon style={{color: core.theme('colors.dark')}}>
                                        {navIsOpen ? core.icons('general.close') : core.icons('general.menu')}
                                    </Icon>
                                </IconButton>
                                <Avatar style={{...styles.userAvatar, background: core.theme('colors.third')}}>
                                    <Icon>{core.icons('topBar.user')}</Icon>
                                </Avatar>
                                <div style={styles.userInfo}>
                                    <span style={{...styles.userName, color: core.theme('colors.primary')}}>Ido Ofir</span>
                                    <span style={{...styles.userGroup, color: core.theme('colors.primary')}}>Administrator</span>
                                </div>
                            </div>
                            <div style={styles.appBarRight_right}>
                                <Button size="small" style={{...styles.loginBtn, background: core.theme('colors.fourth')}} onClick={e => this.setState({logedIn: !logedIn})}>
                                    <span style={{...styles.loginBtnLabel, color: core.theme('colors.white')}}>{logedIn ? "Logout" : "Login"}</span>
                                    <Icon style={{...styles.loginBtnIcon, color: core.theme('colors.white')}}>
                                        {logedIn ? core.icons('topBar.signOut') : core.icons('topBar.signIn')}
                                    </Icon>
                                </Button>
                            </div>
                        </div>
                    </AppBar>
                );
            }
        };
    }
};
