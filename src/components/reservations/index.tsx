import AuthContainer from '@/components/ui/AuthContainer';
import RoomCard from '@/components/ui/RoomCard';
import { global } from '@/components/ui/styles';
import { useReservations } from '@/context/ReservationsContext';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Reservations = () => {
  const { reservations } = useReservations();

  return (
    <AuthContainer>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={global.header}>
          <Text style={global.title}>Minhas Reservas</Text>
          <Text style={global.subtitle}>Suas reservas recentes aparecem aqui</Text>
        </View>

        {reservations.length === 0 ? (
          <View style={styles.empty}> 
            <Text style={styles.emptyTitle}>Nenhuma reserva ainda</Text>
            <Text style={styles.emptySubtitle}>Faça uma reserva para vê-la aqui.</Text>
          </View>
        ) : (
          reservations.map((r) => {
            const text = `${r.description || ''}${r.checkIn || r.checkOut ? '\n' : ''}${r.checkIn ? `Check-in: ${r.checkIn}` : ''}${r.checkIn && r.checkOut ? '\n' : ''}${r.checkOut ? `Check-out: ${r.checkOut}` : ''}`;
            return (
              <View key={r.id} style={styles.cardWrapper}>
                <RoomCard
                  image={r.image}
                  label={r.name}
                  icon={{ lib: 'FontAwesome5', name: 'bed' }}
                  description={{ title: 'Reserva', text, price: r.price }}
                />
              </View>
            );
          })
        )}
      </ScrollView>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 40 },
  empty: { alignItems: 'center', marginTop: 60 },
  emptyTitle: { fontSize: 20, fontWeight: '700', color: '#222', marginBottom: 6 },
  emptySubtitle: { fontSize: 15, color: '#666' },
  cardWrapper: { marginBottom: 18 },
});

export default Reservations;
