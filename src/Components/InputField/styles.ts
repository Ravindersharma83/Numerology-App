import { StyleSheet } from 'react-native';
import colors from '../../Styles/colors';
import { moderateVerticalScale, scale } from 'react-native-size-matters';

const styles = StyleSheet.create({
  inputStyle:{
    borderBottomWidth:1,
    borderBottomColor:colors.inputBorderBottomColor,
    borderRadius:scale(4),
},
labelTextStyle:{
    fontSize:scale(14),
    color:colors.blackOpacity50
},
flexView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignContent:'center'
},
inlineStyle:{
    paddingVertical:moderateVerticalScale(8),
    fontSize:scale(16),
    color:colors.blackOpacity80,
    flex:1
},
});

export default styles;
