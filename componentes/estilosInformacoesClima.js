import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: '#ffffff',
    paddingVertical: 40,
    paddingHorizontal: 35,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 12,
  },
  cidade: {
    fontSize: 36,
    fontWeight: '800',
    color: '#222831',
  },
  temperatura: {
    fontSize: 64,
    fontWeight: '900',
    marginVertical: 12,
    color: '#30475e',
  },
  descricao: {
    fontSize: 22,
    fontStyle: 'italic',
    color: '#616161',
    textTransform: 'capitalize',
    marginBottom: 20,
  },
  icone: {
    fontSize: 90,
  },
});
