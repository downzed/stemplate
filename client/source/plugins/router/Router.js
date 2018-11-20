
module.exports = {
    name: 'router',
    channels: ['router.navigation'],
    events: ['navigation'],
    tree: {
        defaultRoute: '',
        routes: [],
        path: [],
        query: {},
        encodeUrl: true
    },

    init(definition, done) {

        let core = this;
        let { React } = core.imports;
        let cursor = core.select(['plugins', 'router']);

        let router = {

            onHashChange() {
                let url = location.hash.substr(1);
                let { query, path } = router.parse(url);
                core.fire('router.navigation', { url, query, path }, ({ url, query, path }) => {
                    router.set('query', query);
                    router.set('path', path);
                    router.emit('navigation', { url, query, path });
                });
            },

            render(){

                return router.bind([], data => {
                    let { routes, path, query } = data;
                    let route = routes.find(r => r.name === path[0]);
                    return router.renderRoute(route, path, query);
                })
                 
            },

            renderRoute(route, path, query){
                if(!route){ return null; }
                let Component = core.components[route.component];
                if(!Component){
                    console.warn(`core.router - cannot find component '${ route.name }'`)
                    return null;
                }
                let child = (route.children || []).find(c => c.name === path[0]);
                path = path.slice(1);
                return React.createElement(Component, { route, path, query }, router.renderRoute(child, path, query));
            },

            config(options){
                cursor.merge(options);
                router.onHashChange();
            },

            to(path, query) {
                location.hash = router.stringify(path, query);
            },

            onUpdate(){
                location.hash = router.stringify(router.get('path'), router.get('query'));
            },

            parse(url){
                let result = { path: [], query: {} };
                if(!url){ return result; }
                url = decodeURIComponent(url);
                if(url[0] === '#'){ url = url.substr(1) }
                let queryStart = url.indexOf('{');
                if(queryStart > -1){
                    try {
                        let urlString = url.slice(0, queryStart);
                        let queryString = url.slice(queryStart);
                        result.path = urlString.split('/').filter(t => t);
                        result.query = JSON.parse(queryString) || {};
                    } catch (err) {
                        console.error(err);
                        result.error = err;
                        return result;
                    }
                }
                else{
                    result.path = url.split('/').filter(t => t);
                }
                return result;
            },

            stringify(path, query){
                if(core.isString(path)){
                    path = path.split('/').filter(n => n);
                }
                let json,hash = `/${ path.join('/')}/`;
                if(query && Object.keys(query).length){
                    json = JSON.stringify(query)
                    hash += router.get('encodeUrl') ? encodeURIComponent(json) : json;
                }
                return hash;
            }
        };

        router.query = cursor.select(['query']);

        cursor.on('update', router.onUpdate);

        window.addEventListener('hashchange', router.onHashChange);

        core.extend({ router });

        done(router);
    }
};