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


<Text style={{ marginVertical: 12, fontSize: 22, fontWeight: 'bold', color: '#036bfc', textAlign: 'center', }}>
  GET SERVICE 
    </Text>
    
<Image
  source={require('../src/asset/images/Images/bck1.jpg')}
  style={{ height: height * 0.30, width: width * 1 }}
/>
<View style={{position:'absolute',height:height*0.2,width:width*0.4, top:height*0.2,left:width*0.53}}>
  <Image source={require('../src/asset/images/Images/images.jpeg')}
  style={{height:80,width:80,marginLeft:80,marginTop:35}}/>
</View>
<View style={{marginTop:10}}>
<Text style={{fontSize: 17, color: '#036bfc', left: 18, width: width * 1,fontWeight:'bold'}}>SERVICE REQUIRED </Text>
  <TextInput style={{borderBottomColor:'black',borderBottomWidth: 0.5, color: 'black', fontSize: 18,width: width*0.93,marginLeft: 18}}
    placeholder="Enter the Service You Want"
  />

</View>
<View style={{ marginTop: 10 }}>
  <Text style={{
    fontSize: 17, color: '#036bfc', left: 18, width: width * 1,fontWeight:'bold'
  }}>SERVICE LOCATION</Text>
  <TextInput
    style={{ borderBottomColor:'black',borderBottomWidth: 0.5, color: 'black', width: width * 0.93, fontSize: 18,marginLeft: 18 }}
    placeholder="Enter Your Full Address"
  />

</View>
<View style={{ marginTop: 12, flexDirection: 'row',justifyContent:'space-between',paddingLeft: 18,paddingRight: 18,}}>
  <View>
    <Text style={{
      fontSize: 17, color: '#036bfc', fontWeight:'bold'
    }}>PIN CODE</Text>
    <TextInput
      style={{ borderBottomColor:'black',borderBottomWidth: 0.5, color: 'black',width: width*0.465,color: 'black', fontSize: 18,  }}
      placeholder="Enter Area PIN"
    />
  </View>

  <View>
    <Text style={{
      fontSize: 17, color: '#036bfc',fontWeight:'bold'
    }}>PHONE NUMBER</Text>
    <TextInput
      style={{  borderBottomColor:'black',borderBottomWidth: 0.5, color: 'black',width: width*0.465,color: 'black', fontSize :18}}
      placeholder="Enter Your Phone"
    />
  </View>
  
   <View style={{ marginTop: 12, flexDirection: 'row',justifyContent:'space-between',paddingLeft: 18,paddingRight: 18,}}>
 
  </View>


</View>
<View style={{marginTop:12, flexDirection:'row',justifyContent: 'space-between',paddingLeft: 18,paddingRight: 18,}}>
 <View>
    <Text style={{fontSize: 17, color: '#036bfc',fontWeight:'bold'}}>
      SERVICE DATE
    </Text>
    <TextInput
      style={{ borderBottomColor:'black',borderBottomWidth: 0.5, color: 'black',width: width*0.465,color: 'black', fontSize: 18,  }}
      placeholder="Specify Date"
    />
 </View>
 <View>
 <Text style={{fontSize: 17, color: '#036bfc',fontWeight:'bold'}}>
      SERVICE TIME
    </Text>
    <TextInput
      style={{ borderBottomColor:'black',borderBottomWidth: 0.5, color: 'black',width: width*0.465,color: 'black', fontSize: 18,  }}
      placeholder="Specify Time"
    />
 </View>

</View>
<TouchableOpacity style={{height:height*0.08,width:width*0.8,backgroundColor:'#3234a8',marginTop:20,left:width*0.1,borderRadius:35}}
>
<Text style={{fontSize:22,color:'white',paddingLeft: 70,paddingTop:13,}}>REQUEST SERVICE</Text>

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
