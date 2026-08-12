function activateDevice(){

    const imei =
        document.getElementById("imei").value;

    const device =
        document.getElementById("device").value;

    const activation =
        document.getElementById("activation").value;
    
    const activationId =
    Math.floor(
        Math.random()*1000000
    );

    let results =
        document.getElementById("results");

    if(imei.length !== 15 || isNaN(imei)){

        results.innerHTML =
        `
        <h3 class="error">
            Activation Failed
        </h3>

        Invalid IMEI
        `;

        return;
    }

    results.innerHTML =
`
<h3 class="success">
    Activation Successful
</h3>
<div class="status-badge">
    ACTIVE
</div>
<p><strong>Device:</strong> ${device}</p>

<p><strong>Activation Type:</strong> ${activation}</p>

<p><strong>Activation ID:</strong> ACT-${activationId}</p>

<p><strong>Assigned Number:</strong> (214) 555-${Math.floor(1000 + Math.random() * 9000)}</p>

<p><strong>ICCID:</strong> 89014103${Math.floor(1000000000 + Math.random() * 9000000000)}</p>

<hr>

<p>&#10004; Device Validation</p>

<p>&#10004; Network Compatibility Check</p>

<p>&#10004; 5G Standalone Compatible</p>

<p>&#10004; VoLTE Provisioned</p>

<p>&#10004; Subscriber Provisioning</p>

<p>&#10004; eSIM Profile Generated</p>

<p>&#10004; Activation Complete</p>
`;
}