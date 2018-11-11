
import React from 'react';
import pt from 'prop-types';
import Card from '@material-ui/core/Card';

module.exports = {
    name: "Home",
    description: '',
    propTypes: {
        // name: 'string',
        // title: { type: 'string' },
        // isOpen: false,
        // onChange(){}
    },
    bindings: {},    
    dependencies: [],    
    get() {
        
        var core = this;

        var { React, PropTypes } = core.imports;

        return {
            propsTypes: {
                // title: pt.string
            },
            getDefaultProps(){
                return {

                };
            },
            getInitialState() {

                return {

                };
            },
            componentDidMount() {

            },
            componentWillUnmount() {

            },
            render() {

                return (
                    <Card style={{display: 'inline-flex', padding: 24, flexDirection: 'column', width: 300, height: 180, justifyContent: 'center', alignItems: 'center'}}>
                        <span style={{fontSize: 64, color: core.theme("colors.darkGray")}}>Home</span>
                    </Card>
                )
            }            
        }
    }
}