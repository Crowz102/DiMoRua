const Detail = require('../models/Detail');
const {multipleMongooseToObject} = require('../../until/mongoose');
class SiteController{
  // [GET] /
    index(req, res, next) {
        Detail.find({})
            .then(details => {
                res.render('index', {
                    details : multipleMongooseToObject(details)
                })
            })
            .catch(next);
    }
    // search(req,res){
    //     res.render('search');
    // }
}
module.exports = new SiteController();
