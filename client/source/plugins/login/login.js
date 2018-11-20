module.exports = {
    name: 'login',
    components: [
        require('./components/Login')
    ],
    tree: {
        user: null,
        error: null,
        isInSignUp: false,
        isLoading: false
    },
    dependencies: ['agent'],
    events: ['login'],
    init(definition, done){
        
        var core = this;

        var { agent } = core.plugins;

        var login = {
            login(data){  // email, password
                if(login.get('error')){ login.set('error', null); }
                agent.post('/login').send(data).end((err, res) => {
                    if(err){
                        return login.set('error', res.text || res.statusText || String(err) );
                    }
                    let user = res.body.user;
                    if(user){
                        login.set('user', user);
                        login.emit('login', user);
                        // setTimeout(e => {
                        //     history.replaceState({}, document.title, '/');
                        // }, 20)
                    }
                })
            },
            logout(){
                login.set('error', null);
                login.set('user', null);
                login.emit('logout');
                agent.setToken();
            },
            signup(data){  // name, email, password
                if(login.get('error')){ login.set('error', null); }
                agent.post('/signup').send(data).end((err, res) => {
                    if(err){
                        return login.set('error', res.text || res.statusText || String(err) );
                    }
                    let user = res.body.user;
                    if(user){
                        login.set('user', user);
                        login.emit('signup', user);
                        login.emit('login', user);
                    }
                })
            },
            submit(data){
                login.get('isInSignUp') ? login.signup(data) : login.login(data);
            },
            auth(cb){
                
                agent.post('/auth').end((err, res) => {
                    let user = res.body && res.body.user;
                    if(!err && user){
                        login.set('user', user);
                        login.emit('login', user);
                        // setTimeout(e => {
                        //     history.replaceState({}, document.title, '/');
                        // }, 20)
                    }
                    cb && cb(err, user);
                })
            },
            onUnauthorized(){
                if(login.get('user')){
                    login.set('user', null);
                }
            }
        };

        agent.on('unauthorized', login.onUnauthorized);

        done(login);
    }
};