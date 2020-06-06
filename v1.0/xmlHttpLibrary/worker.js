onmessage = e => {

    //raw xhttp object
    var xhttp = new XMLHttpRequest();

    //set the default content type
    if (e.data.contentType === undefined) {

        e.data.contentType = "text/plain";

    }

    //set the abort time if set
    if (e.data.abortTime !== undefined) {

        setTimeout(() => xhttp.abort(), e.data.abortTime);

    }

    //abort handler
    xhttp.onabort = () => {

        postMessage({
            error: "Abort: 001 Request aborted!...."
        });

    };

    //loadend handler
    xhttp.onloadend = () => {

        let receivedData = {

            data: xhttp.response,
            responseURL: xhttp.responseURL,
            status: xhttp.status,
            statusText: xhttp.statusText,
            responseHeaders: xhttp.getAllResponseHeaders(),
            responseType: xhttp.responseType

        }

        let securedObject = SecureObjects(receivedData);

        postMessage(securedObject);

    };


    xhttp.open(e.data.method, e.data.url); //open connection


    //set the request headers from the array key value pairs
    if (e.data.headers != undefined && Object.keys(e.data.headers).length > 0) {

        let contents = Object.keys(e.data.headers);

        for (let i of contents) {

            xhttp.setRequestHeader(i, contents[i]);

        }


    }


    xhttp.send();   //send the request


};


//securing our response objects!....

const SecureObjects = obj => {

    Object.preventExtensions(obj);
    Object.seal(obj);
    Object.freeze(obj);

    if (!Object.isExtensible(obj) && Object.isSealed(obj) && Object.isFrozen(obj)) {

        return obj;

    }

};

