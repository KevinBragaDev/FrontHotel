import { Dimensions, View } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";

type Props = {
  onSelectDate: (date: string) => void;
};

const DateSelector = ({ onSelectDate }: Props) => {
  const { width } = Dimensions.get("window");
  const today = getToday();

  const handleChange = (date: string) => {
    onSelectDate?.(date);
  };

  return (
    <View style={{ position: "relative" }}>
      <DatePicker
        mode="calendar"
        current={today}
        minimumDate={today}
        isGregorian={true}
        options={{
          backgroundColor: "#f0f0f0ff",
          textHeaderColor: "#9e62acff",
          textDefaultColor: "#420350ff",
          selectedTextColor: "#fff",
          mainColor: "#9e62acff",
          textSecondaryColor: "#420350ff",
          borderColor: "#9e62acff",
          textFontSize: 14,
          textHeaderFontSize: 15,
        }}
        style={{
          borderRadius: 15,
          width: width * 0.69,
          position: "absolute",
          zIndex: 1,
        }}
        onSelectedChange={handleChange}
        onDateChange={handleChange}
      />
    </View>
  );
};

export default DateSelector;