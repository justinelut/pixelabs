const IntaSend = require("intasend-node");

const intasend = new IntaSend(
  "ISPubKey_test_b9203f39-151d-4c71-9c2d-5e8bfaf2743e",
  "ISSecretKey_test_77b1cb5b-0b12-4435-8fbb-185c5ee766c5",
  true // set to false when going live
);

let collection = intasend.collection();


export default function handler(req, res) {
  if (req.method === 'POST') {
    res.json({"Payment": "payments processing right now"})
    collection
    .mpesaStkPush({
      first_name: "Justine",
      last_name: "Gichana",
      email: "justinequartz@gmail.com",
      host: "https://fusion.verixr.com",
      amount: 10,
      phone_number: "254740455200",
      api_ref: "test",
    })
    .then((resp) => {
      // Redirect user to URL to complete payment
      console.log(`STK Push Resp: ${resp}`);
    })
    .catch((err) => {
      console.error(`STK Push Resp error: ${err}`);
    });
  } else {
    // res.json({"Payment": "payments processing right now"})
  }
}

