@include "./base/syntax-en.ne"

####### variables ######
# variable, descriptive, qualifier, interactor, modifier.
variable -> "bulbs"                 {% $(0, 'variable') %}
          | "current"               {% $(0, 'variable') %}
          | "voltage"               {% $(0, 'variable') %}
          | "resistance"            {% $(0, 'variable') %}
          | "brightness"            {% $(0, 'variable') %}

descriptive -> "number"             {% $(0, 'descriptive') %}
          | "electric"              {% $(0, 'descriptive') %}

qualifier  -> "series"              {% properties( { qualified: "series circuit" } ) %}
          | "parallel"              {% properties( { qualified: "parallel circuit" } ) %}
          | "series circuit"        {% $(0, 'qualified') %}
          | "parallel circuit"      {% $(0, 'qualified') %}

interactor -> "is greater than"     {% properties( { interaction: true, operator: 'greater than' } ) %}
          | "is smaller than"       {% properties( { interaction: true, operator: 'smaller than' } ) %}
          | "is equal to"           {% properties( { interaction: true, operator: 'equal to' } ) %}

modifier -> "increases"             {% properties( { change: 'increase' } ) %}
          | "decreases"             {% properties( { change: 'decrease' } ) %}
          | "remains the same"      {% nada %}
          | "will remain the same"  {% nada %}