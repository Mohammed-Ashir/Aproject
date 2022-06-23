import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
class Home extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <Image
          source={require('./images/Logo.png')}
          style={{height: 40, width: 200, alignSelf: 'center'}}
        />
      </View>
    );
  }
}
const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
     flex: 1,
  },
});
export default Home