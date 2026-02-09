import React from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useReservations } from '@/context/ReservationsContext';
import { useRouter } from 'expo-router';

type RoomDetails = {
  image: any; // Pode ser ImageSourcePropType
  name: string;
  description?: string;
  price: number;
  beds: number;
};

type Props = {
  visible: boolean;
  onClose: () => void;
  room: RoomDetails;
  checkIn?: string;
  checkOut?: string;
};

const RoomDetailsModal = ({ visible, onClose, room, checkIn, checkOut }: Props) => {
  const { addReservation } = useReservations();
  const router = useRouter();
  return (
    <Modal visible={visible} animationType="slide" transparent>
      {/* Fundo semitransparente */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          {/* Container do modal */}
          <TouchableWithoutFeedback>
            <View
              style={{
                backgroundColor: '#fff',
                borderRadius: 8,
                padding: 20,
                gap: 16,
              }}
            >
              {/* Imagem do quarto */}
              <Image
                source={room.image}
                style={{ width: '100%', height: 200, borderRadius: 12 }}
                resizeMode="cover"
              />

              {/* Nome do quarto */}
              <Text style={{ fontSize: 22, fontWeight: '700' }}>{room.name}</Text>

              {/* Descrição */}
              {room.description && (
                <Text style={{ fontSize: 16, color: '#555' }}>
                  {room.description}
                </Text>
              )}

              {/* Informações do quarto */}
              <Text style={{ fontSize: 16 }}>
                🛏 {room.beds} {room.beds > 1 ? 'camas' : 'cama'}
              </Text>
              <Text style={{ fontSize: 16, fontWeight: '600', color: 'purple' }}>
                R$ {room.price}
              </Text>

              {/* Botão reservar */}
              <TouchableOpacity
                onPress={() => {
                  addReservation({
                    name: room.name,
                    description: room.description,
                    price: room.price,
                    beds: room.beds,
                    image: room.image,
                    checkIn: checkIn,
                    checkOut: checkOut,
                  });
                  onClose();
                  router.push('/reservations');
                }}
                style={{
                  backgroundColor: '#28a745', // verde
                  padding: 14,
                  borderRadius: 6,
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <Text style={{ color: '#fff', fontWeight: '600' }}>Reservar</Text>
              </TouchableOpacity>

              {/* Botão fechar */}
              <TouchableOpacity
                onPress={onClose}
                style={{
                  backgroundColor: '#420350ff',
                  padding: 14,
                  borderRadius: 6,
                  alignItems: 'center',
                  marginTop: 10,
                }}
              >
                <Text style={{ color: '#fff', fontWeight: '600' }}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default RoomDetailsModal;
