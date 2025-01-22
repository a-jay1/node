const { default: mongoose } = require("mongoose");

const signSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        default: ''
    },
    password: {
        type: String,
        require: true,
        default: ''
    }
})

module.export = mongoose.model('Sign',signSchema);