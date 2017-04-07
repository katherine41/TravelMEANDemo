/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(){
    var mongoose=require("mongoose");
    var BCommentSchema=require("./BComment.schema.server.js")();
    var BComment=mongoose.model("BComment",BCommentSchema);

    var api={
        createComment:createComment,
        findGuideComments:findGuideComments,
        deleteComments:deleteComments
    };
    return api;

    function createComment(comment){
        return BComment.create(comment);
    }
    function findGuideComments(guideId) {
        return BComment.find({"guideId":guideId});
    }
    function deleteComments(commentId) {
        return BComment.remove({"_id":commentId});
    }
};