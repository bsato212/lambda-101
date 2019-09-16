/*
Sample event object for file "2019-08-26_Tactic_Updates.csv" uploaded to bucket "bsato212-test":
{
   "bucket":"bsato212-test",
   "contentType":"text/csv",
   "crc32c":"EBF78Q==",
   "etag":"CMnjtr+M1uQCEAE=",
   "generation":"1568662849696201",
   "id":"bsato212-test/2019-08-26_Tactic_Updates.csv/1568662849696201",
   "kind":"storage#object",
   "md5Hash":"UwRWQgxOelWIl5kmPzt9xA==",
   "mediaLink":"https://www.googleapis.com/download/storage/v1/b/bsato212-test/o/2019-08-26_Tactic_Updates.csv?generation=1568662849696201&alt=media",
   "metageneration":"1",
   "name":"2019-08-26_Tactic_Updates.csv",
   "selfLink":"https://www.googleapis.com/storage/v1/b/bsato212-test/o/2019-08-26_Tactic_Updates.csv",
   "size":"4854",
   "storageClass":"REGIONAL",
   "timeCreated":"2019-09-16T19:40:49.695Z",
   "timeStorageClassUpdated":"2019-09-16T19:40:49.695Z",
   "updated":"2019-09-16T19:40:49.695Z"
}
*/

/**
 * Triggered from a change to a Cloud Storage bucket.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.gcsEvent = (event, context) => {
  console.log(`Processing file: [${event.name}]`);
};
