import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Reservation = {
  id: string;
  name: string;
  description?: string;
  price: number;
  beds: number;
  image: any;
  checkIn?: string;
  checkOut?: string;
};

type ContextType = {
  reservations: Reservation[];
  addReservation: (r: Omit<Reservation, 'id'>) => void;
};

const ReservationsContext = createContext<ContextType | undefined>(undefined);

export const ReservationsProvider = ({ children }: { children: ReactNode }) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const addReservation = (r: Omit<Reservation, 'id'>) => {
    const id = String(Date.now());
    setReservations((s) => [{ ...r, id }, ...s]);
  };

  return (
    <ReservationsContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationsContext.Provider>
  );
};

export const useReservations = () => {
  const ctx = useContext(ReservationsContext);
  if (!ctx) throw new Error('useReservations must be used within ReservationsProvider');
  return ctx;
};

export default ReservationsContext;
