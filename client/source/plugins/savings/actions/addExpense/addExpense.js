

import { MenuItem, Card, CardActions, CardContent, Button, TextField, FormControl, FormHelperText, Select,
} from '@material-ui/core';



module.exports = {
    name: "addExpense",
    dependencies: [],
    schema: [{
        key: 'name',
        type: 'string',
        value: 'unnamed'
    }],
    get() {
        
        var core = this;
        var { React } = core.imports;

        return ({}, promise) => {
            let { savings } = core.plugins;

            core.popup.create({
                title: 'Add Expense',
                schema: [
                    {
                        key: 'name',
                        type: 'Select',
                        label: 'Category',
                        options: savings.get('categories'),
                    },
                    {
                        key: 'value',
                        type: 'Number',
                        label: 'Amount'
                    },
                    {
                        key: 'time',
                        type: 'Date',
                        label: 'Time'
                    }
                ],
                data: {
                    name: 'Rent',
                    value: 100
                }
            }, (expense) => {
                savings.addExpense(expense);
            });
        };
    }
}