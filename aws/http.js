const https = require('https');

const getQuote = async () => {
    const options = {
      hostname: 'quotes.rest',
      path: '/qod.json',
      port: 443,
      method: 'GET',
    };

    return new Promise(resolve => {
        const req = https.request(options, res => {
          res.on('data', d => {
            return resolve(JSON.parse(d.toString()));
          });
        });

        req.on('error', error => {
          console.error(error);
          return resolve(null);
        });

        req.end();  
    });
};

exports.handler = async event => {
    const template = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                <title>QOD</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
            </head>
            <body>
                <br>
                <div class="container">
                    <div class="text-center">
                        <img src="{img}" class="rounded" alt="QOD">
                    </div>
                    <blockquote class="blockquote text-center">
                        <p class="mb-0">{quote}</p>
                        <footer class="blockquote-footer">{author}</footer>
                    </blockquote>
                </div>
            </body>
        </html>`;

    const quote = await getQuote();
    if (!quote) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'text/html',
            },
            body: 'Internal Server Error',
        };
    }

    const rendered = template
        .replace('{quote}', quote.contents.quotes[0].quote)
        .replace('{author}', quote.contents.quotes[0].author)
        .replace('{img}', quote.contents.quotes[0].background);

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: rendered,
    };
};

/*
Sample event object for a GET on path "/qod":
{
    "resource": "/qod",
    "path": "/qod",
    "httpMethod": "GET",
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng;q=0.8,application/signed-exchange;v=b3",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9",
        "Host": "x6o57plnvb.execute-api.us-east-1.amazonaws.com",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "cross-site",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
        "X-Amzn-Trace-Id": "Root=1-5d7fedc3-8aa6ef87ff3e01c91a5ef150",
        "X-Forwarded-For": "187.102.82.56",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
    },
    "multiValueHeaders": {
        "accept": [
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng;q=0.8,application/signed-exchange;v=b3"
        ],
        "accept-encoding": [
            "gzip, deflate, br"
        ],
        "accept-language": [
            "en-US,en;q=0.9"
        ],
        "Host": [
            "x6o57plnvb.execute-api.us-east-1.amazonaws.com"
        ],
        "sec-fetch-mode": [
            "navigate"
        ],
        "sec-fetch-site": [
            "cross-site"
        ],
        "sec-fetch-user": [
            "?1"
        ],
        "upgrade-insecure-requests": [
            "1"
        ],
        "User-Agent": [
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36"
        ],
        "X-Amzn-Trace-Id": [
            "Root=1-5d7fedc3-8aa6ef87ff3e01c91a5ef150"
        ],
        "X-Forwarded-For": [
            "187.102.82.56"
        ],
        "X-Forwarded-Port": [
            "443"
        ],
        "X-Forwarded-Proto": [
            "https"
        ]
    },
    "queryStringParameters": null,
    "multiValueQueryStringParameters": null,
    "pathParameters": null,
    "stageVariables": null,
    "requestContext": {
        "resourceId": "nezs0q",
        "resourcePath": "/qod",
        "httpMethod": "GET",
        "extendedRequestId": "AIIWhERioAMFp7w=",
        "requestTime": "16/Sep/2019:20:17:07 +0000",
        "path": "/default/qod",
        "accountId": "362587813308",
        "protocol": "HTTP/1.1",
        "stage": "default",
        "domainPrefix": "x6o57plnvb",
        "requestTimeEpoch": 1568665027299,
        "requestId": "2244805f-2d0d-4da0-96a6-d7af361d6a79",
        "identity": {
            "cognitoIdentityPoolId": null,
            "accountId": null,
            "cognitoIdentityId": null,
            "caller": null,
            "sourceIp": "187.102.82.56",
            "principalOrgId": null,
            "accessKey": null,
            "cognitoAuthenticationType": null,
            "cognitoAuthenticationProvider": null,
            "userArn": null,
            "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
            "user": null
        },
        "domainName": "x6o57plnvb.execute-api.us-east-1.amazonaws.com",
        "apiId": "x6o57plnvb"
    },
    "body": null,
    "isBase64Encoded": false
}
*/
