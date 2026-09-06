import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)),
  });
}

const db = admin.firestore();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { userId, productId, quantity } = req.body;
    await db.collection("orders").add({
      userId,
      productId,
      quantity,
      createdAt: new Date(),
    });
    res.status(200).json({ message: "Order placed!" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
