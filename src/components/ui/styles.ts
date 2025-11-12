import { Dimensions, StyleSheet } from "react-native";
const {width, height} = Dimensions.get("window");
export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff"

    },
    keyboardAvoiding:{
        flex: 1
    },
    container: {
        paddingHorizontal: width * 0.07,
        paddingTop: height * 0.07
    },
    header: {
        alignItems : "center",
        marginBottom: height * 0.03
    },
    title: {
        fontSize: 25,
        fontWeight: "800",
        color: "black",
    },
    subtitle: {
        fontSize: 17,
        color: "purple",
        marginTop: height * 0.01
    },
    content: {
        backgroundColor: "#f3eef8ff",
        borderRadius: 10,
        padding: width * 0.02,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        elevation: 5,
        shadowRadius: 10,
        

    },
    inputGroup: {
        marginBottom: height * 0.02,

    },
    label: {
        fontSize: 17,
        fontWeight:"600",
        color: "#120715ff",
        marginBottom: height * 0.01
    },
    inputIcon: {
        backgroundColor: "#fff",
        borderWidth: 1,
        flexDirection: "row",
        borderColor: "#420350ff",
        borderRadius: 10,
        alignItems: "center",
        paddingLeft: width * 0.02

    },
    inputError: {
        backgroundColor: "#fed5d5ff",
        borderColor: "rgba(130,0,0,1)",

    },
    input: {
        flex: 1,
        fontSize: 17,
        color: "#000",
        fontWeight: "600",
        paddingHorizontal: width * 0.02,

    },
    errorText: {
       color: "red",
       fontSize: 15,
       marginTop: height * 0.01,
       
    },
})