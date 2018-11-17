import { List, Icon, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

const styles = {
    placeHolderContainer: {
        transition: 'all .25s ease-out',
        position: 'relative',
        height:'100%'
    },
    container: {
        height: `calc(100% - 60px)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all .25s ease-out',
        overflow: 'hidden',
        position: 'absolute',
        boxShadow: "rgba(0, 0, 0, 0.12) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.2) 0px 1px 10px 0px",
        width: '100%'
    },
    rowContainer: {
        width: '100%',
        padding: '0',
        height: 40,
        cursor: 'pointer',
        zIndex: 1,
    },
    rowInner: {
        display: 'flex',
        flex: 1,
        padding: '12px 16px 12px 16px',
        alignItems: 'center',
    },
    rowIcon: {
        marginRight: 6,
        fontSize: 18,
    },
    rowLabel: {
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontSize: 12,
    },
    navList: {
        padding: 0
    },
}

module.exports = {
    name: 'Nav',
    dependencies: [],
    get() {

        var core = this;
        var { React } = core.imports;

        return {

            getInitialState(){
                return {
                }
            },

            getListData(listPosition){
                switch(listPosition) {
                    case 'top':
                        return [
                            {
                                label: core.translate('Home'),
                                icon: core.icons('nav.home'),
                                view: 'home'
                            },
                            {
                                label: core.translate('Prices'),
                                icon: core.icons('nav.examples'),
                                view: 'prices'
                            },
                        ];

                    case 'bottom':
                        return [];
                    default:
                        return [];
                }
            },

            setActiveItem(view){
               this.props.handleViews(view);
            },

            renderItemMap(item, key, position) {
                let { activeView } = this.props;

                let view = item.view || null;
                if ( item.disabled ) return null;
                
                let isActive = (activeView === item.view);

                let itemStyle = {
                    ...styles.rowContainer, 
                    background: isActive ? "rgba(0, 0, 0, 0.08)" : "transparent",
                    borderTop: item.renderTopBorder ? `1px solid ${core.theme('colors.borderDark')}` : 'none',
                    borderLeft: isActive ? `5px solid  ${core.theme('colors.third')}`: 'none',
                    paddingLeft: isActive ? 0 : 5
                }
                let innerStyle = {
                    ...styles.rowInner, 
                    opacity:  isActive ? 1 : .65
                }

                return (
                    <ListItem
                        key={key}
                        title={item.label}
                        button={true}
                        onClick={this.setActiveItem.bind(this,view)}
                        disabled={item.disabled}
                        style={ itemStyle }
                    >
                        <div style={ innerStyle }>
                            <ListItemIcon>
                                <Icon style={{ ...styles.rowIcon, color: core.theme('colors.secondary') }} >
                                    {item.icon}
                                </Icon>
                            </ListItemIcon>
                            <ListItemText
                                primary={ 
                                    <span style={{ ...styles.rowLabel, color: core.theme('colors.white') }}>
                                        {item.label}
                                    </span> 
                                }
                            />
                        </div>
                    </ListItem>
                );
            },

            renderNavRow(items, position){
                
                return (
                    <List component="nav" style={styles.navList}>
                        { items.map( (item, key)=>{ return this.renderItemMap(item, key, position) } ) }
                    </List>
                )
            },

            render() {
                let { navWidth } = this.props;
                return (
                    <div style={{ ...styles.placeHolderContainer, width: navWidth }}>
                        <div style={{ ...styles.container, background: core.theme('colors.primary') }} >
                            {this.renderNavRow(this.getListData('top'), 'top')}
                            {this.renderNavRow(this.getListData('bottom'), 'bottom')}
                        </div>
                    </div>
                );
            }
        };
    }
};
