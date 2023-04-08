const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE);

router.post("/create-checkout-session", async (req, res) => {
  try {
    console.log("req.body", req.body);
    console.log("price", typeof req.body[0].price);
    console.log("qty", typeof req.body[0].qty);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: Math.ceil(item.price * 107.25),
        },
        quantity: item.qty,
      })),
      success_url: `${process.env.SERVER_URL}/confirmation`,
      cancel_url: `${process.env.SERVER_URL}/`,
    });
    res.json({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
