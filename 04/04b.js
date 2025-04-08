import {createServer} from "http"


let server = createServer(function(request, responce){
    let url = request.url.split('/');
    let command = url[1];
    let inputs = url.slice(2);

    if(command === "sum"){
        let output = Number(inputs[0]) + Number(inputs[1]);
        responce.write(String(output));
    }
    else if(command === "minus"){
        let output = Number(inputs[0] - Number(inputs[1]));
        responce.write(String(output));
    }
    else{
        responce.write("command not found")
    }
    
    responce.end()
})

server.listen(8000)