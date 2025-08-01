import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import InformacoesClima from './componentes/InformacoesClima';
import { estilos } from './estilosApp';

export default function App() {
  const [clima, setClima] = useState(null);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(false);

  async function buscarClima() {
    setCarregando(true);
    setErro(null);
    try {
      const resposta = await fetch('https://wttr.in/Campo+Grande?format=j1');
      if (!resposta.ok) throw new Error('Erro na requisição');
      const dados = await resposta.json();

      const atual = dados.current_condition[0];

      const climaFormatado = {
        name: 'Campo Grande',
        main: {
          temp: atual.temp_C,
        },
        weather: [
          {
            description: atual.weatherDesc[0].value.toLowerCase(),
            icon: 'c',
          },
        ],
      };

      setClima(climaFormatado);
    } catch (e) {
      setErro('Não foi possível buscar o clima.');
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    buscarClima();
  }, []);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Clima - Campo Grande, MS</Text>

      {carregando && <ActivityIndicator size="large" color="#007AFF" style={{ marginTop: 30 }} />}

      {erro && <Text style={estilos.erro}>{erro}</Text>}

      {clima && !carregando && <InformacoesClima dados={clima} />}

      <TouchableOpacity style={estilos.botao} onPress={buscarClima} disabled={carregando}>
        <Text style={estilos.textoBotao}>{carregando ? 'Atualizando...' : 'Atualizar Clima'}</Text>
      </TouchableOpacity>
    </View>
  );
}
