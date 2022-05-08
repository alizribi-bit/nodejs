const express = require("express");
const router = express.Router();
const controllers=require("../controllers/Employer");







//@POST method
//@desc ajouter a employer
//@path : http://localhost:8999/admin/employer
router.post("/", controllers.PostEmployer);


//@methode GET
//@desc GET all  employer
//@path : http://localhost:8999/admin/employer
router.get("/",controllers.GetAllEmployer);

//@methode GET
//@desc GET one employer
//@path : http://localhost:8999/admin/employer
//Parms id
router.get("/:id", controllers.GetOneEmployer);



//@method DELETE
//@desc delete one classe by id
//@path : http://localhost:8999/admin/classe
//@Params id
router.delete("/:id", controllers.DeleteOneEmployer);

//@method PUT
//@desc update a employer by id
//@path : http://localhost:8999/admin/employer
//@Params id body
router.put("/:id", controllers.UpdateEmployer);


module.exports = router;


