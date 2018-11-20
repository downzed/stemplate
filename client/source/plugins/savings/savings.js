module.exports = {
    name: 'savings',
    tree: require('./tree'),
    modules: [
        // require('./modules/NAME'),
    ],
    components: [
        require('./components/Home'),
        require('./components/Expenses'),
        require('./components/Income'),
        require('./components/Savings'),
    ],
    actions: [
        require('./actions/addExpense'),
    ],
    init(definition, done){
        
        var core = this;

        core.router.config({
            routes: [
                {
                    name: 'home',
                    label: 'Home',
                    component: 'savings.Home'
                },
                {
                    name: 'income',
                    label: 'Income',
                    component: 'savings.Income'
                },
                {
                    name: 'expenses',
                    label: 'Expenses',
                    component: 'savings.Expenses'
                }
            ],
            defaultRoute: "home"
        })

        var savings = {
            addCategory(name){
                savings.set('categories', savings.get('categories').concat(name));
            },
            addExpense(expense){
                savings.set(['expenses'], savings.get('expenses').concat(expense));
            },
            addIncome(income){
                savings.set(['incomes'], savings.get('incomes').concat(income));
            }
        };

        done(savings);
    }
};