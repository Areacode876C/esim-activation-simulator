async function activateDevice() {



    const imei =

        document.getElementById("imei").value;



    const device =

        document.getElementById("device").value;



    const activation =

        document.getElementById("activation").value;



    let results =

        document.getElementById("results");



    if (

        imei.length !== 15 ||

        isNaN(imei)

    ) {



        results.innerHTML =

        `

        <h3 class="error">

            Activation Failed

        </h3>



        <p>

            IMEI must be exactly 15 digits.

        </p>

        `;



        return;

    }



    results.innerHTML =

    `

    <h3>

        Processing Activation...

    </h3>



    <p>

        Contacting Azure Function...

    </p>

    `;



    try {



        const response = await fetch(

            "https://esim-activation-api-bhbrgpe6aeancrc2.centralus-01.azurewebsites.net/api/activate",

            {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    imei: imei,

                    device: device,

                    activationType: activation

                })

            }

        );



        const data = await response.json();



        results.innerHTML =

        `

        <div class="status-badge">

            5G ACTIVE

        </div>



        <h3 class="success">

            Activation Successful

        </h3>



        <p>

            <strong>Device:</strong>

            ${data.device}

        </p>



        <p>

            <strong>Activation Type:</strong>

            ${data.activationType}

        </p>



        <p>

            <strong>Activation ID:</strong>

            ${data.activationId}

        </p>



        <p>

            <strong>Assigned Number:</strong>

            ${data.phoneNumber}

        </p>



        <p>

            <strong>ICCID:</strong>

            ${data.iccid}

        </p>



        <p>

            <strong>Status:</strong>

            ${data.status}

        </p>



        <p>

            <strong>Cloud Service:</strong>

            ${data.cloudService}

        </p>



        <hr>



        <h4>

            Cloud Processing Pipeline

        </h4>



        <p>&#10004; Request Received</p>



        <p>&#10004; Azure Function Triggered</p>



        <p>&#10004; Device Validation Complete</p>



        <p>&#10004; Network Compatibility Check</p>


        <p>&#10004; Subscriber Provisioning</p>



        <p>&#10004; Activation Record Generated</p>



        <p>&#10004; Activation Complete</p>

        `;



    }

    catch (error) {



        console.error(error);



        results.innerHTML =

        `

        <h3 class="error">

            Activation Failed

        </h3>



        <p>

            Unable to contact Azure Function.

        </p>



        <p>

            Check browser console for details.

        </p>

        `;

    }

}






