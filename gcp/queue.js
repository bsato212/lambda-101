/*
Sample event object for message "Hello World!" with attributes "foo: bar":
{
   '@type':'type.googleapis.com/google.pubsub.v1.PubsubMessage',
   attributes:{
      foo:'bar'
   },
   data:'SGVsbG8gV29ybGQh'
}
*/

/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.pubSubEvent = (event, context) => {
  console.log(Buffer.from(event.data, 'base64').toString());
};
