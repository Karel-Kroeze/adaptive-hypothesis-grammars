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
    {"name": "ACTION", "symbols": ["VAR", "_", "MOD"], "postprocess": function(d) { return [ _.merge( d[0], d[2] ) ] }},
    {"name": "ACTION", "symbols": ["MOD", "_", "VAR"], "postprocess": function(d) { return [ _.merge( d[2], d[0] ) ] }},
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
    {"name": "and$string$1", "symbols": [{"literal":"a"}, {"literal":"n"}, {"literal":"d"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "and", "symbols": ["and$string$1"], "postprocess": nada},
    {"name": "article?", "symbols": [], "postprocess": nada},
    {"name": "article?", "symbols": ["article", "_"], "postprocess": nada},
    {"name": "article$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "article", "symbols": ["article$string$1"], "postprocess": nada},
    {"name": "article", "symbols": [{"literal":"a"}], "postprocess": nada},
    {"name": "article$string$2", "symbols": [{"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "article", "symbols": ["article$string$2"], "postprocess": nada},
    {"name": "preposition?", "symbols": [], "postprocess": nada},
    {"name": "preposition?", "symbols": ["preposition", "_"], "postprocess": nada},
    {"name": "preposition$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "preposition", "symbols": ["preposition$string$1"], "postprocess": nada},
    {"name": "preposition$string$2", "symbols": [{"literal":"o"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "preposition", "symbols": ["preposition$string$2"], "postprocess": nada},
    {"name": "if?", "symbols": [], "postprocess": nada},
    {"name": "if?", "symbols": ["if", "_"], "postprocess": nada},
    {"name": "if$string$1", "symbols": [{"literal":"i"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "if", "symbols": ["if$string$1"], "postprocess": nada},
    {"name": "then?", "symbols": [], "postprocess": nada},
    {"name": "then?", "symbols": ["_"], "postprocess": nada},
    {"name": "then?$ebnf$1", "symbols": ["_"], "postprocess": id},
    {"name": "then?$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "then?", "symbols": ["then?$ebnf$1", "then", "_"], "postprocess": nada},
    {"name": "then$string$1", "symbols": [{"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "then", "symbols": ["then$string$1"], "postprocess": nada},
    {"name": "then", "symbols": [{"literal":","}], "postprocess": nada},
    {"name": "variable$string$1", "symbols": [{"literal":"b"}, {"literal":"u"}, {"literal":"l"}, {"literal":"b"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$1"], "postprocess": $(0, 'variable')},
    {"name": "variable$string$2", "symbols": [{"literal":"c"}, {"literal":"u"}, {"literal":"r"}, {"literal":"r"}, {"literal":"e"}, {"literal":"n"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$2"], "postprocess": $(0, 'variable')},
    {"name": "variable$string$3", "symbols": [{"literal":"v"}, {"literal":"o"}, {"literal":"l"}, {"literal":"t"}, {"literal":"a"}, {"literal":"g"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$3"], "postprocess": $(0, 'variable')},
    {"name": "variable$string$4", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"s"}, {"literal":"i"}, {"literal":"s"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"c"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$4"], "postprocess": $(0, 'variable')},
    {"name": "variable$string$5", "symbols": [{"literal":"b"}, {"literal":"r"}, {"literal":"i"}, {"literal":"g"}, {"literal":"h"}, {"literal":"t"}, {"literal":"n"}, {"literal":"e"}, {"literal":"s"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "variable", "symbols": ["variable$string$5"], "postprocess": $(0, 'variable')},
    {"name": "descriptive$string$1", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"m"}, {"literal":"b"}, {"literal":"e"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "descriptive", "symbols": ["descriptive$string$1"], "postprocess": $(0, 'descriptive')},
    {"name": "descriptive$string$2", "symbols": [{"literal":"e"}, {"literal":"l"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}, {"literal":"r"}, {"literal":"i"}, {"literal":"c"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "descriptive", "symbols": ["descriptive$string$2"], "postprocess": $(0, 'descriptive')},
    {"name": "qualifier$string$1", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "qualifier", "symbols": ["qualifier$string$1"], "postprocess": properties( { qualified: "series circuit" } )},
    {"name": "qualifier$string$2", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "qualifier", "symbols": ["qualifier$string$2"], "postprocess": properties( { qualified: "parallel circuit" } )},
    {"name": "qualifier$string$3", "symbols": [{"literal":"s"}, {"literal":"e"}, {"literal":"r"}, {"literal":"i"}, {"literal":"e"}, {"literal":"s"}, {"literal":" "}, {"literal":"c"}, {"literal":"i"}, {"literal":"r"}, {"literal":"c"}, {"literal":"u"}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "qualifier", "symbols": ["qualifier$string$3"], "postprocess": $(0, 'qualified')},
    {"name": "qualifier$string$4", "symbols": [{"literal":"p"}, {"literal":"a"}, {"literal":"r"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"l"}, {"literal":" "}, {"literal":"c"}, {"literal":"i"}, {"literal":"r"}, {"literal":"c"}, {"literal":"u"}, {"literal":"i"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "qualifier", "symbols": ["qualifier$string$4"], "postprocess": $(0, 'qualified')},
    {"name": "interactor$string$1", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"g"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"t"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$1"], "postprocess": properties( { interaction: true, operator: 'greater than' } )},
    {"name": "interactor$string$2", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"s"}, {"literal":"m"}, {"literal":"a"}, {"literal":"l"}, {"literal":"l"}, {"literal":"e"}, {"literal":"r"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"a"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$2"], "postprocess": properties( { interaction: true, operator: 'smaller than' } )},
    {"name": "interactor$string$3", "symbols": [{"literal":"i"}, {"literal":"s"}, {"literal":" "}, {"literal":"e"}, {"literal":"q"}, {"literal":"u"}, {"literal":"a"}, {"literal":"l"}, {"literal":" "}, {"literal":"t"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "interactor", "symbols": ["interactor$string$3"], "postprocess": properties( { interaction: true, operator: 'equal to' } )},
    {"name": "modifier$string$1", "symbols": [{"literal":"i"}, {"literal":"n"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$1"], "postprocess": properties( { change: 'increase' } )},
    {"name": "modifier$string$2", "symbols": [{"literal":"d"}, {"literal":"e"}, {"literal":"c"}, {"literal":"r"}, {"literal":"e"}, {"literal":"a"}, {"literal":"s"}, {"literal":"e"}, {"literal":"s"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$2"], "postprocess": properties( { change: 'decrease' } )},
    {"name": "modifier$string$3", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":"s"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$3"], "postprocess": nada},
    {"name": "modifier$string$4", "symbols": [{"literal":"w"}, {"literal":"i"}, {"literal":"l"}, {"literal":"l"}, {"literal":" "}, {"literal":"r"}, {"literal":"e"}, {"literal":"m"}, {"literal":"a"}, {"literal":"i"}, {"literal":"n"}, {"literal":" "}, {"literal":"t"}, {"literal":"h"}, {"literal":"e"}, {"literal":" "}, {"literal":"s"}, {"literal":"a"}, {"literal":"m"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "modifier", "symbols": ["modifier$string$4"], "postprocess": nada}
]
  , ParserStart: "variable"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
