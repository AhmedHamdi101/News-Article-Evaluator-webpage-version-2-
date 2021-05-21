function handleSubmit(event) {

    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if(Client.checkURL(formText))
    {

        console.log("::: Form Submitted :::")
        const data = {formText};
        //post url to the server
        fetch('/urlSubmitted',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)})
   


   
    fetch('http://localhost:3000/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    }
    else{
        alert("This is not a URL")
    }
}






export { handleSubmit }
