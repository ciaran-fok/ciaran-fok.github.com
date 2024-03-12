(function (global) {

    const snippetsAddress = "../snippets/";

    // show loading function 
    function showLoading() {
        const loadingElement = document.querySelector("#toload");
        loadingElement.innerHTML = "<div id='loading-background'><img src='img/Spinner-1.1s-800px.gif' id='loading-gif'></div>";
    }

    function finishLoading() {
        const loadingElement = document.querySelector("#toload");
        loadingElement.innerHTML = "";
    }

    showLoading();

    // convenience function 
    // input1: selector like you would use in a css entry
    // input2: html in text form
    function insertHtml (elementSelector, html) {
        var targetElem = document.querySelector(elementSelector);
        targetElem.innerHTML = html;
    }

    // function for getting html snippets from snippets
    // input1: the file name really, because the const + part is written into the function for convenience
    function fetchHTML (filename) {
        url = snippetsAddress + filename;
        return fetch(url).then(function (response) {
            // The API call was successful!
            return response.text();
        }).catch(function (err) {
            // There was an error
            console.warn('Something went wrong.', err);
        });
    }

    // load in the back
    fetchHTML('logo.html').then(function(myHTML) {
        insertHtml('#logo-container', myHTML);
    });

    fetchHTML('front-page-text.html').then(function(myHTML) {
        insertHtml('#front-page-text', myHTML);
    });
    
    fetchHTML('headshot.html').then(function(myHTML) {
        insertHtml('#headshot-container', myHTML);
    });

    finishLoading();



}) (window);
