var seeder = require('mongoose-seed');


const user = process.env.USERNAME;
const dbpass = process.env.DBPASS;

// Connect to MongoDB via Mongoose
seeder.connect(`mongodb+srv://${user}:${dbpass}@default-w3x91.mongodb.net/admin?retryWrites=true&w=majorit`, function() {
 
  // Load Mongoose models
  seeder.loadModels([
    '../models/Book/index.js',
    '../models/Institution/index.js',
    '../models/User/index.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['Book', 'Institution', 'User'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'Book',
        'documents': [
            {
                'name': 'isbn',
                'value': '123456789'
            },
            {
                'name': 'title',
                'value': 'Alice in Wonderland'
            },
            {
                'name': 'author',
                'value': 'C.S. Lewis'
            },
            {
                'name': 'institutions',
                'value': []
            }
        ]
    },
    {
        'model': 'Institution',
        'documents': [
            {
                'name': 'name',
                'value': '123456789'
            },
            {
                'name': 'url',
                'value': 'Alice in Wonderland'
            },
            {
                'name': 'domain',
                'value': 'C.S. Lewis'
            },
        ]
    },
    {
        'model': 'User',
        'documents':[
            
        ]
    }
];