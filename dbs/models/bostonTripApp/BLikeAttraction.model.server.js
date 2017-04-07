/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var BLikeAttractionSchema=require("./BLikeAttraction.schema.server.js")();
    var BLikeAttraction=mongoose.model("BLikeAttraction",BLikeAttractionSchema);

    var api={
        findLikeAttractionsById:findLikeAttractionsById,
        likeAttraction:likeAttraction,
        findLikeAttractions:findLikeAttractions,
        dislikeAttractions:dislikeAttractions
    };
    return api;

    function findLikeAttractionsById(favoriteId,userId){
        return BLikeAttraction.findOne({"favoriteId": favoriteId,"userId":userId});
    }
    function likeAttraction(attraction){
        return BLikeAttraction.create(attraction);
    }

    function findLikeAttractions(userId){
        return BLikeAttraction.find({"userId":userId})
    }

    function dislikeAttractions(favoriteId,userId){
        return BLikeAttraction.remove({"favoriteId": favoriteId,"userId":userId});
    }


};