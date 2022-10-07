const yup=require("yup");
function houseValidate(data){
    const houseSchema=yup.object().shape({
        gpsAddress:yup.string().required("gpsAddress cant be null").max(10),
        landLordName:yup.string().required("name cant be null").min(3).max(50)

    });
    return houseSchema.validate(data);
}
module.exports=houseValidate;