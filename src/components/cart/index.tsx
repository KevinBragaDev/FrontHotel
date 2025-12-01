import { Image, ScrollView, Text, View } from 'react-native';
import RoomCard from '../ui/RoomCard';

const renderCart = () => {

    // Criar os itens dinamicamente usando for
    const cartItems = [];
    for (let i = 1; i <= 5; i++) {   // Por exemplo, repetir 5 vezes
        cartItems.push({
            id: i,
            checkin: `10/0${i}/2025`,
            checkout: `12/0${i}/2025`
        });
    }

    return (
        <ScrollView style={{ padding: 20 }}>
            {cartItems.map((item) => (
                <View key={item.id} style={{ marginBottom: 40 }}>

                    {/* RoomCard */}
                    <RoomCard />

                    {/* CARD BRANCO para Check-in */}
                    <View style={{
                        marginTop: 20,
                        backgroundColor: "#ffffff",
                        padding: 20,
                        borderRadius: 12,
                        shadowColor: "#000",
                        shadowOpacity: 0.1,
                        shadowRadius: 6,
                        elevation: 4,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Image 
                            source={require("@/assets/images/porta aberta.jpg")} 
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 8,
                                marginRight: 15
                            }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>
                            Check-in: {item.checkin}
                        </Text>
                    </View>

                    {/* CARD BRANCO para Check-out */}
                    <View style={{
                        marginTop: 20,
                        backgroundColor: "#ffffff",
                        padding: 20,
                        borderRadius: 12,
                        shadowColor: "#000",
                        shadowOpacity: 0.1,
                        shadowRadius: 6,
                        elevation: 4,
                        flexDirection: "row",
                        alignItems: "center"
                    }}>
                        <Image 
                            source={require("@/assets/images/porta fechada.png")} 
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 8,
                                marginRight: 15
                            }}
                        />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>
                            Check-out: {item.checkout}
                        </Text>
                    </View>

                </View>
            ))}
        </ScrollView>
    );
};

export default renderCart;
