
const vision = require('@google-cloud/vision');
process.env.GOOGLE_APPLICATION_CREDENTIALS="./key/imposing-timer-333211-a0182462f01c.json";
async function quickstart() {
  // Imports the Google Cloud client library
  //const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection('./public/images/tomato.jpg');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
}
quickstart();
