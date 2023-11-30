export async function GET(req, res) {

  // Make a note we are on
  // the api. This goes to the console.
  console.log("in the api page")


  // get the values
  // that were sent across to us.
  const { searchParams } = new URL(req.url)
  const email = searchParams.get('email')
  const firstname = searchParams.get('firstname')
  const lastname = searchParams.get('lastname')
  const address = searchParams.get('address')
  const phonenum = searchParams.get('phonenum')
  const pass = searchParams.get('pass')
  const dob = searchParams.get('dob')

  console.log(email);
  console.log(lastname);
  console.log(firstname);
  console.log(address);
  console.log(phonenum);
  console.log(pass);
  console.log(dob);


// db insert
  const { MongoClient } = require('mongodb');
  const url = "mongodb+srv:b00146242:5fzy499NRNoDtGrN@cluster0.yxxpyma.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(url);
  const dbName = 'app'; // database name
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('login'); // collection name
  const findResult = await collection.insertOne({"email": email, "pass": pass, "lastname": lastname, "dob": dob, "firstname": firstname, "address": address, "phonenum": phonenum});


  let valid=true;



  // at the end of the process we need to send something back.
  return Response.json({ "data":"valid" })
}

