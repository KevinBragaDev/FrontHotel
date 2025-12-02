import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { global } from "./styles";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Infos = { title?: string; text: string; price: number };

type Props = {
  image?: ImageSourcePropType;
  label?: string;
  description?: Infos;
  icon?: NameIcon;
};

const { width, height } = Dimensions.get("window");
const RoomCard = ({ image, label, description, icon }: Props) => {
  return (
    <View style={global.content}>
      {!!image && (
        <View>
          <Image style={styles.image} source={image} resizeMode="cover" />
        </View>
      )}
      <View>
        {!!label && (
          <Text
            style={{ fontSize: 23, fontWeight: 600, marginTop: height * 0.02 }}
          >
            {label}
          </Text>
        )}
        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {!!icon && (
              <View style={{ marginTop: height * 0.04 }}>
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
            {!!description && (
              <View style={styles.description}>
                <View>
                  {!!description.title && (
                    <Text style={global.label}>{description.title}</Text>
                  )}
                  <Text style={styles.text}>{description.text}</Text>
                </View>
                <View style={{ marginTop: height * 0.04 }}>
                  <Text style={styles.price}>R$ {description.price}</Text>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: height * 0.27,
    width: "auto",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  container: {
    marginTop: height * 0.03,
    backgroundColor: "#f6ecffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  description: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
  price: {
    fontSize: 17,
    fontWeight: 600,
    color: "purple",
  },
});
export default RoomCard;

// export const RoomCard = () => {
//   return (
//     <View style={styles.card}>

//       {/* CONTAINER DA IMAGEM */}
//       <View style={styles.imageContainer}>
//         <Image
//           source={require('@/assets/images/img2.jpg')}
//           style={styles.image}
//         />

//         {/* Overlay leve */}
//         <View style={styles.overlay} />

//         {/* Badge de popular */}
//         <View style={styles.popularBadge}>
//           <Text style={styles.popularText}>Popular</Text>
//         </View>
//       </View>

//       {/* INFORMAÇÕES */}
//       <View style={styles.infoSection}>

//         <View style={styles.header}>
//           <Text style={styles.title}>Suíte Premium Vista Mar</Text>

//           <Text style={styles.price}>R$ 450</Text>
//         </View>

//         {/* Rodapé */}
//         <View style={styles.footer}>
//           <Text style={styles.featureText}>2 noites incluídas</Text>

//           <TouchableOpacity style={styles.actionButton}>
//             <Text style={styles.actionText}>Reservar</Text>
//           </TouchableOpacity>
//         </View>

//       </View>
//     </View>
//   );
// };
