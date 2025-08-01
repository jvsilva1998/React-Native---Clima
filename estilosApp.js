import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingTop: 80,
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 32,
    fontWeight: '700',
    color: '#222831',
    textAlign: 'center',
    marginBottom: 25,
    letterSpacing: 1.2,
  },
  erro: {
    marginTop: 20,
    fontSize: 18,
    color: '#ff4c4c',
    textAlign: 'center',
    fontWeight: '600',
  },
  botao: {
    marginTop: 50,
    backgroundColor: '#30475e',
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 35,
    shadowColor: '#222831',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
  },
  textoBotao: {
    color: '#f0f4f8',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 1,
  },
});
