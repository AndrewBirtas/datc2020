module.exports = (app) => {
    const notes = require('../controllers/controller.js');

    // Create New
    app.post('/students', notes.create);

    // Retrieve all
    app.get('/students', notes.findAll);

    //Not sure it works
    app.put('students/:studentId', notes.update);
    
    // Delete
    app.delete('/students/:studentId', notes.delete);

}