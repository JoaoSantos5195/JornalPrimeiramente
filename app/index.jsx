import { SafeAreaView, Text, StyleSheet, Pressable, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Artigos em destaque</Text>

                <Text>Artigo 1</Text>
                <Text>Artigo 2</Text>

                <Link href="/login" asChild>
                    <Pressable style={{ padding: 10, backgroundColor: 'blue' }}>
                        <Text style={{ color: 'white' }}>Ir para Login</Text>
                    </Pressable>
                </Link>

                <Link href="/profile" asChild>
                    <Pressable style={{ padding: 10, backgroundColor: 'blue' }}>
                        <Text style={{ color: 'white' }}>Perfil</Text>
                    </Pressable>
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer:{
        flex: 1,
    },
    container: {
        gap: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        margin: 36,
        textAlign: "center",
        fontSize: 24,
    },
});