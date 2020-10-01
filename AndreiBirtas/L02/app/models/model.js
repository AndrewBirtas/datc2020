const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    nume: String,
    prenume: String,
    facultate: String,
    An: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Students', NoteSchema);
