const { Router } = require("express");
const {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
} = require("../controller/users");

const router = Router();

router.get("/", usersGet);
router.put("/", usersPut);
router.post("/", usersPost);
router.delete("/", usersDelete);

module.exports = router;
