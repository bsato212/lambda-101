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
