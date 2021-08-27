
const lambdaLocal = require('lambda-local');
const path = require("path");
const dotenv = require('dotenv')
dotenv.config();

const regex = /test/;

const jsonPayload = {
    "detail-type": "ECR Image Action",
    "detail": {
        "result": "SUCCESS",
        "repository-name": "my-repository-name",
    }
}

const main = async () => {
    try {
        const response = await lambdaLocal.execute({
            event: jsonPayload,
            lambdaPath: path.join(__dirname.replace(regex, ""), 'index.js'),
            timeoutMs: 3000
        })
        console.log("response", response);
    } catch (error) {
        console.log("error", error);
    }
}

main();