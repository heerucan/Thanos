const express = require("express"); // express 모듈 불러오기
const router = express.Router(); // Router 미들웨어 불러오기

/* GET home page. */
router.post("/post", (req, res) => {
  const result = {
    status: 200,
    message: "post 어렵넹",
  };
  res.status(200).send(result);
});

module.exports = router;
