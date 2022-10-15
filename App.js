import type {Node} from 'react';
import React from 'react';
import {Image, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import FooterComponent from './components/FooterComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation }) {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#222' : Colors.lighter,
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      
      <View>
        <Text style={styles.textSubTitle}>Buenas tardes mutantes, </Text>
        <Text style={styles.textTitle}>Jeffrey Saavedra</Text>
      </View>

      <View style={{marginBottom: 15,}}>

        <Image source={{uri: 'https://images.pexels.com/photos/89432/pexels-photo-89432.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb'}} style={styles.backgroundCard} />
        
        <View style={[styles.card, styles.cardCustom]}>
          <View style={{ width: '70%' }}>
            <Text style={styles.text}>Conoce nuestra</Text>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>FUERZA MUTANTE</Text>
          </View>

          <View style={{ width: '29%', alignItems: 'flex-end' }}>
            <MaterialIcons size={40} color="#fff" name='play-circle-fill' />
          </View>
        </View>

      </View>

      <Text>Lo nuevo</Text>

      <View style={{ flex: 1, alignItems: 'center' }}>

        <View style={[styles.card, styles.cardCustomTwo]}>
          <View>
            <Text style={styles.titleCard}>$15.000 en tom noodleshop</Text>
            <Text style={styles.subTitleCard}>Muestra éste cupón y obtén tu beneficio</Text>
          </View>

          <Text style={[styles.subTitleCard, styles.coupon]}>25D1-WLCU-EX9F - UTILIZADO</Text>
          <Text style={styles.subTitleCard}>* Tendrás 60 días para redimirlo - Válido solo presencial</Text>
        </View>


        <TouchableOpacity style={styles.mainButton} onPress={() => navigation.navigate('harvest')}>
          <Text style={styles.mainButtonText}> <MaterialIcons size={15} color="#000" name='refresh' /> Solicitar recolección <MaterialIcons size={15} color="#000" name='arrow-forward' /></Text>
        </TouchableOpacity>

      </View>

      <FooterComponent active={"home"} navigation={navigation} />
    </View>
  );
}

function WalletScreen({navigation }) {

  return(
    <View style={styles.mainContainer}>
      <Text>Billetera</Text>
      <FooterComponent active={"wallet"} navigation={navigation} />
    </View>
  )

}

function HarvestScreen({navigation }) {

  return(
    <View style={styles.mainContainer}>
      <Text>Colecciones</Text>
      <FooterComponent active={"harvest"} navigation={navigation} />
    </View>
  )

}


function ProfileScreen({navigation }) {

  return(
    <View style={styles.mainContainer}>
      <Text>Perfil</Text>
      <FooterComponent active={"profile"} navigation={navigation} />
    </View>
  )

}

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="home"
        >
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="wallet" component={WalletScreen} />
          <Stack.Screen name="harvest" component={HarvestScreen} />
          <Stack.Screen name="profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#222',
    flex: 1,
    padding: 20,
    paddingTop: 30,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textSubTitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#868484',
    paddingBottom: 10,
  },
  card: {
    padding: 25,
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 12,
    backgroundColor: '#000',
    width: '100%',
  },
  cardCustom: {
    flexDirection: 'row', 
    alignItems: 'center', 
    width: '100%', 
    paddingTop: 50,
    paddingBottom: 10,
    backgroundColor: 'transparent'
  },
  cardCustomTwo: {
    paddingRight: 20,
  },
  backgroundCard: {
    width: '100%', 
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 12,
    opacity: 0.5,
    position: 'absolute',
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "left",
  },
  buttonPlay: { 
    alignItems: 'center', 
    textAlign: 'center', 
    lineHeight: 33, 
    backgroundColor: '#ccc',
    width: 40, 
    borderRadius: 150, 
    height: 40,
    color: '#000',
  },
  titleCard: {
    color: '#deff3b',
    textTransform: 'uppercase',
    fontSize: 15,
  },
  subTitleCard: {
    color: '#fff',
    fontSize: 12,
  },
  coupon: {
    fontSize: 18,
    marginTop: 7,
    marginBottom: 7,
  },
  mainButton: {
    backgroundColor: '#deff3b',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 20,
    width: '80%',
    position: 'absolute',
    bottom: 70
  },
  mainButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

export default App;
