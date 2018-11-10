var React = require('react');
var ReactDom = require('react-dom');
var core = require('core.web');

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();

// automatically require all files that contain a '.module.' pattern.
core.injector.loadContext('Stemplate', require.context('./', true, /.*\.module\./));

core.plugin([
    
    require('./plugins/translate'),
    require('./plugins/request'),
    require('./plugins/router'),

    require('./plugins/access'),
    
    require('./plugins/componentsCollection'),
    require('./plugins/popovers'),
    require('./plugins/gallery'),
    require('./plugins/widgetManager'),
    require('./plugins/snackbar'),
    
    require('./plugins/Stemplate'),
])

core.require(['Stemplate.Root'], (Root) => {
    core.tree.commit();  // to prevent duplicate first render when Baobab updates
    ReactDom.render(<MuiThemeProvider theme={theme}><Root /></MuiThemeProvider>, document.getElementById('app'))
});
