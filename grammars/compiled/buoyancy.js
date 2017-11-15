// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

    // in node, require is defined, in browser, _ should be made available externally.
    var _; 
    if ( typeof require !== 'undefined' ){
        _ = require('lodash');
    } else {
        _ = window._;
    }

    /// simple wrapper function to attach an object with unification properties to a term
    function properties(object) {
        return function() {
            return object;
        }
    }

    function $(id, name) {
        return function(data) {
            var val = id;
            if ( +id === +id && id < data.length && id >= 0 ){
                val = data[id];
            }
                
            if (name) {
                // (IE<=11 doesn't support computed property names (ES5+)
                // return { [name]: val }
             
                var temp = {};
                temp[name] = val;
                return temp;
            } else {
                return val;
            }
        }
    }

    function join() {
        var ids = arguments;
        return function(data) {
            var val = {};
            for (id of ids) {
                _.merge(val, data[id]);
            }
            return val;
        }
    }

    // wrapper to attach empty properties object
    function nada() { return {} }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "HYPOTHESIS", "symbols": ["QUAL?", "if", "_", "ACTION", "then?", "ACTION"], "postprocess": function(d) { return _.merge( { independent: d[3], dependent: d[5] }, d[0] ) }},
    {"name": "HYPOTHESIS", "symbols": ["QUAL?", "ACTION", "_", "then", "_", "ACTION"], "postprocess": function(d) { return _.merge( { independent: d[1], dependent: d[5] }, d[0] ) }},
    {"name": "HYPOTHESIS", "symbols": ["ACTION", "_", "if", "_", "ACTION"], "postprocess": function(d) { return { independent: d[4], dependent: d[0] }}},
    {"name": "ACTION", "symbols": ["VAR", "_", "interactor", "_", "VAR"], "postprocess": function(d) { return [ _.merge( { variables: [ d[0], d[4] ] }, d[2] ) ] }},
    {"name": "ACTION", "symbols": ["hulpwerkwoord?", "VAR", "_", "MOD"], "postprocess": function(d) { return [ _.merge( d[1], d[3] ) ] }},
    {"name": "ACTION", "symbols": ["MOD", "_", "VAR", "hulpwerkwoord?"], "postprocess": function(d) { return [ _.merge( d[0], d[2] ) ] }},
    {"name": "ACTION", "symbols": ["ACTION", "_", "and", "_", "ACTION"], "postprocess": function(d) { return d[0].concat( d[4] ) }},
    {"name": "ACTION", "symbols": ["ACTION", "_", "QUAL"], "postprocess":  function(d) { 
           var actions = d[0];
           var qualifier = d[2];
           var n = actions.length;
           for ( var i = 0; i < n; i++ ){
                 actions[i] = _.merge( actions[i], qualifier )
           }         
           return actions;
        } },
    {"name": "MOD", "symbols": ["modifier"], "postprocess": $( 0 )},
    {"name": "VAR", "symbols": ["QUAL?", "VAR_ITEM"], "postprocess": join( 1, 0 )},
    {"name": "VAR", "symbols": ["VAR_ITEM", "_", "QUAL"], "postprocess": join( 0, 2 )},
    {"name": "VAR_ITEM", "symbols": ["preposition?", "article?", "variable"], "postprocess": $( 2 )},
    {"name": "VAR_ITEM", "symbols": ["PROP", "_", "VAR_ITEM"], "postprocess": join( 2, 0 )},
    {"name": "VAR_ITEM", "symbols": ["DESC", "_", "VAR_ITEM"], "postprocess": join( 2, 0 )},
    {"name": "VAR_ITEM", "symbols": ["QUAL", "_", "VAR_ITEM"], "postprocess": join( 2, 0 )},
    {"name": "PROP", "symbols": ["property", "_", "and", "_", "PROP"], "postprocess": function(d) { return { properties: d[4].properties.concat( d[0].property ) } }},
    {"name": "PROP", "symbols": ["article?", "property"], "postprocess": function(d) { return { properties: [ d[1].property ] } }},
    {"name": "DESC", "symbols": ["DESC_ITEM", "_", "DESC"], "postprocess": function(d) { return { descriptives: d[2].descriptives.concat( d[0] ) } }},
    {"name": "DESC", "symbols": ["DESC_ITEM"], "postprocess": function(d) { return { descriptives: [ d[0] ] } }},
    {"name": "DESC_ITEM", "symbols": ["preposition?", "article?", "descriptive"], "postprocess": function(d) { return d[2].descriptive; }},
    {"name": "DESC_ITEM", "symbols": ["preposition?", "article?", "variable"], "postprocess": function(d) { return d[2].variable; }},
    {"name": "QUAL?", "symbols": [], "postprocess": nada},
    {"name": "QUAL?$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "QUAL?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "QUAL?", "symbols": ["QUAL", "QUAL?$ebnf$1"], "postprocess": $( 0 )},
    {"name": "QUAL", "symbols": ["preposition?", "article?", "qualifier"], "postprocess": $( 2 )},
    {"name": "_", "symbols": [{"literal":" "}], "postprocess": nada},
    {"name": "and$string$1", "symbols": [{"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "and", "symbols": ["and$string$1"], "postprocess": nada},
    {"name": "article?", "symbols": [], "postprocess": nada},
    {"name": "article?", "symbols": ["article", "_"], "postprocess": nada},
    {"name": "article$string$1", "symbols": [{"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "article", "symbols": ["article$string$1"], "postprocess": nada},
    {"name": "article$string$2", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "article", "symbols": ["article$string$2"], "postprocess": nada},
    {"name": "article$string$3", "symbols": [{"literal":"e"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "article", "symbols": ["article$string$3"], "postprocess": nada},
    {"name": "preposition?", "symbols": [], "postprocess": nada},
    {"name": "preposition?", "symbols": ["preposition", "_"], "postprocess": nada},
    {"name": "preposition$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "preposition", "symbols": ["preposition$string$1"], "postprocess": nada},
    {"name": "preposition$string$2", "symbols": [{"literal":"v"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "preposition", "symbols": ["preposition$string$2"], "postprocess": nada},
    {"name": "if?", "symbols": [], "postprocess": nada},
    {"name": "if?", "symbols": ["if", "_"], "postprocess": nada},
    {"name": "if$string$1", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if", "symbols": ["if$string$1"], "postprocess": nada},
    {"name": "then?", "symbols": [], "postprocess": nada},
    {"name": "then?", "symbols": ["_"], "postprocess": nada},
    {"name": "then?$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "then?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "then?", "symbols": ["then?$ebnf$1", "then", "_"], "postprocess": nada},
    {"name": "then$string$1", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "then", "symbols": ["then$string$1"], "postprocess": nada},
    {"name": "then", "symbols": [{"literal":","}], "postprocess": nada},
    {"name": "hulpwerkwoord?", "symbols": [], "postprocess": nada},
    {"name": "hulpwerkwoord?", "symbols": ["hulpwerkwoord", "_"], "postprocess": nada},
    {"name": "variable$string$1", "symbols": [{"literal":"o"}, {"literal":"b"}, {"literal":"j"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$1"], "postprocess": $( 0, 'variable' )},
    {"name": "variable$string$2", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$2"], "postprocess": $( 0, 'variable' )},
    {"name": "variable$string$3", "symbols": [{"literal":"s"}, {"literal":"u"}, {"literal":"b"}, {"literal":"m"}, {"literal":"a"}, {"literal":"r"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$3"], "postprocess": $( 0, 'variable' )},
    {"name": "variable$string$4", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"u"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$4"], "postprocess": $( 0, 'variable' )},
    {"name": "variable$string$5", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$5"], "postprocess": $( 0, 'variable' )},
    {"name": "variable$string$6", "symbols": [{"literal":"b"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"t"}, {"literal":"j"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$6"], "postprocess": $( 'bal', 'variable' )},
    {"name": "variable$string$7", "symbols": [{"literal":"o"}, {"literal":"n"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"z"}, {"literal":"e"}, {"literal":"e"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$7"], "postprocess": $( 'submarine', 'variable' )},
    {"name": "variable$string$8", "symbols": [{"literal":"v"}, {"literal":"l"}, {"literal":"o"}, {"literal":"e"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$8"], "postprocess": $( 'fluid', 'variable' )},
    {"name": "property$string$1", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "property", "symbols": ["property$string$1"], "postprocess": $( 0, 'property' )},
    {"name": "property$string$2", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"n"}, {"literal":"s"}, {"literal":"i"}, {"literal":"t"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "property", "symbols": ["property$string$2"], "postprocess": $( 0, 'property' )},
    {"name": "property$string$3", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"l"}, {"literal":"u"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "property", "symbols": ["property$string$3"], "postprocess": $( 0, 'property' )},
    {"name": "property$string$4", "symbols": [{"literal":"m"}, {"literal":"a"}, {"literal":"s"}, {"literal":"s"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "property", "symbols": ["property$string$4"], "postprocess": $( 'mass', 'property' )},
    {"name": "property$string$5", "symbols": [{"literal":"d"}, {"literal":"i"}, {"literal":"c"}, {"literal":"h"}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "property", "symbols": ["property$string$5"], "postprocess": $( 'density', 'property' )},
    {"name": "descriptive", "symbols": [], "postprocess": nada},
    {"name": "interactor$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$1"], "postprocess": properties( { interaction: "greater than" } )},
    {"name": "interactor$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$2"], "postprocess": properties( { interaction: "smaller than" } )},
    {"name": "interactor$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$3"], "postprocess": properties( { interaction: "equal to" } )},
    {"name": "interactor$string$4", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$4"], "postprocess": properties( { interaction: "greater than" } )},
    {"name": "interactor$string$5", "symbols": [{"literal":"k"}, {"literal":"l"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$5"], "postprocess": properties( { interaction: "smaller than" } )},
    {"name": "interactor$string$6", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"j"}, {"literal":"k"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$6"], "postprocess": properties( { interaction: "equal to" } )},
    {"name": "modifier$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$1"], "postprocess": $( 0, 'change' )},
    {"name": "modifier$string$2", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$2"], "postprocess": $( 0, 'change' )},
    {"name": "modifier$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$3"], "postprocess": nada},
    {"name": "modifier$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$4"], "postprocess": nada},
    {"name": "modifier$string$5", "symbols": [{"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$5"], "postprocess": properties( { change: 'sink', mode: 'dependent' } )},
    {"name": "modifier$string$6", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"s"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$6"], "postprocess": properties( { change: 'sink', mode: 'dependent' } )},
    {"name": "modifier$string$7", "symbols": [{"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"t"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$7"], "postprocess": properties( { change: 'float', mode: 'dependent' } )},
    {"name": "modifier$string$8", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"f"}, {"literal":"l"}, {"literal":"o"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$8"], "postprocess": properties( { change: 'float', mode: 'dependent' } )},
    {"name": "modifier$string$9", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"j"}, {"literal":"g"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$9"], "postprocess": $( 0, 'change' )},
    {"name": "modifier$string$10", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$10"], "postprocess": $( 0, 'change' )},
    {"name": "modifier$string$11", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"t"}, {"literal":"z"}, {"literal":"e"}, {"literal":"l"}, {"literal":"f"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"l"}, {"literal":"i"}, {"literal":"j"}, {"literal":"f"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$11"], "postprocess": nada},
    {"name": "modifier$string$12", "symbols": [{"literal":"z"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$12"], "postprocess": properties( { change: 'sink', mode: 'dependent' } )},
    {"name": "modifier$string$13", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"j"}, {"literal":"f"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$13"], "postprocess": properties( { change: 'float', mode: 'dependent' } )},
    {"name": "modifier$string$14", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"t"}, {"literal":"z"}, {"literal":"e"}, {"literal":"l"}, {"literal":"f"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$14"], "postprocess": nada},
    {"name": "modifier$string$15", "symbols": [{"literal":"z"}, {"literal":"i"}, {"literal":"n"}, {"literal":"k"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$15"], "postprocess": properties( { change: 'sink', mode: 'dependent' } )},
    {"name": "modifier$string$16", "symbols": [{"literal":"d"}, {"literal":"r"}, {"literal":"i"}, {"literal":"j"}, {"literal":"v"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$16"], "postprocess": properties( { change: 'float', mode: 'dependent' } )},
    {"name": "hulpwerkwoord$string$1", "symbols": [{"literal":"z"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hulpwerkwoord", "symbols": ["hulpwerkwoord$string$1"]},
    {"name": "hulpwerkwoord$string$2", "symbols": [{"literal":"g"}, {"literal":"a"}, {"literal":"a"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hulpwerkwoord", "symbols": ["hulpwerkwoord$string$2"]}
]
  , ParserStart: "variable"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
