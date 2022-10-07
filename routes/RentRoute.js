const {Router} =require("express")
const { getHouses, createHouse } = require("../controllers/RentController")

const router=Router()

router.post("/addhouse", createHouse)
router.get("/", getHouses)



module.exports= router
