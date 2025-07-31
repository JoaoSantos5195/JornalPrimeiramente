import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Footer() {
  const handlePress = (item) => {
    console.log(`Clicou em: ${item}`);
    if (item === 'Home') router.push('/');
    //TODO: FALTA O SEARCH
    if (item === 'Profile') router.push('/profile');
    if (item === 'Liked') router.push('/profile');
    if (item === 'Settings') router.push('/settingsTab');
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => handlePress('Home')}>
        <Image source={require('./home.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('Search')}>
        <Image source={require('./search.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('Profile')}>
        <Image source={require('./profileIcon.png')} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handlePress('Liked')}>
        <Image source={require('./heart.png')} style={styles.icon} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => handlePress('Settings')}>
        <Image source={require('./settings.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#f0f0f0', // Pode mudar a cor do fundo do footer aqui
  },
  icon: {
    width: 30,
    height: 30,
  },
});
