import React from 'react';
import {Text, StyleSheet, View, Image, TextInput, Button} from 'react-native';
class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View>
        <Image
          source={require('./images/Logo.png')}
          style={{height: 40, width: 200,alignSelf:'center',marginTop:10,backgroundColor: 'white',}}
        />
        </View>
        <View>
          <TextInput style={style.red}  placeholder='Enter Your vvvvsName'></TextInput>
          <View>
          
            <TextInput style={style.red} placeholder='Enter Mobile number'></TextInput></View>
          
          <TextInput style={style.red} placeholder='Enter Email Address'></TextInput>
          <TextInput style={style.red} placeholder='City'></TextInput>
        </View>
        <View style={style.btn}>
          <Button title='Register' color='#5E17EB' ></Button>
        </View>
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    
  },
  red:{
margin:8,
borderstyle:'solid',
borderWidth:1,
borderRadius: 3,
padding:10
  },
  btn:{
    justifyContent:'space-around',
Color:'black',
    marginTop:300,
    borderRadius:4,
  }
});
export default App;
