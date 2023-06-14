import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        require: true,
    },

    birthday: {
        type: String,
        require: true,
    },

    msv: {
        type: String,
        require: true,
        unique: true
    },

    class: {
        type: String,
        unique: true,
        require: true
    }
}, {
    timestamps: true
});

export const Student = mongoose.model('Student', studentSchema);