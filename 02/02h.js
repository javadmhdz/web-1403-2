let fs = require('fs');
let input = process.argv.slice(3);
let command = process.argv[2];

if (command === 'sum') {
    console.log(Number(input[0]) + Number(input[1]));
}
else if (command === 'minus') {
    console.log(Number(input[0]) - Number(input[1]));
}
else if (command === 'print') {
    let obj={
        name: input[0],
        family: input[1],
        email: input[2]
    }
    console.log(obj);
}
else if (command === 'value_print') {
    let obj={
        name: input[0],
        family: input[1],
        email: input[2]
    }
    for(let i in obj){
        console.log('Hi: ' + obj[i]);
    }
}
else if (command === 'write') {
    let obj={
        name: input[0],
        family: input[1],
        email: input[2]
    }
    function writeCallback(error, data){
        if(error){
            console.log('ERROR:', error);
        }
        else{
            console.log('Successfully writed.');
        }
    }
    fs.writeFile('./data.txt', JSON.stringify(obj), writeCallback);
}
else if (command === 'create') {
    let obj={
        name: input[0],
        family: input[1],
        email: input[2]
    }
    fs.readFile('./data.json', 'utf8', function (error, data){
        if(error){
            console.log('ERROR:', error);
        }
        else{
            let data_object = JSON.parse(data);
            data_object.data.push(obj);
            let data_string = JSON.stringify(data_object);
            
            fs.writeFile('./data.json', data_string, function (error){
                if(error){
                    console.log('ERROR:', error);
                }
                else{
                    console.log('create Done.');
                }
            });
        }
    });
}
else {
    console.log('Command not valid.');
}