/**
 * Created by Katherine on 2016/5/31.
 */

(function(){
    angular.module("MainpageApp")
        .factory("MainpageService",MainpageService);
    function MainpageService($http){
        var api={
            findAttractions:findAttractions,
            findGuide:findGuide,
            findEat:findEat,
            findHotels:findHotels,
            findAttractionsById:findAttractionsById,
            likeAttraction:likeAttraction,
            findLikeAttractions:findLikeAttractions,
            dislikeAttraction:dislikeAttraction,
            likeHotel:likeHotel,
            findLikeHotels:findLikeHotels,
            dislikeHotel:dislikeHotel,
            likeEat:likeEat,
            findLikeEats:findLikeEats,
            dislikeEats:dislikeEats,
            likeGuide:likeGuide,
            findLikeGuides:findLikeGuides,
            dislikeGuides:dislikeGuides,
            findGuidesById:findGuidesById,
            createComment:createComment,
            findCommentsByGid:findCommentsByGid,
            followOther:followOther,
            findFollowsByUserId:findFollowsByUserId,
            findFollowersByUserId:findFollowersByUserId,
            unFollow:unFollow,
            deleteComment:deleteComment
        };
        return api;
        
        function findAttractions(){
            var url="/BostonTrip/api/attraction";
            return $http.get(url);
        }
        function findGuide() {
            var url="/BostonTrip/api/guide";
            return $http.get(url);
        }

        function findEat() {
            var url="/BostonTrip/api/eat";
            return $http.get(url);
        }

        function findAttractionsById(attractionId){
            var url="/BostonTrip/api/attraction/"+attractionId;
            return $http.get(url);
        }

        function findHotels() {
            var url="/BostonTrip/api/hotels";
            return $http.get(url);
        }

        function likeAttraction(attractionId,name,userId){
            var attraction={
                favoriteId:attractionId,
                favoriteName:name,
                userId:userId
            };
            return $http.post("/BostonTrip/api/likeAttraction",attraction);
        }

        function findLikeAttractions(userId){
            var url="/BostonTrip/api/"+userId+"/like/attractions";
            return $http.get(url);
        }

        function dislikeAttraction(attractionId,userId){
            var url="/BostonTrip/api/"+userId+"/dislike/attractions/"+attractionId;
            return $http.delete(url);
        }

        function likeHotel(attractionId,name,userId){
            var hotel={
                favoriteId:attractionId,
                favoriteName:name,
                userId:userId
            };
            return $http.post("/BostonTrip/api/likeHotel",hotel);
        }

        function findLikeHotels(userId){
            var url="/BostonTrip/api/"+userId+"/like/hotels";
            return $http.get(url);
        }

        function dislikeHotel(attractionId,userId){
            var url="/BostonTrip/api/"+userId+"/dislike/hotels/"+attractionId;
            return $http.delete(url);
        }

        function likeEat(attractionId,name,userId){
            var eat={
                favoriteId:attractionId,
                favoriteName:name,
                userId:userId
            };
            return $http.post("/BostonTrip/api/likeEat",eat);
        }

        function findLikeEats(userId){
            var url="/BostonTrip/api/"+userId+"/like/eats";
            return $http.get(url);
        }

        function dislikeEats(attractionId,userId){
            var url="/BostonTrip/api/"+userId+"/dislike/eats/"+attractionId;
            return $http.delete(url);
        }

        function likeGuide(attractionId,name,userId){
            var guide={
                favoriteId:attractionId,
                favoriteName:name,
                userId:userId
            };
            return $http.post("/BostonTrip/api/likeGuide",guide);
        }

        function findLikeGuides(userId){
            var url="/BostonTrip/api/"+userId+"/like/guides";
            return $http.get(url);
        }

        function dislikeGuides(attractionId,userId){
            var url="/BostonTrip/api/"+userId+"/dislike/guides/"+attractionId;
            return $http.delete(url);
        }

        function findGuidesById(guideId){
            var url="/BostonTrip/api/guide/"+guideId;
            return $http.get(url);
        }

        function createComment(comment,userId,guideId){
            var comment={
                userComment:comment,
                userId:userId,
                guideId:guideId
            };
            return $http.post("/BostonTrip/api/comment",comment);
        }

        function findCommentsByGid(guideId){
            var url="/BostonTrip/api/guide/"+guideId+"/comments";
            return $http.get(url);
        }

        function followOther(followId,userId,followName){
            var follow={
                follow:followId,
                followName:followName,
                follower:userId
            };
            return $http.post("/BostonTrip/api/followOther",follow);
        }

        function findFollowsByUserId(userId){
            var url="/BostonTrip/api/"+userId+"/follows";
            return $http.get(url);
        }
        function findFollowersByUserId(userId){
            var url="/BostonTrip/api/"+userId+"/followers";
            return $http.get(url);
        }

        function unFollow(followId,userId){
            var url="/BostonTrip/api/"+userId+"/unFollow/"+followId;
            return $http.delete(url);
        }

        function deleteComment(commentId){
            var url="/BostonTrip/api/comment/delete/"+commentId;
            return $http.delete(url);
        }

    }
})();