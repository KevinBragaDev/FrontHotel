import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Alert, Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/DateSelector";
import InputSpin from "../ui/InputSpin";
import RoomCard from "../ui/RoomCard";
import RoomDetailsModal from "../ui/RoomDetailsModal"; // Import do modal
import { global } from "../ui/styles";
import TextField from "../ui/TextField";

const RenderExplorer = () => {
  const { width, height } = Dimensions.get("window");

  // 🔹 Estados para check-in / check-out
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [calendar, setCalendar] = useState<"checkin" | "checkout" | null>(null);
  const [qntGuests, setQntGuests] = useState<number>(1);
  const {consulta} = useAuth();

  // 🔹 Estado para modal
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<{
    name: string;
    description: string;
    price: number;
    beds: number;
    image: any;
  } | null>(null);

  // 🔹 Funções para abrir/fechar modal
  const openModal = (room: { name: string; description: string; price: number; beds: number; image: any }) => {
    setSelectedRoom(room);
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setSelectedRoom(null);
  };

  // Exemplo de quarto
  const room = {
    name: "Apartamento",
    description: "1 cama de casal\n2 camas de solteiro",
    price: 180.9,
    beds: 3,
    image: require("@/assets/images/img2.jpg"),
  };

  return (
    <AuthContainer>
      <ScrollView contentContainerStyle={{ padding: 20 }}>

        {/* CHECK-IN */}
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity onPress={() => setCalendar("checkin")}>
            <View style={{ width: width * 0.8 }}>
              <TextField
                label="Check-in"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="Selecione a data"
                value={checkIn}
              />
            </View>
          </TouchableOpacity>
          {calendar === "checkin" && (
            <DateSelector
              onSelectDate={(date) => {
                setCheckIn(date);
                setCalendar(null);
              }}
            />
          )}
        </View>

        {/* CHECK-OUT */}
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity onPress={() => setCalendar("checkout")}>
            <View style={{ width: width * 0.8 }}>
              <TextField
                label="Check-out"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="Selecione a data"
                value={checkOut}
              />
            </View>
          </TouchableOpacity>
          {calendar === "checkout" && (
            <DateSelector
              onSelectDate={(date) => {
                setCheckOut(date);
                setCalendar(null);
              }}
            />
          )}
        </View>
        <View>

          <Text style={[global.label, { textAlign: "center" }]}>Quantidade de hóspedes</Text>

          <View style={{ alignItems: "center", width: "100%", marginTop: 10 }}>
            <InputSpin
              guests={qntGuests}
              onSelectSpin={setQntGuests}
              maxGuests={6}
              minGuests={1}
              step={1}
              colorMax="#420350ff"
              colorMin="#420350ff"
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              width: width * 0.75,
              marginTop: height * 0.02,
              backgroundColor: "#420350ff",
              paddingVertical: 10,
              borderRadius: 5,
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              elevation: 3,
            }}
            onPress={async () => {
              try {
                await consulta(checkIn, checkOut, qntGuests);
              } catch (erro: any) {
                Alert.alert("Nessas datas", erro?.message || "Sem quartos disponíveis");
              }
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 16,
                fontWeight: "600",
              }}
            >
              Consulta
            </Text>
          </TouchableOpacity>0
        </View>

        {/* CARD DO QUARTO */}
        <RoomCard
          image={room.image}
          label={room.name}
          icon={{ lib: "FontAwesome5", name: "bed" }}
          description={{ title: "Descrição do quarto", text: room.description, price: room.price }}
        >
          {/* 🔹 Botão para abrir modal */}
          <TouchableOpacity
            onPress={() => openModal(room)}
            style={{
              backgroundColor: "#420350ff",
              padding: 14,
              borderRadius: 6,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>Ver detalhes</Text>
          </TouchableOpacity>
        </RoomCard>

        {/* 🔹 Modal de detalhes do quarto */}
        {selectedRoom && (
          <RoomDetailsModal
            visible={modalVisible}
            onClose={closeModal}
            room={{
              name: selectedRoom.name,
              description: selectedRoom.description,
              price: selectedRoom.price,
              beds: selectedRoom.beds,
              image: selectedRoom.image,
            }}
            checkIn={checkIn}
            checkOut={checkOut}
          />
        )}
      </ScrollView>
    </AuthContainer>
  );
};

export default RenderExplorer;
