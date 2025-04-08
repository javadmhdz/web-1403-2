import {createServer} from "http"

const myServer = createServer(function(userRequest, serverResponse){
    const pathSegments = userRequest.url.split('/')
    const firstNumber = Number(pathSegments[1]) 
    const secondNumber = Number(pathSegments[2])
    const total = firstNumber + secondNumber
    
    serverResponse.write(String(total))
    serverResponse.end()
})

myServer.listen(8000)
