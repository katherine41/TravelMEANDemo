/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var BLikeEatSchema=require("./BLikeEat.schema.server.js")();
    var BLikeEat=mongoose.model("BLikeEat",BLikeEatSchema);

    var api={
        findLikeAttractionsById:findLikeAttractionsById,
        likeAttraction:likeAttraction,
        findLikeAttractions:findLikeAttractions,
        dislikeAttractions:dislikeAttractions
    };
    return api;

    function findLikeAttractionsById(favoriteId,userId){
        return BLikeEat.findOne({"favoriteId": favoriteId,"userId":userId});
    }
    function likeAttraction(attraction){
        return BLikeEat.create(attraction);
    }

    function findLikeAttractions(userId){
        return BLikeEat.find({"userId":userId})
    }

    function dislikeAttractions(favoriteId,userId){
        return BLikeEat.remove({"favoriteId": favoriteId,"userId":userId});
    }


};