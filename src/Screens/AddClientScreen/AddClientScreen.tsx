import { View, Text } from 'react-native';
import React from 'react';
import { InputField } from '../../Components';

const AddClientScreen = () => {
  return (
    <View>
      <InputField label='First Name'/>
      <InputField label='Middle Name'/>
      <InputField label='Last Name'/>
    </View>
  )
}
export default AddClientScreen