// Express backend entry point
const express = require('express');
const cors = require('cors');
const app = express();
const paymentRoutes = require('./routes/payment');

app.use(cors());
app.use(express.json());
app.use('/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
