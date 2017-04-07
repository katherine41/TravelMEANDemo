/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");

    var BFollowSchema=mongoose.Schema({
        follow:String,
        followName:String,
        follower:String,
        followerName:String,
        dateCreated:{type:Date,default:Date.now}
        },
        {collection:"assignment.bfollow"}
    );
    return BFollowSchema;
};