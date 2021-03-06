
module.exports = {
    name: "loadSettings",
    dependencies: [],
    schema: [{
        key: 'name',
        type: 'string',
        value: 'unnamed'
    }],

    get() {

        var core = this;

        return (data, promise) => {
          var config = {};
          var menu = {};

          core.request.post('/loadSettings').then( ({ response, results, error }) => {

            if (error && error.data) {
              let notify = {
                  title: 'Config files',
                  text: error.data.msg,
                  alertKind: 'error'
              }
              core.emit('notify',notify);
              return;
            }
            else if (results && results.success) {
              let { data } = results;
              // _.map(data, configItem => {
              //   config[configItem.key] = {};
              // });
              menu = _.groupBy(data, 'key');
              for (let i in menu) {
                for (let x = 0; x < menu[i].length; x++) {
                  if (menu[i][x].modified) config[i] = menu[i][x].data;
                  else if (menu[i][x].fileName.indexOf('default') > -1) config[i] = menu[i][x].data;
                }
              }
              promise.resolve({ config, menu })
            }
          });
        };
    }
}
