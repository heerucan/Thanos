const express = require("express"); // express 모듈 불러오기
const router = express.Router(); // Router 미들웨어 불러오기

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.use("/api/blog", require("./api/blog"));

module.exports = router;
