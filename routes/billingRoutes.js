const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    
    const charge = await stripe.charges.create(
      {
        amount: 500,
        currency: "usd",
        source: req.body.id, // obtained with Stripe.js
        description: "Charge for " + req.body.email
      }
    );
    if (charge) {
        req.user.credits += 5;
        const user = await req.user.save();
        if (user) { res.send(user);}
    }
  });
};
