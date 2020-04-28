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
              <Text style={{position:"absolute", fontSize: 25, color: 'white', left:width*0.06,top:height*0.15,color:'white',fontWeight:'bold'}}>WELCOME TO HOME SERVICES</Text>
    </View>
          <View style={{position:'absolute',top:height*0.05,left:width*0.45}}>
             <Image source={require('../src/asset/images/Images/images.jpeg')}
             style={{height:70,width:70}}/>
          </View>

          <View style={{position:'absolute',top:height*0.25,height:height*0.7,width:width*0.935, marginLeft:12,color:'white'}}>
            <Text style={{fontSize:19,color:'white'}}>Username</Text>
            <TextInput style={{}}
             style={{ borderBottomColor:'white',borderBottomWidth: 0.5, color: 'white',width: width*0.935,color: 'white', fontSize: 20,  }}
             placeholder="Enter Username here"
              />
               <Text style={{fontSize:19,color:'white',marginTop:10}}>Email</Text>
               <TextInput style={{}}
             style={{ borderBottomColor:'white',borderBottomWidth: 0.5, color: 'white',width: width*0.935,color: 'white', fontSize: 20, }}
             placeholder="Enter E-mail here"
             
              />
               <Text style={{fontSize:19,color:'white',marginTop:10}}>Password</Text>
               <TextInput style={{}}
             style={{ borderBottomColor:'white',borderBottomWidth: 0.5, color: 'white',width: width*0.935,color: 'white', fontSize: 20, }}
             placeholder="Enter Password here"
             secureTextEntry={true}
              />
               <Text style={{fontSize:19,color:'white',marginTop:10}}>Phone</Text>
               <TextInput style={{}}
             style={{ borderBottomColor:'white',borderBottomWidth: 0.5, color: 'white',width: width*0.935,color: 'white', fontSize: 20 }}
             placeholder="Enter Mobile no. here"/>

              <TouchableOpacity style={{height:height*0.09,width:width*0.935,borderRadius:35,position:'absolute',marginTop:height*0.5,backgroundColor:'white',justifyContent:'center'}}>
                  <Text style={{color:'black',fontSize:28,textAlign:'center',}}>
                    SIGN UP
                  </Text>
              </TouchableOpacity>
              <Text style={{color:'white',fontSize:22,top:height*0.16,left:width*0.08}}>
                    Don't have an account?
                  </Text>
                  <TouchableOpacity style={{ top:height*0.123}}>
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
