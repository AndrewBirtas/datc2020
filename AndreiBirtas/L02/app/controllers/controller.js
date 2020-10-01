const Student = require('../models/model.js');

exports.create = (req, res) => {

    const note = new Student({
        nume: req.body.nume, 
        prenume: req.body.prenume,
        facultate: req.body.facultate,
        An: req.body.An
    });

    note.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the sstudent."
        });
    });
};

exports.findAll = (req, res) => {
    Student.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving students."
        });
    });
};

exports.delete = (req, res) => {
    Student.findByIdAndRemove(req.params.studentId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.studentId
            });
        }
        res.send({message: "Student deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.studentId
            });                
        }
        return res.status(500).send({
            message: "Could not delete student with id " + req.params.studentId
        });
    });
};


exports.update = (req, res) => {

    Note.findByIdAndUpdate(req.params.studentId, {
        nume: req.body.nume, 
        prenume: req.body.prenume,
        facultate: req.body.facultate,
        An: req.body.An
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Student not found with id " + req.params.studentId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Student not found with id " + req.params.studentId
            });                
        }
        return res.status(500).send({
            message: "Error updating student with id " + req.params.studentId
        });
    });
};