const express = require('express');
const axios = require('axios');
const cors = require('cors');  // Importa el middleware CORS
const app = express();

const API_TOKEN = 'IRuszy0GIorZNpx';

// Habilita CORS para permitir solicitudes desde http://localhost:5173
app.use(cors({
  origin: 'http://localhost:5173'  // Especifica el origen permitido
}));

app.get('/api/markets', async (req, res) => {
  try {
    const response = await axios.get('https://api.deriv.com/v2/markets', {
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching market data:', error);
    res.status(500).send('Error fetching market data');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));
