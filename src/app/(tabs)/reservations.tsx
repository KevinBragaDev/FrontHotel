import { View } from 'react-native';
import { RoomCard } from '../../components/RoomCard';
const reservations = () =>{
    return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <RoomCard />
        </View>
  );
};
export default reservations;