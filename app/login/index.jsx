import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView } from "react-native";
import Button from "../../components/button";
import { useState } from "react";
import { Link } from "expo-router";

export default function Login() {
    const [email, setEmail] = useState("");

    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Bem-vindo novamente</Text>

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

                <Link href="/register" asChild>
                    <Pressable style={{ padding: 10, backgroundColor: 'blue' }}>
                        <Text style={{ color: 'white' }}>Cadastro</Text>
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