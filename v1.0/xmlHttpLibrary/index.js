const Ajax = data => {

    return new Promise((resolve, reject) => {

        if (window.Worker) {

            var D_Worker = new Worker("worker.js");

            if (data !== undefined) {

                D_Worker.postMessage(data);

            }

            D_Worker.onmessage = e => {

                if (e.data.error === undefined) {

                    resolve(e.data);

                } else {

                    reject(e.data.error);

                }

            };


        } else {

            reject("Error: 000 No support web workers");

        }


    });


};