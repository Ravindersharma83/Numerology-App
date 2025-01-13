import { StyleSheet } from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnStyle:{
    width:windowWidth/2,
    
  }
});
export default styles;