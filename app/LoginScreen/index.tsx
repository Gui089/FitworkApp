import { StyleSheet, TextInput } from "react-native";
import { Stack, useNavigation } from "expo-router";
import { ScreenComponent } from "../Components/Screen/Screen";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";


export default function LoginScreen() {
    return (
        <>
            <Stack.Screen options={{headerShown:false}} />

            <ScreenComponent titleScreen="Login" canGoBack={true}>
                
                <ThemedText style={styles.title}>
                    Bem-vindo(a)
                </ThemedText>

                <ThemedText style={styles.paragraph}>
                    Faça login para ter acesso ao app, caso não ainda tenha sua conta no nosso app, pode se cadastrar totalmente grátis .
                </ThemedText>

                <ThemedView style={styles.containerForm}>
                    
                    <ThemedText style={{alignSelf:'flex-start', marginLeft:50}}>
                        E-mail
                    </ThemedText>

                    <TextInput style={styles.inputForm}>

                    </TextInput>

                </ThemedView>

            </ScreenComponent>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#232323",
        flex:1
    },
    title: {
        fontWeight:"bold",
        color:'white',
        alignSelf: 'center',
        marginTop: 44,
        fontSize:20
    },
    paragraph: {
        color:'white',
        padding:30,
        alignSelf:'center',
        textAlign: 'center'
    },
    containerForm: {
        backgroundColor:"#B3A0FF",
        width:'100%',
        height:260,
        marginTop:5,
        alignItems:'center'
    },
    inputForm: {
        backgroundColor:"white",
        height:50,
        width:311,
        borderRadius:10,
    }
});