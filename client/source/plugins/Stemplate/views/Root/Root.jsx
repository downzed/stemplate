
const navOpenedWidth = 180;
const navClosedWidth = 60;

module.exports = {
    name: 'Root',
    description: '',
    bindings:{
        isLoggedIn: ['isLoggedIn'],
        currentUser :['currentUser']
    },
    dependencies: [
        'Stemplate.Mixin',
        'ui.TopBar',
        'ui.Nav',
        // 'popovers.Notify',
        // 'popovers.Popup',
        // 'popovers.Caution',
        // 'popovers.Lightbox',
        'ui.Loader',
        'snackbar.Snackbar',
        'login.Login',
    ],
    get(Mixin, TopBar, Nav, 
        // Notify, Popup, Caution, Lightbox, 
        Loader, Snackbar, Login) {

        var core = this;
        var { React, PropTypes } = core.imports;

        return {
            mixins: [ Mixin ],

            propsTypes: {
                path: PropTypes.array,
            },

            getInitialState() {
                return {
                    text: 'Root',
                    activeView: 'home',
                    start: false,
                    navWidth: navClosedWidth
                };
            },

            componentWillMount () {
                this.start();
            },

            componentDidMount() {
                core.on('notify',this.addNotification);
            },

            componentWillUnmount() {
                core.off('notify',this.addNotification);
            },

            componentDidCatch(err){
                this.setState({ error: err && err.toString() })
            },

            start() {
                // core.plugins.Stemplate.getInitialFiles(()=>{
                //     this.getLanguage();
                //     this.initialUnits();
                // });
                // this.getDataExample();
            },

            initialUnits() {

                this.colors = {
                };

                this.backgrounds = {
                    content: core.theme('backgrounds.content'),
                };

                this.icons = {
                };

                this.units = {
                    appBarHeight: core.dim("appBar.height"),
                    navWidth: core.dim("nav.width"),
                };

            },

            getLanguage() {
                const start = ()=>{ this.setState( {start:true} )};
                core.plugins.Stemplate.run('getLanguage').then(start).catch(start);
            },

            getDataExample(){
                core.plugins.Stemplate.run('getDataEx').then((modifyData)=>{
                    // console.log('modifyData--> ',modifyData);
                  }).catch( ()=>{
                //    console.log('2--> ',2);
                });
            },

            handleNav(route){
              core.plugins.router.to('/'+route);
              this.setState({ activeView: route })
            },

            handleLoggedIn(){
              core.plugins.router.to('/home');
              this.setState({ activeView: 'home' })
            },

            onNavigation(route){
                this.setState({activeView:route.name});
            },

            styles(s,place = {}) {

                let styles = {

                    root: {
                        width:'100%',
                        height:'100%',
                        overflow: 'hidden',
                        position: 'relative',
                        background: core.theme('backgrounds.light_gray')
                    },

                    content: {
                        position: 'absolute',
                        top:  core.dim("appBar.height"),
                        left: this.state.navWidth,
                        transition: 'all 0.25s ease-out 0s',
                        bottom: 0,
                        right: 0,
                        overflow: 'hidden',
                        backgroundColor: core.theme('backgrounds.content'),
                        padding: 12
                    },
                }
                return(styles[s]);
            },

            render() {
                let { activeView, navWidth } = this.state;

                return (
                    <Login>
                        <div style={ this.styles('root') }>
                            {/* <Lightbox /> */}
                            <TopBar handleNavState={() => {this.setState({navWidth: (navWidth === navClosedWidth) ? navOpenedWidth : navClosedWidth})}} navWidth={navWidth} navIsOpen={navWidth === navOpenedWidth} />
                            <Nav handleViews={this.handleNav} activeView={activeView} navWidth={navWidth} />
                            
                            {/* <Notify />
                            <Popup />
                            <Caution /> */}
                            <Snackbar />

                            <div style={ this.styles('content') }>
                                { core.router.render() }
                            {/* <Router routes={routes} defaultRoute={'/home'}  onNavigation={this.onNavigation} /> */}
                            </div>
                        </div>
                    </Login>
                )
            }
        }
    }
};
