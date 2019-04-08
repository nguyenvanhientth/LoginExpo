import React, { Component } from 'react';
import { StyleSheet,Text,View,TextInput,TouchableHighlight,Image,ScrollView,TouchableOpacity } from 'react-native';

import env from '../environment/env';

const BASE_URL = env;
const id = require('../../assets/IdIcon.png');
const email = require('../../assets/email.jpg');

export default class FogotPassScreen extends Component {
    static navigationOptions = {
        header: null,
      };
    constructor(props){
        super(props);
        this.state= {
            User : '',
            Email : ''
        }
    }

    _onChaneText = (user) => {
      this.setState({
        User: user,
      })
  }

  _onChaneEmail = (Email) => {
    this.setState({Email})
  }

  _onPressForgot = () => {
    let url = BASE_URL + "Account/ForgotPassword";
            let userName = this.state.User;
            let Email = this.state.Email;
            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
            if (userName === '' ||Email === "") {
                alert('Ban chua nhap day du! ');
            } else if (reg.test(Email) === false)
            {
                alert('Email is not correct!');
                this.setState({Email:''})
            } 
            else {
                this.setState({loading: true});
                fetch(url,{
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                      },
                    body: JSON.stringify({
                        'UserName' : userName,
                        'Email' :Email
                        })
                })
                .then((resJson) => {
                    if (resJson.ok) {
                        alert(`Yeu cau thanh cong! Ban vao email: ${Email} de lay mat khau moi!`);
                        this.setState({loading: false});
                    } else {
                        this.setState({loading: false});
                        alert('Request false! You checking!');
                    }
                })
                .catch((err) => {
                    this.setState({loading: false});
                    console.log(err);
                })
            }

  }

    render(){
        return(
            <ScrollView contentContainerStyle = {{height: '100%',backgroundColor : '#99FFFF'}}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={id}/>
                    <TextInput style={styles.inputs}
                               placeholder= "User Name"
                               keyboardType= "default"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChaneText.bind(this)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={email}/>
                    <TextInput style={styles.inputs}
                               placeholder= "Email"
                               keyboardType= "email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={this._onChaneEmail.bind(this)}
                    />
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this._onPressForgot.bind(this)}>
                    <Text style={styles.loginText}>Request</Text>
                </TouchableHighlight>
                <TouchableOpacity activeOpacity={.5} onPress={() => this.props.navigation.navigate('Login')}>
                        <View >
                        <Text style={styles.cancle}> Go back login! </Text>        
                        </View>      
                    </TouchableOpacity> 
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : '#99FFFF'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:'70%',
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:'70%',
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    },
    cancle:{
      color:'#0404B4',
      backgroundColor:"transparent",
      textAlign: 'center',
    },
  });