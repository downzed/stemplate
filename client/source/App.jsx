var React = require('react');
var ReactDom = require('react-dom');
var core = require('core.web');

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme();

// automatically require all files that contain a '.module.' pattern.
core.injector.loadContext('Stemplate', require.context('./', true, /.*\.module\./));

core.plugin([
    
    require('./plugins/agent'),
    require('./plugins/core.plugin.state'),
    require('./plugins/core.plugin.widget'),
    require('./plugins/interact'),
    require('./plugins/login'),
    require('./plugins/theme'),
    require('./plugins/translate'),
    require('./plugins/popup'),
    require('./plugins/menu'),
    require('./plugins/router'),
    require('./plugins/inputs'),
    require('./plugins/snackbar'),
    require('./plugins/ui'),
    
    require('./plugins/Stemplate'),
])

core.require(['Stemplate.Root'], (Root) => {
    core.tree.commit();  // to prevent duplicate first render when Baobab updates
    ReactDom.render(<MuiThemeProvider theme={theme}><Root /></MuiThemeProvider>, document.getElementById('app'))
});
