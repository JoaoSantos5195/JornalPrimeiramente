import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notícias mais curtidas</Text>

            <Text>Artigo 1</Text>
            <Text>Artigo 2</Text>

            <Link href="/login" asChild>
                <Pressable style={{ padding: 10, backgroundColor: 'blue' }}>
                    <Text style={{ color: 'white' }}>Ir para Login</Text>
                </Pressable>
            </Link>

            <Link href="/perfil" asChild>
                <Pressable style={{ padding: 10, backgroundColor: 'blue' }}>
                    <Text style={{ color: 'white' }}>Perfil</Text>
                </Pressable>
            </Link>


        </View>
    );
}

const styles = StyleSheet.create({
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