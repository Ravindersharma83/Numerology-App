import {Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, InputField } from '../../Components';
import styles from './styles';


const LoginScreen = () => {

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
});
const handleChange = (field:any, value:any) => {
    setUserLogin(prevState => ({
        ...prevState,
        [field]: value
    }));
};

const handleLogin = (): void => {
  console.log('Email---',userLogin.email);
  console.log('Password---',userLogin.password);
  setUserLogin({email:'', password:''})
}


  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>SRNumerology</Text>
      <View style={styles.emailField}>
        <InputField
          placeholder={'Enter Email'}
          keyboardType='email-address'
          value={userLogin.email}
          onChangeText={(text) => handleChange('email', text)}
        />
      </View>

      <View style={styles.passwordField}>
        <InputField
          placeholder={'Enter Password'}
          value={userLogin.password}
          onChangeText={(text) => handleChange('password', text)}
              />
          </View>
          <Button btnStyle={styles.loginBtn} btnText={'Login'} onPress={handleLogin} />
    </View>
  )
}

export default LoginScreen
