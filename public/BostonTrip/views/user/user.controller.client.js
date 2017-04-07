/**
 * Created by Katherine on 2016/6/6.
 */

(function(){
    angular
        .module("MainpageApp")
        .controller("LoginController",LoginController)
        .controller("RegisterController",RegisterController)
        .controller("ProfileController",ProfileController)
        .controller("OtherProfileController",OtherProfileController);

    function LoginController($route,$location,UserService){
        var vm=this;
        vm.login=login;
        function login(email,password){
            UserService
                .findUserByCredentials(email,password)
                .then(function (response) {
                    var user=response.data;
                        if(user===null){
                            vm.error="Unable to login";
                        }
                        else if(user._id){
                            $location.url("/landingPage/"+user._id);
                        }
                },
                    function(error){
                        vm.error="Unable to login"
                    }
                );
        }

        function alertClose(){
            $route.reload();
        }
        vm.alertClose=alertClose;
    }
    function RegisterController($location,UserService,$route){
        var vm=this;
        vm.register=register;
        function register(email,username,password,verifyPassword){
            if(email==null||password==null||verifyPassword==null){
                vm.error="Please check your enter!"
            }else if(password!==verifyPassword){
                vm.error="Password not match!"
            }else{
                UserService
                    .createUser(email,username,password,verifyPassword)
                    .then(
                        function(response){
                            var user=response.data;
                            if(user==="0"){
                                vm.error="This Email has been registered!"
                            }
                            else if(user!=="0"){
                                $location.url("/profile/"+user._id);
                            }

                        },
                        function(error){
                            vm.error="Please check your enter!"
                        }
                    );
            }
        }

        function alertClose(){
            $route.reload();
        }
        vm.alertClose=alertClose;
    }

    function ProfileController($rootScope,$route,$location,$routeParams,UserService){
        var vm=this;
        var userId=$routeParams.uid;
        var otherId=$routeParams.otherid;
        
        // var userId=$rootScope.currentUser._id;
        vm.userId=userId;
        function init(){
            UserService
                .findUserById(userId)
                .then(function (response) {
                    var user=response.data;
                    vm.user=user;
                });

            function logout(){
                UserService
                    .logout()
                    .then(
                        function(response){
                            $rootScope.currentUser = null;
                            $location.url("/login");
                        }
                    )
            }
            vm.logout=logout;

            function updateUser(newUser){
                UserService
                    .updateUser(userId,newUser)
                    .then(
                        function(response){
                            vm.updateProfile="Success! Your profile was saved."
                        },
                        function (error) {
                            vm.updateProfile="Unable to update"
                        });
            }
            vm.updateUser=updateUser;

            function deleteUser(){
                UserService
                    .deleteUser(userId)
                    .then(
                        function(response){
                            $location.url("/landingPage");
                        },
                        function(error){
                            vm.updateProfile="Unable to remove user"
                        }
                    );
            }
            vm.deleteUser=deleteUser;


            function alertClose(){
                $route.reload();
            }
            vm.alertClose=alertClose;
        }
        init();
    }

    function OtherProfileController($routeParams,UserService){
        var vm=this;
        var userId=$routeParams.uid;
        var otherId=$routeParams.otherid;

        // var userId=$rootScope.currentUser._id;
        vm.userId=userId;
        function init(){
            UserService
                .findUserById(userId)
                .then(function (response) {
                    var user=response.data;
                    vm.user=user;
                });

            UserService
                .findUserById(otherId)
                .then(function (response) {
                    var user=response.data;
                    vm.otheruser=user;
                });
        }
        init();
    }
})();