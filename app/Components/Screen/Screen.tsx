import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView"
import { useNavigation } from "expo-router";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

interface ScreenProps {
    canGoBack?:boolean;
    titleScreen?: string;
    children?:React.ReactNode;
}

export const ScreenComponent = ({canGoBack, titleScreen, children}:ScreenProps) => {

    const navigate = useNavigation();

    const handleGoBack = () => {
        navigate.goBack();
    }

    return (
        <ThemedView style={styles.container}>
            
            {canGoBack && 
            <ThemedView style={styles.navGoBack}>
                <TouchableOpacity onPress={handleGoBack} hitSlop={10}>
                    <Image style={styles.imageGoBack} alt="Image de seta para esquerda" source={require('../../../assets/images/Arrow (1).png')} />
                </TouchableOpacity>

                <ThemedText style={styles.titleComponent}>
                    {titleScreen}
                </ThemedText>

                <ThemedView />
            </ThemedView>}
            
            {children}
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#232323",
        flex:1,
    },
    navGoBack: {
        marginTop:49,
        backgroundColor:"#232323",
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'space-between',
        padding:30
    },
    imageGoBack : {
        width:8,
        height:16,
    },
    titleComponent: {
        color: "#E2F163",
        fontSize:25,
        marginTop:10,
        fontWeight:'bold'
    }
});