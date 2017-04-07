/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");

    var BLikeHotelSchema=mongoose.Schema({
        userId:String,
        favoriteId:String,
        favoriteName:String,
        dateCreated:{type:Date,default:Date.now}
        },
        {collection:"assignment.blikeHotel"}
    );
    return BLikeHotelSchema;
};