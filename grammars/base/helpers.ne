@{%
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
%}