const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());

// connect to mlab(mlab.com) mongo cloud database
mongoose.connect('mongodb://mohan:test123@ds261430.mlab.com:61430/gql-ninja');
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,      // GraphQL schema
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000');
});
