import React, { useState } from 'react';
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import RoomCard from '../ui/RoomCard';
import RoomDetailsModal from '../ui/RoomDetailsModal';

type Room = {
  id: number;
  name: string;
  description: string;
  price: number;
  beds: number;
  checkin: string;
  checkout: string;
  image?: any; // Opcional
};

const { width } = Dimensions.get('window');

const Reservations = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (room: Room) => {
    setSelectedRoom(room);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedRoom(null);
    setModalVisible(false);
  };

  const rooms: Room[] = [
    {
      id: 1,
      name: 'Suíte Premium Vista Mar',
      description: 'Quarto espaçoso com vista para o mar, Wi-Fi e ar-condicionado.',
      price: 450,
      beds: 2,
      checkin: '10/02/2026',
      checkout: '12/02/2026',
    },
    {
      id: 2,
      name: 'Quarto Standard',
      description: 'Quarto confortável com cama de casal e TV a cabo.',
      price: 300,
      beds: 1,
      checkin: '11/02/2026',
      checkout: '13/02/2026',
    },
    {
      id: 3,
      name: 'Suíte Luxo Familiar',
      description: 'Ideal para famílias, com duas camas de casal e varanda.',
      price: 600,
      beds: 4,
      checkin: '12/02/2026',
      checkout: '14/02/2026',
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={{ padding: 20, alignItems: 'center' }}
      style={{ flex: 1 }}
      horizontal={false}
    >
      {rooms.map((room) => (
        <View
          key={room.id}
          style={{
            marginBottom: 40,
            width: '100%',
            maxWidth: width - 40,
          }}
        >
          {/* RoomCard */}
          <RoomCard
            label={room.name}
            description={{
              text: room.description,
              price: room.price,
            }}
          >
            {/* Botão Ver detalhes dentro do RoomCard */}
            <TouchableOpacity
              onPress={() => openModal(room)}
              style={{
                marginTop: 15,
                backgroundColor: '#420350ff',
                padding: 14,
                borderRadius: 6,
                alignItems: 'center',
                width: '100%',
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '600' }}>Ver detalhes</Text>
            </TouchableOpacity>
          </RoomCard>

          {/* Check-in */}
          <View
            style={{
              marginTop: 20,
              backgroundColor: '#ffffff',
              padding: 20,
              borderRadius: 12,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 6,
              elevation: 4,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              Check-in: {room.checkin}
            </Text>
          </View>

          {/* Check-out */}
          <View
            style={{
              marginTop: 20,
              backgroundColor: '#ffffff',
              padding: 20,
              borderRadius: 12,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 6,
              elevation: 4,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: '600' }}>
              Check-out: {room.checkout}
            </Text>
          </View>
        </View>
      ))}

      {/* Modal de detalhes do quarto */}
      {selectedRoom && (
        <RoomDetailsModal
          visible={modalVisible}
          onClose={closeModal}
          room={{
            name: selectedRoom.name,
            description: selectedRoom.description,
            price: selectedRoom.price,
            beds: selectedRoom.beds,
          }}
        />
      )}
    </ScrollView>
  );
};

export default Reservations;
