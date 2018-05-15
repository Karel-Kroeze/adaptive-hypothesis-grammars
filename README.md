[![DOI](https://zenodo.org/badge/110849420.svg)](https://zenodo.org/badge/latestdoi/110849420)

# adaptive-hypothesis-grammars
This repository contains the grammars used in the first stage of the _Adaptivity in Inquiry Learning_ research project. They can, with varying degrees of efficacy, parse hypotheses in the following domains;

 - Electrical Circuits    ( _Dutch, English_ )
 - Supply and Demand      ( _Dutch_ )
 - Buoyancy               ( _Dutch, English_ )
 
 Grammars are compiled with [nearley.js](https://nearley.js.org).
 
 
# structure
| Path  | Contents |
| ------------- | ------------- |
| `.` | package root  |
| `grammars` | lexicon for each of the above domain/language combinations |
| `grammars/base` | domain independent syntax for each language, helper methods |
| `grammars/compiled` | compiled (into pure JS with nearley.js) versions of the lexicon + syntax |
| `grammars/railyard` | railroad diagrams for each of the compiled grammars | 
