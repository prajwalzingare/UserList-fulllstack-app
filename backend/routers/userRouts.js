/* we require expree to use and use its method that is Router */
const express = require("express");

/* we import the all controllers that is logic from usercontrollers */
const {
  home,
  createUser,
  getUser,
  editUser,
} = require("../controllers/userControllers");

/* Router method for for using the routers */
const router = express.Router();

/* we create userrouters and export them in app js for use  */
router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUser", getUser);
router.put("/editUser/:id", editUser);

module.exports = router;
