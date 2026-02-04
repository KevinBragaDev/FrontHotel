import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";
import MaskInput from "react-native-mask-input"

//Bibliotecas de ícones aceitas
type NameIcon = 
    | {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
    | {lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };
type Props = Omit<TextInputProps, "onChangeText"> & {
    label: string;
    errorText?: string; 
    icon?: NameIcon;
    mask?: any;
    onChangeText?: (masked: string, unmasked?: string) => void;
}
 
const TextField = ({label, errorText, icon, style, mask, ...restInputProps } : Props) => {
    const InputComponent = mask ? MaskInput : TextInput;

    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon && (
            <View>
                        {icon.lib === "MaterialIcons" && (
                <MaterialIcons name={icon.name} size={23} color="purple" />
                )}
                {icon.lib === "FontAwesome5" && (
                <FontAwesome5 name={icon.name} size={23} color="purple" />
                )}
                {icon.lib === "FontAwesome6" && (
                <FontAwesome6 name={icon.name} size={23} color="purple" />
                )}
        </View>
                )}
    <InputComponent
                    keyboardAppearance="dark"
                    placeholderTextColor="#9ca3af"
                    style={[global.input, style]}
                    mask={mask}
                    /* const TextField = (props: Props) => {
                        const label = props.label;
                        const errorText = props.errorText;
                        const style = props.style;
                        const value = props.value;
                        const onChangeText = props.onChangeText;
                        const placeholder = props.placeholder;
                        const autoCapitalize = props.autoCapitalize;
                        const keyboardType = props.keyboardType;
                    } */
                    {...restInputProps}
                />
</View>   
            {!! errorText &&
<Text style={global.errorText}>{errorText}</Text>
            }
</View>
    )
};
 
export default TextField;