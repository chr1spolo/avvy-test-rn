import type {Node} from 'react';

import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FooterComponent = ({active, navigation}) => {

    return (
        <View style={style.containerMain}>
            <TouchableOpacity style={style.buttonCenter} onPress={() => {navigation.navigate("home")}}>
                <MaterialIcons name="home" size={20} color={active == "home" ? "#deff3b" : ""} />
                <Text style={[style.textFoot, active == "home" ? style.buttonCenterActive : {}]} > Inicio </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonCenter} onPress={() => {navigation.navigate("wallet")}}>
                <MaterialIcons name="account-balance-wallet" size={20} color={active == "wallet" ? "#deff3b" : ""} />
                <Text style={[style.textFoot, active == "wallet" ? style.buttonCenterActive : {}]} > Billetera </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonCenter} onPress={() => {navigation.navigate("harvest")}}>
                <MaterialIcons name="calendar-today" size={20} color={active == "harvest" ? "#deff3b" : ""} />
                <Text style={[style.textFoot, active == "harvest" ? style.buttonCenterActive : {}]} > Recolecciones </Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonCenter} onPress={() => {navigation.navigate("profile")}}>
                <MaterialIcons name="person-outline" size={20} color={active == "profile" ? "#deff3b" : ""} />
                <Text style={[style.textFoot, active == "profile" ? style.buttonCenterActive : {}]} > Perfil </Text>
            </TouchableOpacity>
        </View>
    )
}

export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const SCREEN_WIDTH = Dimensions.get("window").width;

const style = StyleSheet.create({
  containerMain: {
        flexDirection: 'row',
        backgroundColor: '#000', 
        width: SCREEN_WIDTH,
        paddingTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        position: 'absolute',
        bottom: 0,
    },
    buttonCenter: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
    },
    buttonCenterActive: {
        color: '#deff3b'
    },
    textFoot: {
        marginTop: 2,
        fontSize: 12,
    },
})

export default FooterComponent;