import { Stack } from 'expo-router';
import { View, StyleSheet } from 'react-native';
import Footer from '../components/footer/footer';

export default function Layout() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingBottom: 60, // Espaço reservado para o Footer não sobrepor o conteúdo
  },
});
