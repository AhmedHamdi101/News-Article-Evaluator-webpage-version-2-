function handleSubmit(event) {

    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkURL(formText))
    {

        console.log("::: Form Submitted :::")
        let data = {formText};
        //post url to the server
        postData('/urlSubmitted',data)
        

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
        console.log("Post Data:",newData);

        // document.getElementById('text').innerHTML == "ossama"
        //  = newData.body.text;
        
        return newData;
    }catch(error){
        console.log("ERROR : ",error);
    }
}



export { handleSubmit }
