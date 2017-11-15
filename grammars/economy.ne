@include "./base/syntax-nl.ne"

####### variables ######
# variable, descriptive, qualifier, interactor, modifier.
variable -> "vraag"                     {% $( 0, 'variable' ) %}
          | "product"                   {% $( 0, 'variable' ) %}
          | "aanbod"                    {% $( 0, 'variable' ) %}
          | "prijs"                     {% $( 0, 'variable' ) %}
          | "evenwichtsprijs"           {% $( 0, 'variable' ) %}
          | "evenwichtshoeveelheid"     {% $( 0, 'variable' ) %}
          | "marktevenwicht"            {% $( 0, 'variable' ) %}

interactor -> "groter is dan"           {% properties( { interaction: true, operator: 'greater than' } ) %}
          | "kleiner is dan"            {% properties( { interaction: true, operator: 'smaller than' } ) %}
          | "gelijk is aan"             {% properties( { interaction: true, operator: 'equal to' } ) %}

modifier -> "stijgt"                    {% properties( { change: 'increase' } ) %}
          | "daalt"                     {% properties( { change: 'increase' } ) %}
          | "gelijk blijft"             {% nada %}