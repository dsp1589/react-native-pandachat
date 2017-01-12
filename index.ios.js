/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Navigator,
  Image,
  TextInput,Button,Alert,Picker,
} from 'react-native';
// import Login from './Login'
export default class mycoolapp extends Component {

renderScene(route,navigator){
  return <route.component navigator={navigator} props={route.passProps}/>
}

  render() {
    return (
      <Navigator initialRoute={{component:Login}} renderScene={this.renderScene}/>
    );
  }
}

const styles = StyleSheet.create({
  circle:{
    width:100,height:100,borderRadius:50,backgroundColor:'white',
    justifyContent:'center',alignItems:'center',
  },
  inner:{
    fontSize:39,
    justifyContent:'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',height:null,width:null,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 50,
  },logoh:{width:100},
  bigbutt:{width:300,height:60,backgroundColor:"rgb(0,235,194)",marginTop:20,borderRadius:20,},
  customButton:{alignItems: 'center',},
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { signinText: 'dspandian@outlook.com' };
  }
  linker(comp){
    this.props.navigator.push({component:comp});
  }
  signin(comp){
    // Works on both iOS and Android
Alert.alert(
  'Sigin',
  'Make oAuth call here and proceed!',
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]
)
  }
  signup(comp){
    this.props.navigator.push({component:comp});
  }
  render() {
    return (
      <View  style={{flex:1,backgroundColor:'white',flexDirection:'column',justifyContent:'center', padding:16,}}>
        <View style={{justifyContent:'center',}}>
          <Image source={require('./panda.png')} style={{borderRadius:20,}} resizeMode='contain' alignSelf='center'></Image>
        </View>

      <View style={{backgroundColor:'white',flexDirection:'row',}}>
        <View style={{flex:.1,}}>
          <TextInput placeholder='Email Id' style={{height:40,}} value={this.state.signinText}></TextInput>
        </View>
        <View style={{flex:.1,}}>
          <TextInput placeholder='Password' style={{height:40,}}></TextInput>
        </View>
      </View>
        <TextInput placeholder='@ Domain' style={{height:40,}}></TextInput>
        <TouchableHighlight onPress={this.signin.bind(this,Register)}>
          <View style={{height:44,backgroundColor:'blue',justifyContent:'center',alignItems:'center',}}><Text style={{color:'white',}}>Sign In</Text></View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.signup.bind(this,Register)}>
          <View style={{marginTop:8,height:44,backgroundColor:'blue',justifyContent:'center',alignItems:'center',}}><Text style={{color:'white',}}>Sign Up</Text></View>
        </TouchableHighlight>
      </View>

    );
  }

}

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = { genderMale: true,gender:'Select Gender' };
  }

  linker(comp){
    this.props.navigator.pop({component:comp})
  }
  enter(){
    Alert.alert('0','0')
  }
  render() {
    return (
      <View  style={{flex:1,backgroundColor:'white',flexDirection:'column',justifyContent:'center', padding:16,}}>
        {/* <StatusBar hidden></StatusBar> */}
        <View style={{justifyContent:'center',}}>
          <Image source={require('./welcome-panda.jpg')}   style={{width:200, height:200, borderRadius:20,}} resizeMode='contain' alignSelf='center'></Image>
        </View>
      <View style={{backgroundColor:'white',flexDirection:'row',}}>
        <View style={{flex:.1,}}>
          <TextInput placeholder='First name' style={{height:40,}}></TextInput>
        </View>
        <View style={{flex:.1,}}>
          <TextInput placeholder='Last name' style={{height:40,}}></TextInput>
        </View>
      </View>
      <View>
        <TextInput placeholder='Email Id' keyboardType='email-address' maxLength={100} style={{height:40,}}></TextInput>
      </View>
      <View>
        <TextInput placeholder='Mobile number' keyboardType='phone-pad' maxLength={20} style={{height:40,}}></TextInput>
      </View>

      {/* <Switch onValueChange={(value) => this.setState({genderMale: value})}
          style={{marginBottom: 10}}
          value={this.state.genderMale}></Switch> */}
          <Picker
  selectedValue={this.state.gender}
  onValueChange={(gender) => this.setState({gender: gender})}>
  <Picker.Item label="Men" value="Men" />
  <Picker.Item label="Women" value="Women" />
</Picker>
      <TouchableHighlight onPress= {() => Alert.alert('Woohoo','Please click ok, to start chat with nearby users.',[
        {text: 'OK', onPress:this.enter},
      ])}>
        <View style={{marginTop:8,height:44,backgroundColor:'blue',justifyContent:'center',alignItems:'center',}}><Text style={{color:'white',}}>Sign Up</Text></View>
      </TouchableHighlight>
      <TouchableHighlight onPress={this.linker.bind(this,Login)} underlayColor='transparent'>
        <View style={{marginTop:8,height:44,backgroundColor:'blue',justifyContent:'center',alignItems:'center',}}><Text style={{color:'white',}}>I have an account ;)</Text></View>
      </TouchableHighlight>
  </View>
    );
  }
}

AppRegistry.registerComponent('mycoolapp', () => mycoolapp);
