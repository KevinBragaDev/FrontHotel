import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 4, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 10,
  },

  infoSection: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#009688',
    marginTop: 4,
  },

  rating: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
    marginTop: 4,
  },
});
