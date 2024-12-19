import { Image, StyleSheet, Text, TouchableOpacity,StyleProp, ViewStyle, TextStyle, ImageSourcePropType } from 'react-native';
import React from 'react';
import { moderateScale, scale } from 'react-native-size-matters';
import colors from '../../Styles/colors';
import styles from './styles';

interface ButtonProps {
  btnText: string;
  btnStyle?: any;
  btnTextStyle?: any;
  onPress?: () => void;
  transparent?: boolean;
  img?: ImageSourcePropType;
}

const Button:React.FC<ButtonProps> = ({
    btnText,
    btnStyle={},
    btnTextStyle={},
    onPress,
    transparent,
    img
}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.8}
    style={{...styles.btnStyle,...btnStyle,backgroundColor:transparent ? '#fff' : colors.themeColor}}
    onPress={onPress}
    >
    {!!img ? <Image tintColor={colors.white} source={img}/> : <Text style={{...styles.btnTextStyle,...btnTextStyle}}>{btnText}</Text>}
  </TouchableOpacity>
  );
}

export default Button;
