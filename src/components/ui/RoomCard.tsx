import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { global } from "./styles";

type Infos = { title?: string; text: string; price: number };
type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };
type Props = {
  //   image?:
  label?: string;
  description?: Infos;
  icon?: NameIcon;
};
const RoomCard = ({ label, description, icon }: Props) => {
  return (
    <View>
      <View>{/* imagem */}</View>
      <View>
        {!!label && <Text style={global.title}>{label}</Text>}
        <View>
          <View>
            {!!icon && (
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
            {!!description && (
              <View style={{display: "flex", flexDirection: "row"}}>
                <View style={styles.description}>
                  {!!description.title && <Text style={{color: "#fff"}}>{description.title}</Text>}
                  <Text>{description.text}</Text>
                  <Text>{description.price}</Text>
                </View>
              </View>
            )}
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  description: {
    backgroundColor: "#420350ff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
  }
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
