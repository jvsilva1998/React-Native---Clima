import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from './estilosInformacoesClima';

export default function InformacoesClima({ dados }) {
  if (!dados) return null;

  const desc = dados.weather[0].description;
  let emoji = '☀️';

  if (desc.includes('rain')) emoji = '🌧️';
  else if (desc.includes('cloud')) emoji = '☁️';
  else if (desc.includes('storm')) emoji = '⛈️';
  else if (desc.includes('snow')) emoji = '❄️';

  return (
    <View style={estilos.container}>
      <Text style={estilos.cidade}>{dados.name}</Text>
      <Text style={estilos.temperatura}>{dados.main.temp}°C</Text>
      <Text style={estilos.descricao}>{desc}</Text>
      <Text style={estilos.icone}>{emoji}</Text>
    </View>
  );
}
