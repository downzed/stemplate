
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
                    <Card style={{display: 'inline-flex', padding: 12, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)'}}>
                        <span style={{fontSize: 32, color: core.theme("colors.darkGray")}}>Home</span>
                    </Card>
                )
            }            
        }
    }
}