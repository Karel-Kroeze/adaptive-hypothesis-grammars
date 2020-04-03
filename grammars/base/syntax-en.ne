@include "./helpers.ne"

HYPOTHESIS -> QUAL? if _ ACTION then? ACTION   {% function(d) { return _.merge( { independent: d[3], dependent: d[5] }, d[0] ) } %}
            | QUAL? ACTION _ then _ ACTION         {% function(d) { return _.merge( { independent: d[1], dependent: d[5] }, d[0] ) } %}
            | ACTION _ if _ ACTION             {% function(d) { return { independent: d[4], dependent: d[0] }} %}

# Always return array of actions for further processing
ACTION -> VAR _ interactor _ VAR    {% function(d) { return [ _.merge( { variables: [ d[0], d[4] ] }, d[2] ) ] } %}
        | VAR _ MOD                 {% function(d) { return [ _.merge( d[0], d[2] ) ] } %}
        | MOD _ VAR                 {% function(d) { return [ _.merge( d[2], d[0] ) ] } %}
        | ACTION _ and _ ACTION     {% function(d) { return d[0].concat( d[4] ) } %}
        | ACTION _ QUAL             {% function(d) { 
                                                      var actions = d[0];
                                                      var qualifier = d[2];
                                                      var n = actions.length;
                                                      for ( var i = 0; i < n; i++ ){
                                                            actions[i] = _.merge( actions[i], qualifier )
                                                      }         
                                                      return actions;
                                                   } %}

MOD -> modifier                     {% $( 0 ) %}

VAR -> QUAL? VAR_ITEM               {% join( 1, 0 ) %}
     | VAR_ITEM _ QUAL              {% join( 0, 2 ) %}

VAR_ITEM -> preposition? article? variable      {% $( 2 ) %}
     | PROP _ VAR_ITEM                          {% join( 2, 0 ) %}
     | DESC _ VAR_ITEM                          {% join( 2, 0 ) %}
     | QUAL _ VAR_ITEM                          {% join( 2, 0 ) %}
     
# put each property in a properties array
PROP -> property _ and _ PROP       {% function(d) { return { properties: d[4].properties.concat( d[0].property ) } } %}
      | article? property           {% function(d) { return { properties: [ d[1].property ] } } %} 

# put each descriptive in a descriptives array
DESC -> DESC_ITEM _ DESC            {% function(d) { return { descriptives: d[2].descriptives.concat( d[0] ) } } %}  
      | DESC_ITEM                   {% function(d) { return { descriptives: [ d[0] ] } } %}

# both variables and descriptives can be used as a descriptive
DESC_ITEM -> preposition? article? descriptive   {% function(d) { return d[2].descriptive; } %}
           | preposition? article? variable      {% function(d) { return d[2].variable; } %} 


# ( var ) in a qualifier ( var )
# ( var ) a qualifier ( var ) 
# ( var ) in qualifier ( var )
QUAL? -> null                           {% nada %}
       | QUAL _:?                       {% $( 0 ) %}
QUAL -> preposition? article? qualifier {% $( 2 ) %}

# use builtin whitespace, even though it sucks for generating hypotheses.
# @builtin "whitespace.ne"
# use simple space for generating
_ -> " "                            {% nada %}

and -> "and"                        {% nada %}

article? -> null                    {% nada %}
          | article _               {% nada %}

article -> "the"                    {% nada %}
         | "a"                      {% nada %}
         | "an"                     {% nada %}

preposition? -> null                {% nada %}
              | preposition _       {% nada %}

preposition -> "in"                 {% nada %}
             | "of"                 {% nada %}

if? -> null                         {% nada %}
     | if _                         {% nada %}

if -> "if"                          {% nada %}

then? -> null                       {% nada %}
       | _                          {% nada %}
       | _:? then _                 {% nada %}

then -> "then"                      {% nada %}
      | ","                         {% nada %}
