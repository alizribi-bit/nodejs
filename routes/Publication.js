const express = require("express");
const router = express.Router();
const controllers=require("../controllers/Publication");







//@POST method
//@desc post a publication
//@path : http://localhost:8999/user/publication
//Params body
router.post("/", controllers.Postpublication);


//@methode GET
//@desc GET all publication
//@path : http://localhost:8999/user/publication
router.get("/",controllers.GetAllPublication );

//@methode GET
//@desc GET one publication
//@path : http://localhost:8999/user/publication/id
//Parms id
router.get("/:id", controllers.GetOnePublication);



//@method DELETE
//@desc delete one publication by id
//@path : http://localhost:8999/user/publication/id
//@Params id
router.delete("/:id", controllers.DeleteOnePublication);

//@method PUT
//@desc update a publication by id
//@path : http://localhost:8999/user/publication
//@Params id body
router.put("/:id", controllers.UpdatePublication);

router.patch('/likepost/:id', controllers.likePost);
router.patch('/unlikepost/:id', controllers.unlikePost);

module.exports = router;

