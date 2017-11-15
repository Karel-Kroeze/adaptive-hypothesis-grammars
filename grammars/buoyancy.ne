#### NOTE: THIS SYNTAX NEEDS TO BE SPLIT INTO DUTCH+ENGLISH VERSIONS!

@include "./base/syntax-nl.ne"

####### variables ######
variable  -> "object"               {% $( 0, 'variable' ) %}
           | "bal"                  {% $( 0, 'variable' ) %}
           | "submarine"            {% $( 0, 'variable' ) %}
           | "fluid"                {% $( 0, 'variable' ) %}
           | "water"                {% $( 0, 'variable' ) %}
           | "balletje"             {% $( 'bal', 'variable' ) %}
           | "onderzeeer"           {% $( 'submarine', 'variable' ) %}
           | "vloeistof"            {% $( 'fluid', 'variable' ) %}

property -> "mass"                  {% $( 0, 'property' ) %}
          | "density"               {% $( 0, 'property' ) %}
          | "volume"                {% $( 0, 'property' ) %}
          | "massa"                 {% $( 'mass', 'property' ) %}
          | "dichtheid"             {% $( 'density', 'property' ) %}

descriptive -> null                 {% nada %}

interactor -> "is greater than"     {% properties( { interaction: "greater than" } ) %}
            | "is smaller than"     {% properties( { interaction: "smaller than" } ) %}
            | "is equal to"         {% properties( { interaction: "equal to" } ) %}
            | "groter is dan"       {% properties( { interaction: "greater than" } ) %}
            | "kleiner is dan"      {% properties( { interaction: "smaller than" } ) %}
            | "gelijk is aan"       {% properties( { interaction: "equal to" } ) %}

modifier -> "increases"             {% $( 0, 'change' ) %}
          | "decreases"             {% $( 0, 'change' ) %}
          | "remains the same"      {% nada %}
          | "will remain the same"  {% nada %}
          | "sinks"                 {% properties( { change: 'sink', mode: 'dependent' } ) %}
          | "will sink"             {% properties( { change: 'sink', mode: 'dependent' } ) %}
          | "floats"                {% properties( { change: 'float', mode: 'dependent' } ) %}
          | "will float"            {% properties( { change: 'float', mode: 'dependent' } ) %} 

          | "stijgt"                {% $( 0, 'change' ) %}
          | "daalt"                 {% $( 0, 'change' ) %}
          | "hetzelfde blijft"      {% nada %}
          | "zinkt"                 {% properties( { change: 'sink', mode: 'dependent' } ) %}
          | "drijft"                {% properties( { change: 'float', mode: 'dependent' } ) %}

          | "hetzelfde"             {% nada %}
          | "zinken"                {% properties( { change: 'sink', mode: 'dependent' } ) %}
          | "drijven"               {% properties( { change: 'float', mode: 'dependent' } ) %}

hulpwerkwoord -> "zal" | "gaat"