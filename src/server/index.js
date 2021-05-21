
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let sample = {
    text: '',
    score_tag : '',
    agreement : '',
    subjectivity : '',
    confidence : '',
    irony : ''
  }

let serverData = {}

const fetch = require('node-fetch');
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const { request } = require('https')

const dotenv = require('dotenv');
dotenv.config();


const app = express()

app.use(express.static('dist'))
app.use(express.json());

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.post('/urlSubmitted',(request,response) => {
    const data = request.body;
    console.log(data.formText);
///////////////////////////////////////////////////
    
    const retData = getData(`${baseURL}?key=${process.env.API_KEY}&url=${data.formText}&lang=en`)
    .then(function(retData){
        console.log("new data",retData);
        sample.text = retData.sentence_list[0];
        sample.score_tag = retData.sentence_list[5];
        sample.agreement = retData.sentence_list[6];
        sample.subjectivity = retData.subjectivity;
        sample.confidence = retData.sentence_list[4];
        sample.irony = retData.irony;
    })

    });



app.get('/test', function (req, res) {
    console.log(sample)
    res.send(sample)
})

const getData = async ( url = '')=> {
    const request = await fetch(url)
    try {
      const newData = await request.json();
      console.log("new data",newData);
      return newData;
    }catch(error) {
      console.log("ERROR : ", error);
    }
}