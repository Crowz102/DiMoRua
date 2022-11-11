// const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../until/mongoose');
class NewsController{
  // [GET] /
    // index(req, res, next) {
    //     Course.find({})
    //         .then(details => {
    //             res.render('index', {
    //                 courses : multipleMongooseToObject(details)
    //             })
    //         })
    //         .catch(next);
    // }

    index(req, res, next) {
        res.render('news')
    }

    show(req, res, next) {
        res.send('News')
    }

    // search(req,res){
    //     res.render('search');
    // }
}
module.exports = new NewsController();
