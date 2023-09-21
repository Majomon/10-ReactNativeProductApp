import React from 'react';
import {Text, View, Image} from 'react-native';

export const WhiteLogo = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={require('../assets/reactlogowhite.png')}
        style={{
          width: 110,
          height: 100,
        }}
      />
    </View>
  );
};
