import { View, Text, StyleSheet, Pressable } from "react-native";
import Button from "../components/button";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Notícias mais curtidas</Text>

            <Text>Noticia 1</Text>
            <Text>Noticia 2</Text>

        <Link href="/login" asChild>
            <Pressable style={{ padding: 10, backgroundColor: 'blue' }}>
                <Text style={{ color: 'white' }}>Ir para Login</Text>
            </Pressable>
        </Link>

        <Button title="Cadastrar" />
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