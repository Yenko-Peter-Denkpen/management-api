const Room =require("../models/RentSchema")

const houseValidate = require("../config/houseValidator");

const createHouse = async (req, res) => {
  const { gpsAddress, landLordName, hseLocation,hseType,imageOfBuilding,amount,note } = req.body;
  const valid = await houseValidate({ gpsAddress, landLordName});
  if (valid) {
  
    const house = await Room.create({
        gpsAddress,
        landLordName,
        hseLocation,
        hseType,
        imageOfBuilding,
        amount,
        note
        
    });

    if (house) {
    return  res.status(201).json({
       gpsAddress: house.gpsAddress,
        landLordName: house.landLordName,
        hseLocation: house.hseLocation,
        hseType: house.hseType,
        imageOfBuilding: house.imageOfBuilding,
        amount: house.amount,
        note: house.note
     
      });
    }
    res.status(201).json({ message: "vacant room created successfully", house });
  } else {
    res.status(400).json({
      message: "invalid data",
    });
  }
};

//get all houses
const getHouses=(req ,res)=>{
    res.status(200).json(Room)
}



    
  
    module.exports={createHouse,getHouses}