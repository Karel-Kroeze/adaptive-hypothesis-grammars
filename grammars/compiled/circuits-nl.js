// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

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
    {"name": "HYPOTHESIS", "symbols": ["QUAL?", "if?", "ACTION?", "THEN?", "ACTION"], "postprocess": function(d) { return _.merge( { independent: d[2], dependent: d[4] }, d[0] ) }},
    {"name": "HYPOTHESIS", "symbols": ["QUAL?", "if?", "ACTION", "THEN?", "ACTION?"], "postprocess": function(d) { return _.merge( { independent: d[2], dependent: d[4] }, d[0] ) }},
    {"name": "HYPOTHESIS", "symbols": ["QUAL?", "if?", "ACTION?", "THEN", "ACTION?"], "postprocess": function(d) { return _.merge( { independent: d[2], dependent: d[4] }, d[0] ) }},
    {"name": "HYPOTHESIS", "symbols": ["ACTION?", "_", "if", "_", "ACTION?"], "postprocess": function(d) { return { independent: d[4], dependent: d[0] }}},
    {"name": "ACTION?", "symbols": ["ACTION"]},
    {"name": "ACTION?$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "ACTION?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ACTION?", "symbols": ["HELP?", "VAR", "ACTION?$ebnf$1", "MOD?", "HELP?"], "postprocess": function(d) { return [ _.merge( d[1], d[3] ) ] }},
    {"name": "ACTION?$ebnf$2", "symbols": ["_"], "postprocess": id},
    {"name": "ACTION?$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ACTION?", "symbols": ["HELP?", "MOD?", "ACTION?$ebnf$2", "VAR", "HELP?"], "postprocess": function(d) { return [ _.merge( d[3], d[1] ) ] }},
    {"name": "ACTION?", "symbols": ["ACTION?", "_", "and", "_", "ACTION?"], "postprocess": function(d) { return d[0].concat( d[4] ) }},
    {"name": "ACTION?", "symbols": ["ACTION?", "_", "QUAL"], "postprocess":  function(d) { 
           var actions = d[0];
           var qualifier = d[2];
           var n = actions.length;
           for ( var i = 0; i < n; i++ ){
                 actions[i] = _.merge( actions[i], qualifier )
           }         
           return actions;
        } },
    {"name": "ACTION", "symbols": ["VAR", "_", "interactor", "_", "VAR"], "postprocess": function(d) { return [ _.merge( { variables: [ d[0], d[4] ] }, d[2] ) ] }},
    {"name": "ACTION", "symbols": ["HELP?", "VAR", "_", "MOD", "HELP?"], "postprocess": function(d) { return [ _.merge( d[1], d[3] ) ] }},
    {"name": "ACTION", "symbols": ["HELP?", "MOD", "_", "VAR", "HELP?"], "postprocess": function(d) { return [ _.merge( d[3], d[1] ) ] }},
    {"name": "ACTION", "symbols": ["ACTION", "_", "and", "_", "ACTION?"], "postprocess": function(d) { return d[0].concat( d[4] ) }},
    {"name": "ACTION", "symbols": ["ACTION?", "_", "and", "_", "ACTION"], "postprocess": function(d) { return d[0].concat( d[4] ) }},
    {"name": "ACTION", "symbols": ["ACTION", "_", "QUAL"], "postprocess":  function(d) { 
           var actions = d[0];
           var qualifier = d[2];
           var n = actions.length;
           for ( var i = 0; i < n; i++ ){
                 actions[i] = _.merge( actions[i], qualifier )
           }         
           return actions;
        } },
    {"name": "MOD?", "symbols": []},
    {"name": "MOD?", "symbols": ["MOD"]},
    {"name": "MOD", "symbols": ["modifier"], "postprocess": $( 0 )},
    {"name": "HELP?", "symbols": [], "postprocess": nada},
    {"name": "HELP?", "symbols": ["HELP"]},
    {"name": "HELP$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "HELP$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "HELP$ebnf$2", "symbols": ["_"], "postprocess": id},
    {"name": "HELP$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "HELP", "symbols": ["HELP$ebnf$1", "hulpwerkwoord", "HELP$ebnf$2"]},
    {"name": "HELP", "symbols": ["HELP", "HELP"]},
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
    {"name": "if?$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "if?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "if?", "symbols": ["if?$ebnf$1", "if", "_"], "postprocess": nada},
    {"name": "if$string$1", "symbols": [{"literal":"a"}, {"literal":"l"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if", "symbols": ["if$string$1"], "postprocess": nada},
    {"name": "THEN?$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "THEN?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "THEN?", "symbols": ["THEN?$ebnf$1", "then", "_"], "postprocess": nada},
    {"name": "THEN?", "symbols": ["_"], "postprocess": nada},
    {"name": "THEN?", "symbols": [], "postprocess": nada},
    {"name": "THEN", "symbols": ["then", "_"], "postprocess": nada},
    {"name": "then$string$1", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "then", "symbols": ["then$string$1"], "postprocess": nada},
    {"name": "then", "symbols": [{"literal":","}], "postprocess": nada},
    {"name": "hulpwerkwoord?", "symbols": [], "postprocess": nada},
    {"name": "hulpwerkwoord?", "symbols": ["hulpwerkwoord", "_"], "postprocess": nada},
    {"name": "variable$string$1", "symbols": [{"literal":"l"}, {"literal":"a"}, {"literal":"m"}, {"literal":"p"}, {"literal":"j"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$1"], "postprocess": $(0, 'variable')},
    {"name": "variable$string$2", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"r"}, {"literal":"o"}, {"literal":"o"}, {"literal":"m"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$2"], "postprocess": $(0, 'variable')},
    {"name": "variable$string$3", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"l"}, {"literal":"t"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$3"], "postprocess": $(0, 'variable')},
    {"name": "variable$string$4", "symbols": [{"literal":"w"}, {"literal":"e"}, {"literal":"e"}, {"literal":"r"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$4"], "postprocess": $(0, 'variable')},
    {"name": "variable$string$5", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"l"}, {"literal":"d"}, {"literal":"e"}, {"literal":"r"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$5"], "postprocess": $(0, 'variable')},
    {"name": "variable$string$6", "symbols": [{"literal":"f"}, {"literal":"e"}, {"literal":"l"}, {"literal":"h"}, {"literal":"e"}, {"literal":"i"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$6"], "postprocess": $('helderheid', 'variable')},
    {"name": "descriptive$string$1", "symbols": [{"literal":"a"}, {"literal":"a"}, {"literal":"n"}, {"literal":"t"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "descriptive", "symbols": ["descriptive$string$1"], "postprocess": properties( { descriptive: "aantal" } )},
    {"name": "descriptive$string$2", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"k"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"s"}, {"literal":"c"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "descriptive", "symbols": ["descriptive$string$2"], "postprocess": properties( { descriptive: "elektrisch" } )},
    {"name": "qualifier$string$1", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "qualifier", "symbols": ["qualifier$string$1"], "postprocess": properties( { qualified: "serie schakeling" } )},
    {"name": "qualifier$string$2", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "qualifier", "symbols": ["qualifier$string$2"], "postprocess": properties( { qualified: "parallelle schakeling" } )},
    {"name": "qualifier$string$3", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "qualifier", "symbols": ["qualifier$string$3"], "postprocess": properties( { qualified: "parallelle schakeling" } )},
    {"name": "qualifier$string$4", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "qualifier", "symbols": ["qualifier$string$4"], "postprocess": properties( { qualified: "serie schakeling" } )},
    {"name": "qualifier$string$5", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"c"}, {"literal":"h"}, {"literal":"a"}, {"literal":"k"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"n"}, {"literal":"g"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "qualifier", "symbols": ["qualifier$string$5"], "postprocess": properties( { qualified: "parallelle schakeling" } )},
    {"name": "interactor$string$1", "symbols": [{"literal":"g"}, {"literal":"r"}, {"literal":"o"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$1"], "postprocess": properties( { interaction: true, operator: 'greater than' } )},
    {"name": "interactor$string$2", "symbols": [{"literal":"k"}, {"literal":"l"}, {"literal":"e"}, {"literal":"i"}, {"literal":"n"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"d"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$2"], "postprocess": properties( { interaction: true, operator: 'smaller than' } )},
    {"name": "interactor$string$3", "symbols": [{"literal":"g"}, {"literal":"e"}, {"literal":"l"}, {"literal":"i"}, {"literal":"j"}, {"literal":"k"}, {"literal":" "}, {"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"a"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$3"], "postprocess": properties( { interaction: true, operator: 'equal to' } )},
    {"name": "modifier$string$1", "symbols": [{"literal":"s"}, {"literal":"t"}, {"literal":"i"}, {"literal":"j"}, {"literal":"g"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$1"], "postprocess": properties( { change: 'increase' } )},
    {"name": "modifier$string$2", "symbols": [{"literal":"d"}, {"literal":"a"}, {"literal":"a"}, {"literal":"l"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$2"], "postprocess": properties( { change: 'decrease' } )},
    {"name": "modifier$string$3", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"t"}, {"literal":"z"}, {"literal":"e"}, {"literal":"l"}, {"literal":"f"}, {"literal":"d"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$3"], "postprocess": nada},
    {"name": "modifier$string$4", "symbols": [{"literal":"h"}, {"literal":"e"}, {"literal":"t"}, {"literal":"z"}, {"literal":"e"}, {"literal":"l"}, {"literal":"f"}, {"literal":"d"}, {"literal":"e"}, {"literal":" "}, {"literal":"b"}, {"literal":"l"}, {"literal":"i"}, {"literal":"j"}, {"literal":"f"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$4"], "postprocess": nada},
    {"name": "hulpwerkwoord$string$1", "symbols": [{"literal":"b"}, {"literal":"l"}, {"literal":"i"}, {"literal":"j"}, {"literal":"f"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hulpwerkwoord", "symbols": ["hulpwerkwoord$string$1"], "postprocess": nada},
    {"name": "hulpwerkwoord$string$2", "symbols": [{"literal":"z"}, {"literal":"a"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hulpwerkwoord", "symbols": ["hulpwerkwoord$string$2"], "postprocess": nada},
    {"name": "hulpwerkwoord$string$3", "symbols": [{"literal":"g"}, {"literal":"a"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hulpwerkwoord", "symbols": ["hulpwerkwoord$string$3"], "postprocess": nada}
]
  , ParserStart: "variable"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
