import { SafeAreaView, Text, StyleSheet, Pressable, View, ActivityIndicator, Button } from "react-native";
import { Link } from "expo-router";
import React, { useState, useEffect } from 'react';
import * as DocumentPicker from "expo-document-picker";


export default function Home() {
    const [selectedPdf, setselectedPdf] = useState(null); //cria um async do estado de selecao do pdf
    
    async function pickDocument(){ //abre o pdf picker
        let result = await DocumentPicker.getDocumentAsync({
            type: "application/pdf",
            copyToCacheDirectory: true
        })

        if(result.assets && result.assets[0].uri){ //pega apenas o primeiro pdf selecionado, por isso posicao 0
            console.log(result.assets[0].uri);
            setselectedPdf(result.assets[0].uri); //passa o pdf para a funcao useState que atualiza o app
        }//AINDA NAO DÁ PRA VISUALIZAR O ARQUIVO!!!
    }
    
    
    return (
        <SafeAreaView style={styles.safeContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Artigos em destaque</Text>

                <Text>Artigo 1</Text>
                <Text>Artigo 2</Text>

                <Button title="Escolher PDF" onPress={pickDocument}/>

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
