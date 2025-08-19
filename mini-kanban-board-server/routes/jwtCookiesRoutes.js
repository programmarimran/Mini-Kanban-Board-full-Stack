const express=require("express")
const router = express.Router();
const  { clearJwtCookie, createJwtCookie } =require("../controllers/jwtCookiesController.js");

router.post("/jwt", createJwtCookie);   //login
router.post("/logout", clearJwtCookie); 

module.exports= router;
