const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/bookingSchema');
require('dotenv').config();

const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

  app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <title>Backend Server</title>
        </head>
        <body style="font-family: Arial, sans-serif;">
          <h1 style="color: green;">Backend Server is Running!</h1>
          <p>You can access the API at <strong>${req.protocol}://${req.get('host')}/api</strong></p>
        </body>
      </html>
    `);
  });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
