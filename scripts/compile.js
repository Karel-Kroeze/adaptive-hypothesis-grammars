const glob = require("glob")
const path = require("path")
const {spawn, exec} = require("child_process")


glob( "./grammars/*.ne", (err, grammars) => {
    if( err ) console.error( "Error getting grammars: " + err )
    
    for (const grammar of grammars) {
        const name = path.basename( grammar, ".ne" )
        const compileCommand = `nearleyc "${grammar}" -o "./grammars/compiled/${name}.js`
        const railroadCommand = `nearley-railroad "${grammar}" -o "./grammars/railyard/${name}.html"`
        // console.log( { name, command: compileCommand })
        exec( compileCommand, (err) =>{
            if (err) console.error( "Error compiling grammar " + name + ": " + err );
            else console.log( `${name} compiled succesfully.` );
        })
        exec( railroadCommand, (err) =>{
            if (err) console.error( "Error creating railroad diagram " + name + ": " + err );
            else console.log( `${name} railroad diagram created.` );
        })
    }
})