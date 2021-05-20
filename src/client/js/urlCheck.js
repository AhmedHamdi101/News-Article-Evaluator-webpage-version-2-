function checkURL(inputText) {
    let url = inputText;
    var urlPrototype = new RegExp('^(https?:\\/\\/)?'+
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
        '((\\d{1,3}\\.){3}\\d{1,3}))'+
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
        '(\\?[;&amp;a-z\\d%_.~+=-]*)?'+
        '(\\#[-a-z\\d_]*)?$','i');

    if(urlPrototype.test(url))
    {
        alert("URL")
        return true;
    }
    else
    {
        alert("NOT URL")
        return false;
    }
}

export { checkURL }