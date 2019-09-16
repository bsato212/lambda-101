/*
Sample event object for message "Hello World!" with attributes "foo: bar":
{
    "Records": [
        {
            "messageId": "c6563875-7ae6-47e4-8a46-60f0aa4eadba",
            "receiptHandle": "AQEBvy2dCs0vck1ffsT0nPA+bjWCp7LylyinmDHqcJe3eoexg9RlrYn4InP8mvgvgMmFvV0jk9ZxreF6m/qkqFdr+Se0cvPdoK3PJ+PNVUvOl1eUc83buHDsk+ZvGDrPY3Jq/NdwslC0h5ihHBvUrLWubAho7QJHAf7GuMtQyi7ucRAC5pZ6zYHoi6K7d/qxhr0OSMj9PXnwiWgsz3XEnpYqJhRMqIDCo57TI7EoBZU4DpQfnDb8xYcszy1PkA5B5TPEAZsX6L1uS+/+YMysyIcpxbVreMuch4U+OPkMbFF/HzK8Jnex/lD3byFSdZgTH59clM63RvVUzMYFdok/a0zvP4ufr5fjKe+D1hap7G3CJb3ih3xUnZ+rZq5R/Oqwb1nl",
            "body": "Hello World!",
            "attributes": {
                "ApproximateReceiveCount": "1",
                "SentTimestamp": "1568664535721",
                "SenderId": "362587813308",
                "ApproximateFirstReceiveTimestamp": "1568664535733"
            },
            "messageAttributes": {
                "foo": {
                    "stringValue": "bar",
                    "stringListValues": [],
                    "binaryListValues": [],
                    "dataType": "String"
                }
            },
            "md5OfMessageAttributes": "d8062e30406ad939a86bacea477e5a26",
            "md5OfBody": "ed076287532e86365e841e92bfc50d8c",
            "eventSource": "aws:sqs",
            "eventSourceARN": "arn:aws:sqs:us-east-1:362587813308:bsato212-test",
            "awsRegion": "us-east-1"
        }
    ]
}
*/

exports.handler = async (event) => {
  console.log(Records[0].body);
};
