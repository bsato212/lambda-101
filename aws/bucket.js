/*
Sample event object for file "2019-08-26_Tactic_Updates.csv" uploaded to bucket "bsato212":
{
    "Records": [
        {
            "eventVersion": "2.1",
            "eventSource": "aws:s3",
            "awsRegion": "us-east-1",
            "eventTime": "2019-09-16T20:00:53.802Z",
            "eventName": "ObjectCreated:Put",
            "userIdentity": {
                "principalId": "A1WZBPDJ5A7QSO"
            },
            "requestParameters": {
                "sourceIPAddress": "187.102.82.56"
            },
            "responseElements": {
                "x-amz-request-id": "DA2919CA8AE6430A",
                "x-amz-id-2": "3hkNS+iO3Re/wdNVSwniWISnwr6ATq8OXZSxFU40/nVjFl3M1oVgm2na/de0AShvCvR9N7ep2Co="
            },
            "s3": {
                "s3SchemaVersion": "1.0",
                "configurationId": "3fba0c0c-6406-4ad4-a54a-71862b72f4d1",
                "bucket": {
                    "name": "bsato212",
                    "ownerIdentity": {
                        "principalId": "A1WZBPDJ5A7QSO"
                    },
                    "arn": "arn:aws:s3:::bsato212"
                },
                "object": {
                    "key": "2019-08-26_Tactic_Updates.csv",
                    "size": 4854,
                    "eTag": "530456420c4e7a55889799263f3b7dc4",
                    "sequencer": "005D7FE9F5BF5974B8"
                }
            }
        }
    ]
}
*/

exports.handler = async (event) => {
  console.log(Records[0].s3.object.key);
};
