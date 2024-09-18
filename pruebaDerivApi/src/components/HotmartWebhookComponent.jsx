import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000', {
  transports: ['websocket'], // Opcional: especificar el transporte
});

const HotmartWebhookComponent = () => {
  const [purchaseData, setPurchaseData] = useState(null);

  useEffect(() => {
    // Escuchar el evento 'purchaseCompleted'
    socket.on('purchaseCompleted', (data) => {
      setPurchaseData(data);
    });

    // Limpieza al desmontar el componente
    return () => {
      socket.off('purchaseCompleted');
    };
  }, []);

  return (
    <div>
      {purchaseData ? (
        <div>
          <h1>Nueva Compra Recibida</h1>
          <p>Producto: {purchaseData.product_name}</p>
        </div>
      ) : (
        <h1>No hay nuevas compras</h1>
      )}
    </div>
  );
};

export default HotmartWebhookComponent;

