import React, {Fragment} from 'react';
import {SafeAreaView,Dimensions,StyleSheet,ScrollView,View,Image,TouchableOpacity,Text,ImageBackground,TextInput,StatusBar,} from 'react-native';
const{height,width} = Dimensions.get('window')
import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {

  return (
    
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
        
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* <Header /> */}

          
    <View>
            <Image
              source={require('../src/asset/images/Images/bbk.png')}
              style={{height:height*1,width:width*1}}/>
              <Image source={require('../src/asset/images/Images/images.jpeg')}
             style={{height:100,width:100}}/>
              <Text style={{position:"absolute", fontSize: 35, color: 'white',fontWeight:'bold', textAlign: 'center',top:height*0.21,color:'white'}}>WELCOME TO HOME SERVICES</Text>
    </View>
          <View style={{position:'absolute',top:height*0.05,left:width*0.38}}>
             <Image source={require('../src/asset/images/Images/images.jpeg')}
             style={{height:100,width:100}}/>
          </View>

          <View style={{position:'absolute',height:100,width:100,top:height*0.4,height:height*0.4,width:width*0.935, marginLeft:12,color:'blue'}}>
            <Text style={{fontSize:19,color:'white'}}>Username</Text>
            <TextInput style={{}}
             style={{ borderBottomColor:'white',borderBottomWidth: 0.5, color: 'white',width: width*0.935, fontSize: 20,  }}
             placeholder="Enter Username here"
              />
               <Text style={{fontSize:19,color:'white',marginTop:10}}>Password</Text>
               <TextInput style={{}}
             style={{ borderBottomColor:'white',borderBottomWidth: 0.5, color: 'white',width: width*0.935, fontSize: 20, }}
             placeholder="Enter Password here"
             secureTextEntry={true}
              />
               <TouchableOpacity style={{position:'absolute',top:height*0.17,right:width*0.018}}>
                  <Text style={{color:'white',fontSize:19}}>
                    Forgot Password
                  </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{height:height*0.09,width:width*0.935,position:'absolute',top:height*0.25,backgroundColor:'white',justifyContent:'center',borderRadius:35}}>
                  <Text style={{color:'#000000',fontSize:28,textAlign:'center'}}>
                    SIGN IN
                  </Text>
              </TouchableOpacity>
              <Text style={{color:'white',fontSize:22,top:height*0.15,left:width*0.08}}>
                    Don't have an account?
                  </Text>
                  <TouchableOpacity style={{ top:height*0.114}}>
                    <Text style={{fontSize: 20, color: 'white',fontWeight: 'bold',left:width*0.67}}>SIGNUP</Text>
                </TouchableOpacity>
          </View>

        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
     backgroundColor: Colors.lighter,
  },
  
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
