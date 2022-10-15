import type {Node} from 'react';

import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const FooterComponent: () => Node = () => {
  return (
    <View style={style.containerMain}>
        <TouchableOpacity style={style.buttonCenter}>
            {/* <Image style={style.imgFoot} source={ require('../assets/img/Icon_perfil_menu.png') } /> */}
            <Text style={[style.textFoot, style.buttonCenterActive]} > Inicio </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonCenter}>
            {/* <Image style={style.imgFoot} source={ require('../assets/img/Icon_perfil_menu.png') } /> */}
            <Text style={style.textFoot} > Billetera </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonCenter}>
            {/* <Image style={style.imgFoot} source={ require('../assets/img/Icon_perfil_menu.png') } /> */}
            <Text style={style.textFoot} > Recolecciones </Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.buttonCenter}>
            {/* <Image style={style.imgFoot} source={ require('../assets/img/Icon_perfil_menu.png') } /> */}
            <Text style={style.textFoot} > Perfil </Text>
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