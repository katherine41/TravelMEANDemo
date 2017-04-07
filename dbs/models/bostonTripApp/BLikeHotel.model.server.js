/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var BLikeHotelSchema=require("./BLikeHotel.schema.server.js")();
    var BLikeHotel=mongoose.model("BLikeHotel",BLikeHotelSchema);

    var api={
        findLikeAttractionsById:findLikeAttractionsById,
        likeAttraction:likeAttraction,
        findLikeAttractions:findLikeAttractions,
        dislikeAttractions:dislikeAttractions
    };
    return api;

    function findLikeAttractionsById(favoriteId,userId){
        return BLikeHotel.findOne({"favoriteId": favoriteId,"userId":userId});
    }
    function likeAttraction(attraction){
        return BLikeHotel.create(attraction);
    }

    function findLikeAttractions(userId){
        return BLikeHotel.find({"userId":userId})
    }

    function dislikeAttractions(favoriteId,userId){
        return BLikeHotel.remove({"favoriteId": favoriteId,"userId":userId});
    }


};