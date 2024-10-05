import { StyleSheet } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack, useNavigation } from "expo-router";
import { ScreenComponent } from "../Components/Screen/Screen";


export default function LoginScreen() {

    const navigation = useNavigation();
    
    return (
        <>
            <Stack.Screen options={{headerShown:false}} />
            <ScreenComponent titleScreen="Login">
                
            </ScreenComponent>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#232323",
        flex:1
    }
});