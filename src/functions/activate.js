const { app } = require('@azure/functions');

app.http('activate', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {

        let body = {};

        try {
            body = await request.json();
        } catch {
            body = {};
        }

        const imei = body.imei || "Unknown";
        const device = body.device || "Unknown";
        const activationType = body.activationType || "eSIM";

        const activationId =
            "ACT-" +
            Math.floor(100000 + Math.random() * 900000);

        const iccid =
            "89014103" +
            Math.floor(
                1000000000 +
                Math.random() * 9000000000
            );

        const phoneNumber =
            "(214) 555-" +
            Math.floor(
                1000 +
                Math.random() * 9000
            );

        context.log(
            `Activation request for ${device}`
        );

        return {
            jsonBody: {
                activationId,
                imei,
                device,
                activationType,
                phoneNumber,
                iccid,
                status: "ACTIVE",
                cloudService: "Azure Functions"
            }
        };
    }
});