@include "./helpers.ne"

HYPOTHESIS -> QUAL? if? ACTION? THEN? ACTION  {% function(d) { return _.merge( { independent: d[2], dependent: d[4] }, d[0] ) } %}
            | QUAL? if? ACTION THEN? ACTION?  {% function(d) { return _.merge( { independent: d[2], dependent: d[4] }, d[0] ) } %}
            | QUAL? if? ACTION? THEN ACTION?  {% function(d) { return _.merge( { independent: d[2], dependent: d[4] }, d[0] ) } %}
            | ACTION? _ if _ ACTION?          {% function(d) { return { independent: d[4], dependent: d[0] }} %}

# Always return array of actions for further processing
ACTION? -> ACTION 
        | HELP? VAR _:? MOD? HELP?  {% function(d) { return [ _.merge( d[1], d[3] ) ] } %}
        | HELP? MOD? _:? VAR HELP?  {% function(d) { return [ _.merge( d[3], d[1] ) ] } %}
        | ACTION? _ and _ ACTION?   {% function(d) { return d[0].concat( d[4] ) } %}
        | ACTION? _ QUAL            {% function(d) { 
                                                      var actions = d[0];
                                                      var qualifier = d[2];
                                                      var n = actions.length;
                                                      for ( var i = 0; i < n; i++ ){
                                                            actions[i] = _.merge( actions[i], qualifier )
                                                      }         
                                                      return actions;
                                                   } %}

ACTION -> VAR _ interactor _ VAR     {% function(d) { return [ _.merge( { variables: [ d[0], d[4] ] }, d[2] ) ] } %}
        | HELP? VAR _ MOD HELP?      {% function(d) { return [ _.merge( d[1], d[3] ) ] } %}
        | HELP? MOD _ VAR HELP?      {% function(d) { return [ _.merge( d[3], d[1] ) ] } %}
        | ACTION _ and _ ACTION?     {% function(d) { return d[0].concat( d[4] ) } %}
        | ACTION? _ and _ ACTION     {% function(d) { return d[0].concat( d[4] ) } %}
        | ACTION _ QUAL              {% function(d) { 
                                                      var actions = d[0];
                                                      var qualifier = d[2];
                                                      var n = actions.length;
                                                      for ( var i = 0; i < n; i++ ){
                                                            actions[i] = _.merge( actions[i], qualifier )
                                                      }         
                                                      return actions;
                                                   } %}

MOD? -> null 
      | MOD

MOD -> modifier                     {% $( 0 ) %}

HELP? -> null                       {% nada %}
      | HELP

HELP -> _:? hulpwerkwoord _:?
      | HELP HELP

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

and -> "en"                         {% nada %}

article? -> null                    {% nada %}
          | article _               {% nada %}

article -> "de"                     {% nada %}
         | "het"                    {% nada %}
         | "een"                    {% nada %}

preposition? -> null                {% nada %}
              | preposition _       {% nada %}

preposition -> "in"                 {% nada %}
             | "van"                {% nada %}

if? -> null                         {% nada %}
     | _:? if _                     {% nada %}

if -> "als"                         {% nada %}

THEN? -> _:? then _                 {% nada %}
       | _                          {% nada %}
       | null                       {% nada %}

THEN -> then _                      {% nada %}

then -> "dan"                       {% nada %}
      | ","                         {% nada %}

hulpwerkwoord? -> null              {% nada %}
               | hulpwerkwoord _    {% nada %}