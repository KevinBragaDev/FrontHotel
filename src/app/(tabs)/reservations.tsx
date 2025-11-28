import { View } from 'react-native';
import RenderCart from '../../components/cart';
const reservations = () =>{
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            
            <RenderCart/>
        </View>
  );
};
export default reservations;