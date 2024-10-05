import { Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Link, Stack } from "expo-router";
import { ThemedView } from "@/components/ThemedView";


export default function GetStarted() {
    return (
        <> 
            <Stack.Screen  options={{headerShown: false}}/>
            <ThemedView style={styles.container}>
                <Image 
                    source={require('../../assets/images/womanTraining.png')}
                    style={{width: '100%', marginTop:1}}
                />

                <ThemedText style={styles.titleText}>
                    Personalize e anote seus treinos, alcance suas metas como o nosso app .
                </ThemedText>

                <ThemedView style={styles.containerSection}>
                    <ThemedText style={{textAlign:'center', marginTop:15}}>
                        Neste app de treino, você encontra tudo o que precisa, diete e treiunos personalizdos, basta se cadastrar, preencher seus dados e começar!
                    </ThemedText>
                </ThemedView>
                
                <ThemedView style={styles.button}>

                    <TouchableOpacity>

                    <Link href="/LoginScreen">
                        <ThemedText style={{color:"#FFFF", fontWeight:'700', fontSize:18}}>
                            Prosseguir
                        </ThemedText>
                    </Link>
                    </TouchableOpacity>

                </ThemedView>
                
            </ThemedView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#232323',
    },
    titleText: {
        fontSize:25,
        color:'#E2F163',
        alignSelf:'center',
        textAlign:'center',
        marginTop:20,
        width:300
    },
    containerSection : {
        width: '100%',
        backgroundColor:'#B3A0FF',
        height:116,
        marginTop:33,
        alignItems: 'center',
    },
    button: {
        backgroundColor:"#3F3F3F",
        width:178,
        height:44,
        borderRadius:50,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems:'center',
        marginTop:50,
        borderWidth:1,
        borderColor:"#FFFF"
    }
});