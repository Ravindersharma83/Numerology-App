import { StyleSheet } from 'react-native';
import colors from '../../Styles/colors';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    marginHorizontal:moderateScale(20)
  },
  headingText:{
    fontSize:scale(30),
    textAlign:'center',
    marginVertical: moderateScale(20)
  },
  emailField:{
    marginVertical: moderateScale(10)
  },
  passwordField:{
    marginBottom: moderateScale(10)
  },
  loginBtn:{
    marginVertical:moderateVerticalScale(30)
  }
});

export default styles;
