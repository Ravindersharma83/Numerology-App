import {Text, View } from 'react-native';
import React, { useState } from 'react';
import { Button, InputField } from '../../Components';
import styles from './styles';


const RegisterScreen = () => {

  const [userLogin, setUserLogin] = useState({
    name:"",
    email: "",
    password: "",
    confirm_password: ""
});
const handleChange = (field:any, value:any) => {
    setUserLogin(prevState => ({
        ...prevState,
        [field]: value
    }));
};

const handleRegister = (): void => {
  console.log('Name---',userLogin.name);
  console.log('Email---',userLogin.email);
  console.log('Password---',userLogin.password);
  console.log('Confirm Password---',userLogin.confirm_password);
  setUserLogin({name:'', email:'', password:'', confirm_password:''})
}


  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>SRNumerology</Text>
      <View style={styles.emailField}>
        <InputField
          placeholder={'Enter Name'}
          value={userLogin.name}
          onChangeText={(text) => handleChange('name', text)}
        />
      </View>

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

        <View style={styles.passwordField}>
        <InputField
          placeholder={'Confirm Password'}
          value={userLogin.confirm_password}
          onChangeText={(text) => handleChange('confirm_password', text)}
            />
        </View>

        <Button btnStyle={styles.loginBtn} btnText={'Register'} onPress={handleRegister} />
    </View>
  )
}

export default RegisterScreen
