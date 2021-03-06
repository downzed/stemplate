
function parse(str, functions){
    var f, s, t, i, index, char;
    for(var m in functions){
        f = functions[m];
        s = m + '(';
        t = str.split(s);
        if(t[1]){
            t.map(function(x, i){
                if(i === 0){ return; }
                var l = x.split(')');
                var r = l.shift();
                if(!l.length){
                    throw new Error(`cannot find ')' in '${ x }'`)
                }
                t[i] = f(r) + l.join(')')
            })  
        }
        str = t.join('');
    }
    return str;
}

var functions = {
    '#yellow'(s){
        return s.yellow;
    },
    '#purple'(s){
        return s.purple;
    },
    '#blue'(s){
        return s.blue;
    },
    '#red'(s){
        return s.red;
    },
    '#cyan'(s){
        return s.cyan;
    },
    '#grey'(s){
        return s.grey;
    },
    '#green'(s){
        return s.green;
    }
}


module.exports = {
    name: 'core.node.log',
    dependencies: ['core.node.colors'],
    init(definition, done){
        
        let core = this;

        core.extend({
            log(){
                console.log.apply(console, [].slice.call(arguments).map(t => core.isString(t) ? parse(t, functions) : t));
            }
        });

        done();
    }
};