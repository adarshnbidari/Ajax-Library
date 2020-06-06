# Ajax-Library


To use this library you need to call the Ajax() function.

The Ajax() function accepts object as a argument.

The Object should be of the following properties:

1. data: //data that need to be sent , this data can be of any data type including files.  (required)

2. url: // a valid request url  (required)

3. contentType: // a valid contentType , defaults to "text/plain"  (optional)

4. method: //a valid request method  required

5. abortTime: //accepts time in milliseconds after which request will abort automatically  (optional)

6. header: //accepts object with keys as header type and values as header values  (optional)

### The response returned from the Ajax() function would be a object with the following properties:
 
1. data: //returns response and can be of any type

2. responseURL: //returns response url from which the response has been recieved

3. status: //returns the status code of the request

4. statusText: //returns textual represenation of status

5. responseHeaders: //returns all response headers

6. responseType: //returns response type


#Ajax() function returns a promise!...
