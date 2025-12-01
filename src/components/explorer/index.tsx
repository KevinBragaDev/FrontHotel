import { useState } from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import AuthContainer from '../ui/AuthContainer';
import DateSelector from '../ui/DateSelector';
import RoomCard from '../ui/RoomCard';
import TextField from '../ui/TextField';

const RenderExplorer = () =>{
    const {width, height} = Dimensions.get("window");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [Calendar, setCalendar] = useState<"checkin" | "checkout">();

    return (
        <AuthContainer>
            <View style={{display: "flex", flexDirection: "row", gap: 20, width: width * 0.5, justifyContent: "center"}}>
                <View style = {{display: "flex", flexDirection: "column"}}>
                    <TouchableOpacity onPress={() => setCalendar("checkin")}>
                        <View style = {{width: width * 0.4}}>
                            <TextField label="Check-in" icon={{lib: "FontAwesome5", name: "calendar-alt"}} placeholder='Selecione a data' value={checkIn}/>
                        </View>
                    </TouchableOpacity>
                    {/* DateSelector */}
                    {Calendar === "checkin" && (
                    <DateSelector onSelectDate={(date) => {setCheckIn(date); }} /> )}
                </View>
                
                <View style = {{display: "flex", flexDirection:"column"}}>
                    <TouchableOpacity onPress={() => setCalendar("checkout")}>
                        <View style = {{width: width * 0.42}}>
                            <TextField label="Check-out" icon={{lib: "FontAwesome5", name: "calendar-alt"}} placeholder='Selecione a data' value={checkOut} />
                        </View>
                    </TouchableOpacity>
                    {/* DateSelector */}
                    {Calendar === "checkout" && (
                    <DateSelector onSelectDate={ (date) => {setCheckOut(date); }} /> )}
                </View>
            </View>  
            <RoomCard 
                label='Apartamento'
                icon={{lib: "FontAwesome5", name: "bed"}}
                description={{
                text: "1 cama de casal\n1 cama de solteiro",
                price: 250.00
            }}
            />
        </AuthContainer>
    );
};
export default RenderExplorer;