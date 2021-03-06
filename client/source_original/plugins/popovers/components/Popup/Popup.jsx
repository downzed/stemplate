import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CircularProgress } from '@material-ui/core';

module.exports = {
    name: 'Popup',
    description: '',
    propTypes: {},
    dependencies: ['componentsCollection.TitleBar', 'popovers.PopupHandler'],

    get(TitleBar, popupHandler) {

        var core = this;
        var { React, PropTypes } = core.imports;

        return {

            getInitialState() {
                return {
                    open: false,
                    title: core.translate('noTitle', 'No Title'),
                    body: (
                        <div>{core.translate('noContent', 'No Content')}</div>
                    ),
                    bodyStyle: {},
                    btnTitle: core.translate('ok','Ok'),
                    btnFunc: ()=>{console.log('No action')},
                    showButtons: true,
                    isLoading: false,
                    buttons: []
                };
            },

            componentDidMount() {
                core.on('Popup',this.handleClickOpen);
                core.on('Popup.close',this.handleClose);
            },

            componentWillUnmount() {
                core.off('Popup',this.handleClickOpen);
                core.off('Popup.close',this.handleClose);
            },

            handleClickOpen(popupData) {
                if(!popupData) {
                    this.setState({ open: true });
                    return
                }

                let {title, body, bodyStyle, btnTitle, btnFunc, showButtons, buttons, modalStyle } = popupData;

                this.setState({ title, body, bodyStyle, btnTitle, btnFunc, showButtons, buttons , modalStyle });
                this.setState({ open: true });
            },

            handleClose() {
                popupHandler.clearData();
                this.setState({ open: false, isLoading: false });
            },

            okFunc(data){
                let { btnFunc } = this.state;

                this.setState({isLoading: true})
                btnFunc(data);
            },

            styles(s, isDisabled) {
                let {bodyStyle, btnTitle} = this.state;
                let styles = {
                    root: {
                        minWidth: 500,
                        minHeight: 250,
                        position: 'relative',
                        ...bodyStyle
                    },

                    okButton: {
                        background: isDisabled ? core.theme('colors.gray2'):core.theme('backgrounds.blue'),
                        minHeight: 30,
                        maxHeight: 30,
                        width: 72,
                        color: isDisabled ? core.theme('colors.dark') : core.theme('colors.white'),
                        pedding: 0,
                        fontSize: 12,
                        borderRadius: 2

                    },

                    cancelButton: {
                        minHeight: 30,
                        maxHeight: 30,
                        width: 72,
                        color: core.theme('colors.subHeader'),
                        pedding: 0,
                        fontSize: 12,
                        borderRadius: 2
                    },

                    buttonsCont: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        margin: 20,
                    },
                    
                    popHeader: {
                        padding: '0 15px',
                    }

                }
                return(styles[s]);
            },

            renderButtons(popup){
                let { btnTitle, isLoading, showButtons, buttons } = this.state;
                return (
                    <div style={this.styles('buttonsCont')} >
                        <div style={{ display: 'flex', alignItems: 'center' }}>

                        { (buttons) ? buttons : null }
                        {
                            (!btnTitle) ? null :
                            <Button onClick={ ()=>{ this.okFunc(popup.data) } } style={this.styles('okButton', popup.disable)} disabled={popup.disable} autoFocus>
                                { (isLoading) ? <CircularProgress  size={20}/> : btnTitle }
                            </Button>
                        }
                        </div>
                        <Button onClick={ this.handleClose } style={this.styles('cancelButton')} color="secondary">
                            { core.translate('Cancel') }
                        </Button>
                    </div>
                );
            },

            render() {
                let {title, body , buttons, modalStyle} = this.state;
                return core.bind(['plugins', 'popovers', 'popup'], (popup)=>{

                    const closeButton = ()=>{
                        return [
                            <Icon 
                                style={{ color: core.theme('colors.white'), cursor: 'pointer' }} 
                                onClick={this.handleClose} title={core.translate('close')}>
                                { core.icons('navigate.close') }
                            </Icon>
                        ];
                    };

                    const dialogtitle = ()=>{
                        return (
                            <Typography 
                                style={
                                    { fontWeight: 500, 
                                      fontSize: 13, 
                                      color: core.theme('colors.white'), 
                                      textTransform: 'uppercase', 
                                      margin: 0, 
                                      fontWeight: 600 
                                    }
                                }
                            >
                                { title }
                            </Typography>
                        );
                    };

                    return (
                        <Dialog
                            open={this.state.open || false}
                            onClose={this.handleClose}
                            maxWidth={false}
                            PaperProps={{ square: true, style: { borderRadius: 2, height: 360, overflowY: 'visible', ...modalStyle } }}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">

                            <TitleBar
                                style={ this.styles('popHeader') }
                                title={ dialogtitle() }
                                buttons={ closeButton() }
                                bgColor={ core.theme("backgrounds.nav") }
                                fgColor={ core.theme('colors.white') }
                                height={ 40 }
                            />
                            <div style={ this.styles('root') }>
                                { body }
                            </div>

                                { this.renderButtons(popup) }

                        </Dialog>
                    );

                });


            }
        };
    }
};
