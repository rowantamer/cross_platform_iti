import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.nav}><Text style={styles.paragraph}>Photo</Text></View>
      <ScrollView horizontal>
        <Image source={require('./assets/00be836e744143cce7c7bc2b42894210.jpg')} style={styles.image} />
        <Image source={require('./assets/02f1f0d5ac8c630f40d688b0daab4137.jpg')} style={styles.image} />
        <Image source={require('./assets/0b603aeb3423a17335654bf0030ac919.jpg')} style={styles.image} />
        <Image source={require('./assets/0d79b5faee7281fb6600ac1994923b54.jpg')} style={styles.image} />
        <Image source={require('./assets/3c7a3656b7427c690720934662179d6b.jpg')} style={styles.image} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width:400,
    height: 500,
  },
});
