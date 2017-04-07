/**
 * Created by Katherine on 2016/6/1.
 */
module.exports = function(app) {
    var models=require("./models/models.server.js")();
    require("../project/services/user.service.server")(app,models);
    require("../project/services/mainpage.service.server.js")(app,models);
};