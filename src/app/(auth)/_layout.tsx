/*Função: definir o fluxo de navegação entre as telas de autenticação:
1- Login
2- Register
3- ResetPassword 
Emplihamento de telas: Stack Navigator, 3 funçoes para manipular o empilhamento:
push(): empilha uma tela acima da outra
back(): remove a tela atual e retorna a tela anterior empilhada
replace(): substitui uma tela por outra */

import { Stack } from "expo-router";

const AuthLayout = ({}) => {
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{title:"Login"}}/>
         {/*<Stack.Screen name="register" options={{title:"Cadastro"}}/> */}
         {/*<Stack.Screen name="resetPassword" options={{title:"Esqueci minha senha"}}/> */}
        </Stack>
    )
}
export default AuthLayout;