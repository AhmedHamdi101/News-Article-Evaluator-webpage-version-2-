import 'regenerator-runtime/runtime';
async function handleSubmit(event) {

    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkURL(formText))
    {

        console.log("::: Form Submitted :::")
        let data = {formText};
        //post url to the server
        let variable = await postData('/urlSubmitted',data);
        
        document.getElementById('text').innerHTML = variable.text
        document.getElementById('score_tag').innerHTML = variable.score_tag
        document.getElementById('subjectivity').innerHTML = variable.subjectivity
        document.getElementById('agreement').innerHTML = variable.agreement
        document.getElementById('confidence').innerHTML = variable.confidence
        document.getElementById('irony').innerHTML = variable.irony
    }
    else{
        alert("This is not a URL")
    }
}

const postData = async (url = '' , data = {} ) =>{
    const response = await fetch (url , {
        method: 'POST',
        credentials: 'same-origin',
        headers:{
            'content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try{
        const newData = await response.json();
        // console.log("Post Data:",newData);
        return newData;
    }catch(error){
        console.log("ERROR : ",error);
    }
}

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

export { handleSubmit,postData,getData }
