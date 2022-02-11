const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    name: {type: String, required: true},
    watering: {type: String, required: true},
    exposure: {type: String, required: true},
    notes: {type: String, required: true},
    watered: {type: Boolean, required: false},
    user: {type: Schema.Types.ObjectId, ref:'User'},
}, {
    timestamps: true, 
    }
);

module.exports = mongoose.model('Plant', plantSchema);