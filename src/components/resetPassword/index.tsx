import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";

function isValidEmail(email: string) {
    return /^[^\s@&='"!]@[^\s@&='"!].[^\s@&='"!]$/.test(email);
}

const RenderPasswordreset = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [touched, setTouched] = useState<{email?: boolean}>({});
 
    const errors = useMemo(() =>{
            const errors: Record<string, string> = {};
            if(touched.email && !email) errors.email = "O e-mail é obrigatório.";
            if(touched.email && email && !isValidEmail(email)) errors.email = "O e-mail é inválido, Digite um e-mail válido.";
           
           
           
            return errors;
        }, [email, touched]);
 
        const canSubmit = email &&  Object.keys(errors).length === 0 && !loading;
 
        const handleSubmit =  async () => {
            router.replace("/(auth)");
        }

    const router = useRouter();
    const { width, height } = Dimensions.get("window");
 
    return (
        <View style={{ flex: 1}}>
    <TouchableOpacity
        style={{ position: 'absolute', top: 50, left: 10, zIndex: 10 }}
        onPress={() => router.back()}
        >

        <MaterialIcons name="arrow-back" size={28} color="#000000ff" />
    </TouchableOpacity>
 
    <AuthContainer
        title="Redefina sua senha"
        subtitle="Insira seu e-mail para a redefinição de senha"
        icon="hotel">
 
        <TextField
            label=""
            icon={{ lib: "MaterialIcons", name: "email" }}
            placeholder="user@email.com"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            errorText={errors.email}
        />
 
        <TouchableOpacity style={[global.primaryButton]}
            onPress={handleSubmit}
            disabled={!canSubmit}
            >
            <Text style={global.primaryButtonText}>Redefinir senha</Text>
        </TouchableOpacity>
    </AuthContainer>
</View>
 
    )};

    export default RenderPasswordreset;
