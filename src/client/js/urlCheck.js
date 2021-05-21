function checkURL(inputText) {
    const url = inputText;
    let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    const regexp = new RegExp(expression);
    let x = regexp.test(url)
    if(x)
    {
        alert("Hello")
        return true;
    }
    else
    {
        
        return false;
    }
}

export { checkURL }