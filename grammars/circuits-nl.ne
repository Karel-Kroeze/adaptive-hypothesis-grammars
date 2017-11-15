@include "./base/syntax-nl.ne"

####### variables ######
# variable, descriptive, qualifier, interactor, modifier.
variable -> "lampjes"               {% $(0, 'variable') %}
          | "stroom"                {% $(0, 'variable') %} 
          | "voltage"               {% $(0, 'variable') %}
          | "weerstand"             {% $(0, 'variable') %}
          | "helderheid"            {% $(0, 'variable') %}
          # synonyms
          | "felheid"               {% $('helderheid', 'variable') %}
          

descriptive -> "aantal"             {% properties( { descriptive: "aantal" } ) %}
          | "elektrische"           {% properties( { descriptive: "elektrisch" } ) %}

qualifier  -> "serie"               {% properties( { qualified: "serie schakeling" } ) %}
          | "parallel"              {% properties( { qualified: "parallelle schakeling" } ) %}
          | "parallelle"             {% properties( { qualified: "parallelle schakeling" } ) %}
          | "serie schakeling"      {% properties( { qualified: "serie schakeling" } ) %}
          | "parallelle schakeling"  {% properties( { qualified: "parallelle schakeling" } ) %}

interactor -> "groter is dan"       {% properties( { interaction: true, operator: 'greater than' } ) %}
          | "kleiner is dan"        {% properties( { interaction: true, operator: 'smaller than' } ) %}
          | "gelijk is aan"         {% properties( { interaction: true, operator: 'equal to' } ) %}

modifier -> "stijgt"                {% properties( { change: 'increase' } ) %}
          | "daalt"                 {% properties( { change: 'decrease' } ) %}
          | "hetzelfde"             {% nada %}
          | "hetzelfde blijft"      {% nada %}

hulpwerkwoord -> "blijft"           {% nada %}
          | "zal"                   {% nada %}
          | "gaan"                  {% nada %}
