import { Image, Text, View } from 'react-native';
import { styles } from './style';

export const RoomCard = () => {
  return (
    <View style={styles.card}>

      <Image
        source={require('@/assets/images/img2.jpg')}
        style={styles.image}
      />

      <View style={styles.infoSection}>
        <Text style={styles.title}>Suíte Premium Vista Mar</Text>

        <Text style={styles.price}>
          R$ 450 por 2 noites
        </Text>

        <Text style={styles.rating}>
          ⭐ 4.8
        </Text>
      </View>

    </View>
  );
};
