const mongoose = require('mongoose')
const ImageSchema = mongoose.Schema({
    travelby: { require: true, type: String },
    place: { require: true, type: String },
    detail: { require: true, type: String },
    status: { require: true, type: String },
    image: {
        data: Buffer,
        contentType: String
    }
},{
    collection: 'Budget',
    timestamps: true,
    versionKey: false
});
module.exports = ImageModel = mongoose.model('imageModel',ImageSchema)