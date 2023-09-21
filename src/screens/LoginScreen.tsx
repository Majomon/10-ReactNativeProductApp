import React from 'react';
import {Text, View, Button} from 'react-native';
import {Background} from '../components/Background';
import {WhiteLogo} from '../components/WhiteLogo';
import {loginStyles} from '../theme/loginTheme';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export const LoginScreen = () => {
  return (
    <>
      <Background />
      <View style={loginStyles.formContainer}>
        <WhiteLogo />
        <Text style={loginStyles.title}>Login</Text>
        <Text style={loginStyles.label}>Email</Text>
        <TextInput
          placeholder="Ingrese su email: "
          placeholderTextColor="rgba(255,255,255,0.4)"
          keyboardType="email-address"
          underlineColorAndroid="white"
          style={loginStyles.inputField}
          selectionColor="white"
          //onchange, value
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={loginStyles.label}>Contraseña: </Text>
        <TextInput
          placeholder="********"
          placeholderTextColor="rgba(255,255,255,0.4)"
          underlineColorAndroid="white"
          style={loginStyles.inputField}
          selectionColor="white"
          //onchange, value
          autoCapitalize="none"
          autoCorrect={false}
        />
        {/* Boton Login */}
        <View style={loginStyles.btnContainer}>
          <TouchableOpacity activeOpacity={0.8} style={loginStyles.boton}>
            <Text style={loginStyles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Crear nueva cuenta */}
        <View style={loginStyles.newUserContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => console.log('Press')}>
            <Text style={loginStyles.btnText}>Nueva cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
