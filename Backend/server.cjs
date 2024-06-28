require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const crypto = require('crypto');

const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const API_USER = '44749292';
const API_PASSWORD = 'testpassword_vMgD0pZKovkO1Ou7fxitH90WAM11x2O0vi8AwodRA8xwF';
const SHA_KEY = 'Gq3snkXEnxABXNKrnqRFqWU17AERYJgU8hSGTvoWnJHlh'; // Clave HMAC-SHA-256 (4ª clave de la tabla de claves de la API REST)

app.post('/api/createPayment', (req, res) => {
  const { amount, currency, customer, orderId } = req.body;

  const headers = {
    'Authorization': `Basic ${Buffer.from(`${API_USER}:${API_PASSWORD}`).toString('base64')}`,
    'Content-Type': 'application/json'
  };

  axios.post('https://api.micuentaweb.pe/api-payment/V4/Charge/CreatePayment', {
    amount,
    currency,
    customer,
    orderId,
  }, { headers })
  .then(response => {
    console.log('API response:', response.data);
    const formToken = response.data.answer?.formToken;
    if (!formToken) {
      throw new Error('Form Token no encontrado en la respuesta de la API');
    }
    res.json({ formToken });
  })
  .catch(error => {
    console.error("Error al obtener el formToken:", error.response ? error.response.data : error.message);
    res.status(500).send("Error al obtener el formToken");
  });
});

app.post('/validatePayment', (req, res) => {
  const { hash, ...answer } = req.body;
  console.log('Server data received:', answer);

  // Calcula el hash de los datos relevantes
  const dataToHash = {
      shopId: answer.shopId,
      orderCycle: answer.orderCycle,
      orderStatus: answer.orderStatus,
      orderDetails: answer.orderDetails,
      customer: answer.customer,
      transactions: answer.transactions
  };
  const computedHash = crypto.createHmac('sha256', SHA_KEY).update(JSON.stringify(dataToHash)).digest('hex');

  if (hash === computedHash) {
      res.status(200).send('Valid Payment');
  } else {
      console.error('Payment hash mismatch:', {
          receivedHash: hash,
          computedHash: computedHash,
          answer: JSON.stringify(answer, null, 2)
      });
      res.status(500).send('Payment hash mismatch');
  }
});

// Endpoint para recibir la IPN
app.post('/api/ipn', (req, res) => {
  const { 'kr-hash': krHash, 'kr-answer': krAnswer, 'kr-hash-key': krHashKey, 'kr-hash-algorithm': krHashAlgorithm } = req.body;

  // Verificar que el algoritmo sea compatible
  if (krHashAlgorithm !== 'sha256_hmac') {
    return res.status(400).send('Algoritmo no soportado');
  }

  // Verificar la autenticidad del mensaje
  const computedHash = crypto.createHmac('sha256', SHA_KEY).update(krAnswer).digest('hex');
  if (computedHash !== krHash) {
    return res.status(400).send('Firma no válida');
  }

  // Parsear el contenido de kr-answer
  let answer;
  try {
    answer = JSON.parse(krAnswer);
  } catch (error) {
    return res.status(400).send('Error al parsear kr-answer');
  }

  // Verificar el estado de la transacción
  if (answer.orderStatus === 'PAID') {
    // La transacción ha sido aceptada
    console.log('Transacción aceptada:', answer);
    // Realiza el procesamiento necesario para una transacción exitosa
  } else {
    // La transacción no ha sido aceptada
    console.log('Transacción no aceptada:', answer);
    // Realiza el procesamiento necesario para una transacción no exitosa
  }

  res.status(200).send('IPN procesada correctamente');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
