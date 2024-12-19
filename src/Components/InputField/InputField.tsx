import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import colors from '../../Styles/colors';

interface InputProps {
  label?: string;
  placeholder?: string;
  onBlur?: any;
  setFieldTouched?: any;
  onChangeText?: (name:any) => void;
  value?: any;
  inputStyle?: any;
  rightIcon?: any;
  onPressRight?: () => void;
  keyboardType?: any;
}

const InputField:React.FC<InputProps> = ({
    label,
    placeholder,
    onChangeText,
    onBlur,
    setFieldTouched,
    value,
    inputStyle = {},
    rightIcon,
    onPressRight,
    ...props
}) => {
  return (
    <ScrollView keyboardShouldPersistTaps='handled' style={{...styles.inputStyle,...inputStyle}}>
      <Text style={styles.labelTextStyle}>{label}</Text>
      <View style={styles.flexView}>
      <TextInput 
          style={styles.inlineStyle} 
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          autoCapitalize='none'
          {...props}
      />
      {!!rightIcon ? 
          <TouchableOpacity activeOpacity={0.8} onPress={onPressRight}>
              <Image style={{tintColor:colors.blackOpacity30}} source={rightIcon}/>
          </TouchableOpacity>
          : null}
      </View>
    </ScrollView>
  );
}

export default InputField;
