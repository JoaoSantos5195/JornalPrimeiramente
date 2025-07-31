import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export default function Settings(){
    return(
        <SafeAreaView>
            <View>
                <Text>
                    Tela de configurações
                </Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeContainer:{
        flex: 1,
    },
})