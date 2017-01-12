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
  TextInput,Button,
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
    this.state = { text: 'Useless Placeholder' };
  }
  linker(comp){
    this.props.navigator.push({component:comp});
  }
  signin(comp){
    this.props.navigator.push({component:comp});
  }
  signup(comp){
    this.props.navigator.push({component:comp});
  }
  render() {
    return (
      <Image source={require('./lin.jpg')} style={styles.container}>
      <Image source={require('./logo.png')} resizeMode={'contain'} style={styles.logoh}></Image>
      <TextInput style={{paddingLeft:10,marginLeft:10,marginRight:10,borderRadius:10,height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor:'white'}}
        onChangeText={(text) => this.setState({text})}
        placeholder="User name"/>
        <TextInput style={{paddingLeft:10,marginLeft:10,marginTop:10,marginRight:10,borderRadius:10,height: 40, borderColor: 'gray', borderWidth: 1,backgroundColor:'white'}}
          onChangeText={(text) => this.setState({text})}
           placeholder="Password"/>
           <View style={{marginTop:30, flexDirection: 'row',}}>
           {/* <Button onPress={this.linker.bind(this,Register)} title="Sign in" color="white" style={{background:'red',}}/>
           <Button onPress={this.linker.bind(this,Register)} title="Sign Up" color="white" style={{fontSize:28,fontWeight:400,}}/> */}
           <TouchableHighlight onPress={this.signup.bind(this,Register)}>
           <View style={{backgroundColor:'red',width:160,height:44,justifyContent:'center',}}><Text style={{color:'white',textAlign:'center'}}>Sign In</Text></View>
         </TouchableHighlight>
         <TouchableHighlight  onPress={this.signup.bind(this,Register)}>
         <View style={{backgroundColor:'green',width:160, height:44,justifyContent:'center',}}><Text style={{color:'white',textAlign:'center'}}>Sign Up</Text></View>
       </TouchableHighlight>
         </View>
      </Image>
    );
  }
}

class Register extends Component {
  linker(comp){
    this.props.navigator.pop({component:comp})
  }
  render() {
    return (
      <View><StatusBar hidden></StatusBar>
      <TouchableHighlight onPress={this.linker.bind(this,Login)}>
    <Text>Register page yo</Text>
    </TouchableHighlight>
  </View>
    );
  }
}

AppRegistry.registerComponent('mycoolapp', () => mycoolapp);
