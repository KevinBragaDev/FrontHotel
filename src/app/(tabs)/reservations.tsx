import Reservations from '@/components/cart';
import { View } from 'react-native';
const reservations = () =>{
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            
            <Reservations/>
        </View>
  );
};
export default reservations;