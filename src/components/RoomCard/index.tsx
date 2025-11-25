import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

export const RoomCard = () => {
  return (
    <View style={styles.card}>

      {/* CONTAINER DA IMAGEM */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/img2.jpg')}
          style={styles.image}
        />

        {/* Overlay leve */}
        <View style={styles.overlay} />

        {/* Badge de popular */}
        <View style={styles.popularBadge}>
          <Text style={styles.popularText}>Popular</Text>
        </View>
      </View>

      {/* INFORMAÇÕES */}
      <View style={styles.infoSection}>

        <View style={styles.header}>
          <Text style={styles.title}>Suíte Premium Vista Mar</Text>

          <Text style={styles.price}>R$ 450</Text>
        </View>

        {/* Rodapé */}
        <View style={styles.footer}>
          <Text style={styles.featureText}>2 noites incluídas</Text>

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Reservar</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  );
};
