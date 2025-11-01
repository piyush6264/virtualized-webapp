const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;

app.get('/api', (req, res) => {
    res.send({ message: "Hello from backend!" });
});

app.listen(port, () => console.log(`Backend running on port ${port}`));
