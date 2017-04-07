/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var BLikeGuideSchema=require("./BLikeGuide.schema.server.js")();
    var BLikeGuide=mongoose.model("BLikeGuide",BLikeGuideSchema);

    var api={
        findLikeAttractionsById:findLikeAttractionsById,
        likeAttraction:likeAttraction,
        findLikeAttractions:findLikeAttractions,
        dislikeAttractions:dislikeAttractions
    };
    return api;

    function findLikeAttractionsById(favoriteId,userId){
        return BLikeGuide.findOne({"favoriteId": favoriteId,"userId":userId});
    }
    function likeAttraction(attraction){
        return BLikeGuide.create(attraction);
    }

    function findLikeAttractions(userId){
        return BLikeGuide.find({"userId":userId})
    }

    function dislikeAttractions(favoriteId,userId){
        return BLikeGuide.remove({"favoriteId": favoriteId,"userId":userId});
    }


};