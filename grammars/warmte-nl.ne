@include "./base/syntax-nl.ne"

####### variables ######
# variable, descriptive, qualifier, interactor, modifier.
variable -> "warme lucht"       {% $(0, 'variable') %}
          | "koude lucht"       {% $(0, 'variable') %} 
          | "kamer"          {% $(0, 'variable') %}
          | "gat"           {% $(0, 'variable') %}
          | "muur"           {% $(0, 'variable') %}
          | "plafond"       {% $(0, 'variable') %}

descriptive -> "gelijk"      {% properties( { descriptive: "gelijk" } ) %}

qualifier  -> "boven"     {% properties( { qualified: "boven" } ) %}
          | "onder"       {% properties( { qualified: "onder" } ) %}

# interactor -> "groter is dan"       {% properties( { interaction: true, operator: 'greater than' } ) %}
#           | "kleiner is dan"        {% properties( { interaction: true, operator: 'smaller than' } ) %}
#           | "gelijk is aan"         {% properties( { interaction: true, operator: 'equal to' } ) %}

modifier -> "warmer"              {% properties( { change: 'warmer' } ) %}
          | "meer"                {% properties( { change: 'increase' } ) %}
          | "kouder"              {% properties( { change: 'colder' } ) %}
          | "minder"              {% properties( { change: 'decrease' } ) %}
          | "ontsnapt"            {% properties( { change: 'decrease' } ) %}
          | "gelijk"              {% nada %}

hulpwerkwoord -> "blijft"         {% nada %}
          | "gaat"                {% nada %}
          | "er"                  {% nada %}
          | "is"                  {% nada %}
          | "zit"                 {% nada %}
          | "wordt"               {% nada %}
          