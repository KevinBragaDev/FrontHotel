import { Dimensions, View } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";


 type Props ={
    onSelectDate: (date: string) => void;
  }
const DateSelector = ({ onSelectDate }: Props) => {
  const { width, height } = Dimensions.get("window");

  const today = getToday();
 
  return (
    <View>
      <DatePicker
        mode="calendar"
        options={{
          backgroundColor: "#090C08",
          textHeaderColor: "#FFA25B",
          textDefaultColor: "#F6E7C1",
          selectedTextColor: "#fff",
          mainColor: "#F4722B",
          textSecondaryColor: "#D6C7A1",
          borderColor: "rgba(122, 146, 165, 0.1)",
          textFontSize: 14,
          textHeaderFontSize: 15,
        }}
        style={{borderRadius: 25, width : width * 0.9, height : "auto"}}
        isGregorian={true}
        minimumDate={today}
        onSelectedChange={(date) => {
          onSelectDate(date);
      }} 
      />
    </View>
  );
};

export default DateSelector;