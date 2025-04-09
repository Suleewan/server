// //import ....
// const express = require('express')
// const app = express()
// const morgan = require('morgan')
// const {readdirSync} = require('fs')
// const cors = require('cors')
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();
// const bodyParser = require('body-parser');





// app.use(morgan('dev'))
// app.use(express.json());
// app.use(cors())
// app.use(bodyParser.json());



// readdirSync('./routes')
// .map((c)=> app.use('/api', require('./routes/'+ c)) )




// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

// prisma.$connect()
//   .then(() => {
//     console.log('Connected to the database');
//   })
//   .catch((error) => {
//     console.error('Database connection failed:', error);
// });

const express = require('express');
const app = express();
const morgan = require('morgan');
const { readdirSync } = require('fs');
const cors = require('cors');
const { PrismaClient } = require('./node_modules/@prisma/client');
const bodyParser = require('body-parser');
const prisma = new PrismaClient();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

readdirSync('./routes').map((c) => app.use('/api', require('./routes/' + c)));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

prisma.$connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });
