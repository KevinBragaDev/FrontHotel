import { ReservationsProvider } from "@/context/ReservationsContext";
import AuthProvider from "@/contexts/AuthContext";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <AuthProvider>
      <ReservationsProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </ReservationsProvider>
    </AuthProvider>
  );
};

export default RootLayout;