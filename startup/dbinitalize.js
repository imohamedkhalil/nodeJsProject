const mongoose = require('mongoose');
let mongo_url = 'mongodb://localhost:27017/mynodejsdb';

if(process.env.NODE_ENV === 'production'){
    mongo_url = 'mongodb://admin:admin@ds247479.mlab.com:47479/mynodejsdb'
}
mongoose.connect(mongo_url);

