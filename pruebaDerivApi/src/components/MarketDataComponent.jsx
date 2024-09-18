import React, { useState, useEffect } from 'react';
import { getMarketData } from '../services/derivService';

const MarketDataComponent = () => {
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const data = await getMarketData();
        setMarketData(data);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <div>
      <h1>Market Data</h1>
      <ul>
        {marketData.map((item, index) => (
          <li key={index}>{item.name}: {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default MarketDataComponent;
