
module.exports = {
    name: 'core.plugin.theme',
    dependencies: [],
    tree: {
        "colors": {
            "black": "#333333",
            "dark": "#333333",
            "gray": "#999999",
            "darkGray": "#666666",
            "secondary": "#ff4e50",
            "primary": "#303641",
            "third": "#88da4b",
            "fourth": "#4ea9d6",
            "white": "#ffffff",
            "boxShadow": "#cacaca",
            "borderDark": "#4e4e4e",
            "borderLight": "#eceff1"
        },
        "backgrounds": {
            "default": "#ffffff",
            "white": "#ffffff",
            "nav": "#333333",
            "primary": "#004175",
            "light_gray": "#efefef",
            "menu": "#efefef",
            "blue": "#007AFF",
            "root": "#efefef",
            "sideBar": "#303641"
        },
        "transparent": {
            "black_12": "#0000001F",
            "black_14": "#00000024",
            "black_20": "#00000033",
            "black_40": "#00000066",
            "black_75": "#000000bf", 
            "black_80": "#000000cc",
            "white_45": "#ffffff73",
            "white_85": "#ffffffd9"
        },
        "components":{
            "noResults": "#808080"
        },
        "notify": {
            "success": "#56b631",
            "error": "#cf3c3e",
            "warning": "#2a3640",
            "info": "#0085c2"
        },
        "icons": {
            "options": "more_vert",
            "add": "add",
            "general": {
              "save":"save",  
              "menu": "menu",
              "more": "more_vert",
              "folder": "folder",
              "addFolder": "create_new_folder",
              "folderShared": "folder_shared",
              "download": "file_download",
              "arrow_right": "arrow_right"
            },
            "notify":{
              "error": "error",
              "success": "check_circle",
              "info": "info",
              "warning": "warning"
            },
            "files":{
              "edit": "edit",
              "copy": "file_copy"
            },
            "nav": {
              "home": "home",
              "settings": "settings",
              "examples": "school"
            },
            "topBar": {
              "user": "person",
              "signIn": "input",
              "signOut": "launch",
              "search": "search"
            },
            "navigate": {
              "close": "close",
              "up": "keyboard_arrow_up",
              "arrow_up": "arrow_drop_up",
              "down": "keyboard_arrow_down",
              "arrow_down": "arrow_drop_down",
              "left": "keyboard_arrow_left",
              "arrow_left": "arrow_left",
              "right": "keyboard_arrow_right",
              "arrow_right": "arrow_right"
            },
            "panel":{
              "expandMore": "expand_more",
              "expandLess": "expand_less"
            }
        },
        "dimensions": {
            "nav": {
              "width": 225,
              "maxWidth": 225,
              "iconSize": 20,
              "fontSize": 14,
              "zIndex": 1101
            },
            "appBar": {
              "height": 60,
              "zIndex": 1102
            },
            "expandingMenu": {
              "width": 260
            }
        }
    },
    extend: {
        theme(path) {
            var theme = this.plugins['core.plugin.theme'];
            if (!path) return theme.get();
            if (this.isString(path)) {
                path = path.split(/[\.,\/]/);
            }
            var value = theme.get(path);
            return value;
        },
        icons(path) {
            var theme = this.plugins['core.plugin.theme'];
            var icons = theme.select('icons');
            if (!path) return icons.get();
            if (this.isString(path)) {
                path = path.split(/[\.,\/]/);
            }
            var value = icons.get(path);
            return value;
        },
        dim(path) {
            var theme = this.plugins['core.plugin.theme'];
            var dim = theme.select('dimensions');
            if (!path) return dim.get();
            if (this.isString(path)) {
                path = path.split(/[\.,\/]/);
            }
            var value = dim.get(path);
            return value;
        }
    },
    init(def, done) {
        var core = this;
        done({
            load(theme) {
                this.set(theme);
            }
        });

    }
};