/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");

    var BCommentSchema=mongoose.Schema({
            userComment:String,
            userId:String,
            userName:String,
            guideId:String,
            dateCreated:{type:Date,default:Date.now}
        },
        {collection:"assignment.bcomment"}
    );
    return BCommentSchema;
};