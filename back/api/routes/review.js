const router = require("express").Router();
const { Review, User, Product } = require("../../models");

// req.user puede fallar
router.post("/:productId", (req, res) => {
  User.findAll({
    where: {
      id: req.user.id,
    },
  }).then((user) => {
    Review.create(req.body)
      .then((review) => {
        return review.setUser(user.id);
      })
      .then((review) => {
        return review.setProduct(req.params.productId);
      })
      .then((reviewCompleta) => {
        res.send(reviewCompleta);
      })
      .catch((err) => console.log(err));
  });
});

router.get("/", (req, res) => {
  Review.findAll()
    .then((reviews) => res.send(reviews))
    .catch((err) => console.log(err));
});

module.exports = router;
