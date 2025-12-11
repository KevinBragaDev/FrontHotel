import { useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import TextField from "../ui/TextField";
import { global } from "../ui/styles";

function isValidEmail(email: string) {
    return /^[^\s@&='"!]@[^\s@&='"!].[^\s@&='"!]$/.test(email);
}
const RenderRegister = () => {
    const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [Nome, setNome] = useState("");
        const [CPF, setCPF] = useState("");
        const [telefone, setTelefone] = useState("");
        const [loading, setLoading] = useState(false);
        const [touched, setTouched] = useState
        <{email?: boolean; password?: boolean; name?: boolean; cpf?: boolean; telefone?: boolean}>({});

        const errors = useMemo(() =>{
                const errors: Record<string, string> = {};
                if(touched.email && !email) errors.email = "O e-mail é obrigatório.";
                if(touched.email && email && !isValidEmail(email)) errors.email = "O e-mail é inválido, Digite um e-mail válido.";
                if(touched.password && !password) errors.password = "A senha é obrigatória.";
                if(touched.password && password && password.length < 6) errors.password = "A senha deve ter no mínimo 6 caracteres.";
                if(touched.name && !Nome) errors.name = "O nome é obrigatório.";
                if(touched.cpf && !CPF) errors.cpf = "O CPF é obrigatório.";
                if(touched.telefone && !telefone) errors.telefone = "O telefone é obrigatório.";
                return errors;
            }, [email, touched]);
 
            const canSubmit = email && Object.keys(errors).length === 0 && !loading;
 
    const handleSubmit =  async () => {  
    router.replace("/(auth)");
    }





    const router = useRouter();
    const { width, height } = Dimensions.get("window");
 
    return (
        <AuthContainer
            title="Bem-vindo"
            subtitle="Crie sua conta!"
            icon="hotel">
 
            <TextField
                label="Nome completo"
                icon={{ lib: "MaterialIcons", name: "drive-file-rename-outline"}}
                placeholder="Digite seu nome completo"
                value={Nome}
                onChangeText={(text) => setNome(text)}
            />
 
            <TextField
                label="CPF"
                icon={{ lib: "MaterialIcons", name: "123"}}
                placeholder="Digite seu CPF"
                value={CPF}
                onChangeText={(text) => setCPF(text)}
            />
           
            <TextField
                label="Telefone"
                 icon={{ lib: "MaterialIcons", name: "local-phone"}}
                placeholder="Digite seu telefone com DDD!"
                value={telefone}
                onChangeText={(text) => setTelefone(text)}
            />  
 
            <TextField
                label="E-mail"
                icon={{ lib: "MaterialIcons", name: "email"}}
                placeholder="user@email.com"
                keyboardType="email-address"
                 value={email}
                onChangeText={(text) => setEmail(text)}
            />
 
            <PasswordField
                label="Senha"
                icon={{ lib: "FontAwesome6", name: "lock"}}
                placeholder="*********"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
 
            <PasswordField
                label="Confirme sua senha"
                icon={{lib:"FontAwesome6",name:"lock"}}
                placeholder="*********"
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
 
        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Criar conta</Text>
        </TouchableOpacity>
        <View style={{alignItems: "center", marginTop: height * 0.03}}>
            <TouchableOpacity onPress={handleSubmit}style={{}}>
                <Text style={{color: "#0a4b70ff", fontWeight: 500, fontSize: 17}}>Já possui uma conta?
                    Faça login agora!
                </Text>
            </TouchableOpacity>
        </View>
        </AuthContainer>
    )};



    export default RenderRegister