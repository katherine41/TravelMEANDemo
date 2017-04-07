/**
 * Created by Katherine on 2016/5/31.
 */
(function(){
    angular.module("MainpageApp")
        .controller("findAttractionsController",findAttractionsController)
        .controller("findGuidesController",findGuidesController)
        .controller("userMainpageController",userMainpageController)
        .controller('TabsDemoCtrl',TabsDemoCtrl);


    function userMainpageController($location,$route,$routeParams,MainpageService){
        var vm=this;
        vm.userId=$routeParams.uid;
        vm.attractionId=$routeParams.aid;
        
        function init(){
            var attractionId=$routeParams.aid;
            var userId=$routeParams.uid;
            var otherId=$routeParams.otherid;

            MainpageService.findAttractions()
                .then(
                    function(response){
                        var attraction=response.data;
                        vm.attraction=attraction;
                    }
                );
            MainpageService.findGuide()
                .then(
                    function(response){
                        var guide=response.data;
                        vm.guides=guide;
                    }
                );
            MainpageService.findEat()
                .then(
                    function(response){
                        var eat=response.data;
                        vm.eats=eat;
                    }
                );
            MainpageService.findHotels()
                .then(
                    function(response){
                        var hotels=response.data;
                        vm.hotels=hotels;
                    }
                );
            function likeAttraction(attractionId,attractionName){
                var userId=$routeParams.uid;
                MainpageService.likeAttraction(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.attractionSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existAttraction=err.data;
                        }
                    );
            }
            vm.likeAttraction=likeAttraction;

            MainpageService.findLikeAttractions(userId)
                .then(function(response){
                    var likeAttractions=response.data;
                    vm.likeAttractions=likeAttractions;
                });

            function unlikeAttraction(attraction){
                MainpageService
                    .dislikeAttraction(attraction,userId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.unlikeAttraction=unlikeAttraction;

            function likeHotel(attractionId,attractionName){
                var userId=$routeParams.uid;
                MainpageService.likeHotel(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.hotelSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existHotel=err.data;
                        }
                    );
            }
            vm.likeHotel=likeHotel;

            MainpageService.findLikeHotels(userId)
                .then(function(response){
                    var likeHotels=response.data;
                    vm.likeHotels=likeHotels;
                });

            function unlikeHotel(attraction){
                MainpageService
                    .dislikeHotel(attraction,userId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.unlikeHotel=unlikeHotel;

            function likeEat(attractionId,attractionName){
                var userId=$routeParams.uid;
                MainpageService.likeEat(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.eatSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existEat=err.data;
                        }
                    );
            }
            vm.likeEat=likeEat;

            MainpageService.findLikeEats(userId)
                .then(function(response){
                    var likeEats=response.data;
                    vm.likeEats=likeEats;
                });

            function unlikeEat(attraction){
                MainpageService
                    .dislikeEats(attraction,userId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.unlikeEat=unlikeEat;

            function likeGuide(attractionId,attractionName){
                var userId=$routeParams.uid;
                MainpageService.likeGuide(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.guideSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existGuide=err.data;
                        }
                    );
            }
            vm.likeGuide=likeGuide;

            MainpageService.findLikeGuides(userId)
                .then(function(response){
                    var likeGuides=response.data;
                    vm.likeGuides=likeGuides;
                });

            function unlikeGuide(attraction){
                MainpageService
                    .dislikeGuides(attraction,userId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.unlikeGuide=unlikeGuide;

            function alertClose(){
                $route.reload();
            }
            vm.alertClose=alertClose;

            MainpageService.findFollowsByUserId(userId)
                .then(function(response){
                    var follows=response.data;
                    vm.followsNumber=follows.length;
                    vm.follows=follows;
                });

            MainpageService.findFollowersByUserId(userId)
                .then(function(response){
                    var followers=response.data;
                    vm.followersNumber=followers.length;
                    vm.followers=followers;
                });

            function unFollow(followId){
                MainpageService
                    .unFollow(followId,userId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.unFollow=unFollow;

            MainpageService.findLikeAttractions(otherId)
                .then(function(response){
                    var likeAttractions=response.data;
                    vm.otherAttractions=likeAttractions;
                });

            MainpageService.findLikeHotels(otherId)
                .then(function(response){
                    var likeHotels=response.data;
                    vm.otherHotels=likeHotels;
                });

            MainpageService.findLikeEats(otherId)
                .then(function(response){
                    var likeEats=response.data;
                    vm.otherEats=likeEats;
                });

            MainpageService.findLikeGuides(otherId)
                .then(function(response){
                    var likeGuides=response.data;
                    vm.otherGuides=likeGuides;
                });
        }
        init();
    }

    function findAttractionsController($route,$routeParams,MainpageService){
        var vm=this;
        vm.attractionId=$routeParams.aid;

        function init(){
            var attractionId=$routeParams.aid;
            var userId=$routeParams.uid;

            MainpageService.findAttractionsById(attractionId)
                .then(
                    function(response){
                        var attraction=response.data;
                        vm.eachAttraction=attraction;
                    }
                );
            function likeAttraction(attractionId,attractionName){
                var userId=$routeParams.uid;
                MainpageService.likeAttraction(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.attractionSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existAttraction=err.data;
                        }
                    );
            }
            vm.likeAttraction=likeAttraction;

            MainpageService.findLikeAttractions(userId)
                .then(function(response){
                    var likeEats=response.data;
                    vm.likeEats=likeEats;
                });

            function alertClose(){
                $route.reload();
            }
            vm.alertClose=alertClose;
        }
        init();
    }

    function findGuidesController($routeParams,MainpageService,$route){
        var vm=this;
        vm.guideId=$routeParams.gid;

        function init(){
            var guideId=$routeParams.gid;
            var userId=$routeParams.uid;

            MainpageService.findGuidesById(guideId)
                .then(
                    function(response){
                        var guide=response.data;
                        vm.eachGuide=guide;
                    }
                );

            function likeGuide(attractionId,attractionName){
                var userId=$routeParams.uid;
                MainpageService.likeGuide(attractionId,attractionName,userId)
                    .then(
                        function(response){
                            vm.guideSuccess="Successfully Added!";
                        },
                        function(err){
                            vm.existGuide=err.data;
                        }
                    );
            }
            vm.likeGuide=likeGuide;

            MainpageService.findLikeGuides(userId)
                .then(function(response){
                    var likeGuides=response.data;
                    vm.likeGuides=likeGuides;
                });

            function submitComment(comment) {
                if(comment!==undefined){
                    MainpageService
                        .createComment(comment,userId,guideId)
                        .then( 
                            function(response){
                                var user=response.data;
                                $route.reload();
                                // console.log(user);
                            }
                        );
                }
                else{
                    vm.invalidComment="Null values not allowed!";
                }

            }
            vm.submitComment=submitComment;

            MainpageService.findCommentsByGid(guideId)
                .then(function(response){
                    var comments=response.data;
                    var myComments=[];
                    var othersComments=[];

                    for(var i in comments){
                        var time=comments[i].dateCreated;
                        var oriHour=new Date(time).getHours();
                        oriHour= oriHour < 10 ? '0'+oriHour : oriHour;
                        var oriMinute=new Date(time).getMinutes();
                        oriMinute= oriMinute < 10 ? '0'+oriMinute : oriMinute;

                        var year=(new Date(time).getFullYear()).toString();
                        var month=(new Date(time).getMonth()+1).toString();
                        var date=(new Date(time).getDate()).toString();
                        var hour=oriHour.toString();
                        var minute=oriMinute.toString();

                        comments[i].date=year+"/"+month+"/"+date+" "+hour+":"+minute;
                    }
                    for(var a in comments){
                        if(comments[a].userId===userId){
                            myComments.push(comments[a]);
                        }
                        else if(comments[a].userId!==userId){
                            othersComments.push(comments[a]);
                        }
                    }
                    vm.comments=comments;
                    vm.myComments=myComments;
                    vm.othersComments=othersComments;
                });

            function followOther(followId,username) {
                    MainpageService
                        .followOther(followId,userId,username)
                        .then(
                            function(response){
                                vm.followSuccess="Successfully Followed!";
                            },
                            function(error){
                                vm.AlreadyFollowed=error.data;
                            }
                        );
            }
            vm.followOther=followOther;

            function alertClose(){
                $route.reload();
            }
            vm.alertClose=alertClose;

            function deleteComment(commentId){
                MainpageService
                    .deleteComment(commentId)
                    .then(
                        function(response){
                            $route.reload();
                        }
                    );
            }
            vm.deleteComment=deleteComment;
        }
        init();
    }

    function TabsDemoCtrl($scope, $window) {
        $scope.tabs = [
            { title:'Dynamic Title 1', content:'Dynamic content 1' },
            { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
        ];

        $scope.alertMe = function() {
            setTimeout(function() {
                $window.alert('You\'ve selected the alert tab!');
            });
        };

        $scope.model = {
            name: 'Tabs'
        };
    }
})();
