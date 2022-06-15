const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


const tea={
    'oolong':{
        'type': 'black',
        'waterTemp': 200,
        'caffinated': true,
        'steepTimeSeconds':180,
        'origin':'China',
        'flavor': 'good'
    },
    'unknown':{
        'type': 'unknown',
        'waterTemp': 2000,
        'caffinated': true,
        'steepTimeSeconds':1800,
        'origin':'unknown',
        'flavor': 'unknown'
    },
    'matcha':{
        'type': 'green',
        'waterTemp': 200,
        'caffinated': false,
        'steepTimeSeconds':180,
        'origin':'Ethiopia',
        'flavor': 'grassy'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName]){                               //bracket notation makes it okay to have spaces in the entered name
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
    console.log(request.params.name)

})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT} and kittens are cute.`)
})