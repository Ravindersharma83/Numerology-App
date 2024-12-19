import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters'
;
import colors from '../../Styles/colors';

const styles = StyleSheet.create({
  btnStyle:{
    height:moderateScale(48),
    // backgroundColor:colors.themeColor,
    borderRadius:moderateScale(4),
    justifyContent:'center',
    alignItems:'center'
},
btnTextStyle:{
    fontSize:scale(12),
    color:colors.white,
    fontWeight:'bold',
    textTransform:'uppercase'
}
});

export default styles;
