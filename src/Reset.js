import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image,Dimensions, View,TouchableOpacity} from 'react-native';
const{height,width} = Dimensions.get('window')



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={{ marginVertical: 12, fontSize: 22, fontWeight: 'bold', color: '#036bfc', textAlign: 'center', }}>
  24*7 HELP
    </Text>
<Image
  source={require('../src/asset/images/Images/bbk.png')}
  style={{ height: height * 0.9, width: width * 1 }}
/>

<View style={{position:'absolute',height:height*0.8,width:width*0.97}}> 
  <Text style={{color:'white',fontSize:20,position:'absolute',fontWeight:'bold'}}>
I don't remember my password

    </Text>
    <Text style={{color:'white',fontSize:20,position:'absolute',fontWeight:'bold',marginTop:70}}>
      DISCLAIMER
    
    </Text>
    <Text style={{color:'white',fontSize:20,position:'absolute',fontWeight:'bold',marginTop:100}}>
      -No one From Home Services will ever call you and ask you to change your password.
    </Text>
    <Text style={{color:'white',fontSize:20,position:'absolute',marginTop:200}}>
    -To Change your password please call on +919125837142 or +919161070600 from your registered mobile number.
    </Text>
    <Text style={{color:'white',fontSize:20,position:'absolute',marginTop:287}}>
   -You will recieve the link by SMS on your registered mobile number.Enter the new password as per choice.
    </Text>

    <TouchableOpacity style={{height:height*0.09,width:width*0.935,position:'absolute',top:height*0.7,backgroundColor:'white',justifyContent:'center',borderRadius:35}}>
                  <Text style={{color:'black',fontSize:28,textAlign:'center'}}>
                    Contact to Support
                  </Text>
              </TouchableOpacity>
</View>
</View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
