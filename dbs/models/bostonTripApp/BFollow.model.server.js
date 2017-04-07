/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var BFollowSchema=require("./BFollow.schema.server.js")();
    var BFollow=mongoose.model("BFollow",BFollowSchema);

    var api={
        // findLikeAttractionsById:findLikeAttractionsById,
        findFollowsById:findFollowsById,
        followUser:followUser,
        findFollowsByUserId:findFollowsByUserId,
        findFollowersByUserId:findFollowersByUserId,
        unFollowUser:unFollowUser
        // findLikeAttractions:findLikeAttractions,
        // dislikeAttractions:dislikeAttractions
    };
    return api;

    function findFollowsById(followId,followerId){
        return BFollow.findOne({"follow": followId,"follower":followerId});
    }
    function followUser(follow){
        return BFollow.create(follow);
    }

    function findFollowsByUserId(userId){
        return BFollow.find({"follower":userId})
    }
    function findFollowersByUserId(userId){
        return BFollow.find({"follow":userId})
    }

    function unFollowUser(followId,userId){
        return BFollow.remove({"follow": followId,"follower":userId});
    }

};