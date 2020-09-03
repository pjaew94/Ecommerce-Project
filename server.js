const express = require('express');
const app = express();

const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false }))


app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))

app.get('/', (req, res) => {
    return res.send('API running');
})

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})


// TESTED END POINTS FOR USER AND AUTH.JS
