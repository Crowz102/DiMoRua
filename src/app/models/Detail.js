const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Detail = new Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, },
}, {
    timestamps: true
});

module.exports = mongoose.model('Model', Detail, 'detail_page');
