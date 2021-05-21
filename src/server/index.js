
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

app.post('/urlSubmitted',async (request,response) => {
    const data = request.body;
    console.log(data.formText);
///////////////////////////////////////////////////

    console.log(`${baseURL}?key=${process.env.API_KEY}&url=${data.formText}&lang=en`)
    const retData = await getData(`${baseURL}?key=${process.env.API_KEY}&url=${data.formText}&lang=en`)
    sample.text = retData.sentence_list[0].text;
    sample.score_tag = retData.score_tag;
    sample.agreement = retData.agreement;
    sample.subjectivity = retData.subjectivity;
    sample.confidence = retData.confidence;
    sample.irony = retData.irony;
    console.log(sample);
    
    response.json(sample);

    });


const getData = async ( url = '')=> {
    const request = await fetch(url)
    try {
      const newData = await request.json();
    //   console.log("new data",newData);
      return newData;
    }catch(error) {
      console.log("ERROR : ", error);
    }
}