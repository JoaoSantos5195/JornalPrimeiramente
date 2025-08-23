import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Cadastro() {
    const [email, setEmail] = useState("");

    return (
    <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo</Text>

            <TextInput
                onChangeText={setEmail}
                value={email}
                style={styles.input}
                placeholder="Digite seu nome"
                keyboardType="name-phone-pad"
            />
            <TextInput
                onChangeText={setEmail}
                value={email}
                style={styles.input}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                secureTextEntry={true}
            />

            <Link href="/login" asChild>
                <Pressable style={{ padding: 10, backgroundColor: 'blue' }}>
                    <Text style={{ color: 'white' }}>Login</Text>
                </Pressable>
            </Link>


            <Link href="/" asChild>
                <Pressable style={{ padding: 10, backgroundColor: 'blue' }}>
                    <Text style={{ color: 'white' }}>Sair</Text>
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
    input: {
        width: "80%",
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        padding: 20,
    },
});