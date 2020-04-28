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
              <Text style={{position:"absolute", fontSize: 30, color: 'white', left:width*0.1,top:height*0.18,fontWeight:'bold',color:'white'}}>ENJOY THE DIFFERENCE</Text>
    </View>
          <View style={{position:'absolute',top:height*0.05,left:width*0.4}}>
             <Image source={require('../src/asset/images/Images/images.jpeg')}
             style={{height:80,width:80}}/>
          </View>

          <View style={{position:'absolute',top:height*0.22,height:height*0.7,width:width*0.935, marginLeft:12,color:'blue'}}>
           
          <TouchableOpacity style={{height:height*0.07,width:width*0.8,position:'absolute',marginTop:height*0.06,backgroundColor:'white',justifyContent:'center',borderRadius:30}}>
                  <Text style={{color:'black',fontSize:28,textAlign:'center',}}>
                    ELECTRICIAN
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{height:height*0.07,width:width*0.8,position:'absolute',marginTop:height*0.20,backgroundColor:'white',justifyContent:'center',borderRadius:30,marginLeft:55}}>
                  <Text style={{color:'black',fontSize:28,textAlign:'center',}}>
                    PLUMBER
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{height:height*0.07,width:width*0.8,position:'absolute',marginTop:height*0.34,backgroundColor:'white',justifyContent:'center',borderRadius:30}}>
                  <Text style={{color:'black',fontSize:28,textAlign:'center',}}>
                    CARPENTER
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{height:height*0.07,width:width*0.8,position:'absolute',marginTop:height*0.48,backgroundColor:'white',justifyContent:'center',borderRadius:30,marginLeft:55}}>
                  <Text style={{color:'black',fontSize:28,textAlign:'center',}}>
                    PAINTER
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{height:height*0.07,width:width*0.8,position:'absolute',marginTop:height*0.62,backgroundColor:'white',justifyContent:'center',borderRadius:30}}>
                  <Text style={{color:'black',fontSize:28,textAlign:'center',}}>
                    HOME DECOR
                  </Text>
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
