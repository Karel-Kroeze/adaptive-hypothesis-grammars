@include "./base/syntax-nl.ne"

####### variables ######
# variable, descriptive, qualifier, interactor, modifier.
variable -> "water"                 {% $(0, 'variable') %}
          | "licht"                 {% $(0, 'variable') %} 
          | "koolstofdioxide"       {% $(0, 'variable') %}
          | "zuurstof"              {% $(0, 'variable') %}
          | "glucose"               {% $(0, 'variable') %}
          | "temperatuur"           {% $(0, 'variable') %}

descriptive -> "de productie van"   {% properties( { descriptive: "productie" } ) %}

# qualifier  -> "serie"               {% properties( { qualified: "serie schakeling" } ) %}
#           | "parallel"              {% properties( { qualified: "parallelle schakeling" } ) %}
#           | "parallelle"            {% properties( { qualified: "parallelle schakeling" } ) %}
#           | "serie schakeling"      {% properties( { qualified: "serie schakeling" } ) %}
#           | "parallelle schakeling" {% properties( { qualified: "parallelle schakeling" } ) %}

# interactor -> "groter is dan"       {% properties( { interaction: true, operator: 'greater than' } ) %}
#           | "kleiner is dan"        {% properties( { interaction: true, operator: 'smaller than' } ) %}
#           | "gelijk is aan"         {% properties( { interaction: true, operator: 'equal to' } ) %}

modifier -> "meer"                  {% properties( { change: 'increase' } ) %}
          | "omhoog"                {% properties( { change: 'increase' } ) %}
          | "minder"                {% properties( { change: 'decrease' } ) %}
          | "omlaag"                {% properties( { change: 'decrease' } ) %}
          | "gelijk"                {% nada %}

hulpwerkwoord -> "blijft"           {% nada %}
          | "gaat"                  {% nada %}
          | "er"                    {% nada %}
          | "is"                    {% nada %}
