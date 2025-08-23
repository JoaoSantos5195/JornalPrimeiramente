import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function Perfil(){
    return(
        <SafeAreaView style={styles.safeContainer}>
          <View>
              <SafeAreaProvider>
                  <SafeAreaView style={styles.container}>
                      <Image
                          style={styles.profileImage}
                          source={require('../../assets/profile-icon.jpg')}
                      />
                      <Text style={styles.profileName}>
                          Nome do Perfil
                      </Text>

                      <Text>
                          Breve descrição do perfil
                      </Text>

                      <Text style={styles.articleTitle}>
                          Artigos publicados
                      </Text>
                      {/* Segunda view pra deixar as imagens lado a lado */}                    
                      <View style={styles.imageRow}> 
                          <Image
                              style={styles.articleImage}
                              source={require('../../assets/newspaper.png')}
                          />
                          <Image
                              style={styles.articleImage}
                              source={require('../../assets/newspaper.png')}
                          />
                      </View>
                  </SafeAreaView>
              </SafeAreaProvider>
          </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
  safeContainer:{
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    margin: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  profileName:{
    fontSize: 24,
    textAlign: "center"
  },
  articleTitle:{
    marginTop: 30,

  },
  imageRow:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  articleImage:{
    width: 50,
    height: 50,
  }

});