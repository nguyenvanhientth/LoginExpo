import React, {Component} from 'react';
import {Platform, Text,StyleSheet, View, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import QRCode from 'react-native-qrcode';

export default function testQR(props)  {
    onPress = () => {
        this.props.navigation.navigate('Scanner');
      }
        return (
            <View style = {styles.container}>
                <TextInput
                style={styles.input}
                onChangeText={(text) => this.setState({text: text})}
                value={this.state.text}
                />
                <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor='purple'
                    fgColor='white'/>
                <TouchableOpacity style={styles.buttonTouchable} onPress = {()=>this.onPress()}>
                  <Text style={styles.buttonText}>OpenScanQR</Text>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    iosStyle: {
        marginTop: Platform.OS === 'ios' ? 50:0,
      },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
      },
      centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
      },
      textBold: {
        fontWeight: '500',
        color: '#000',
      },
      buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
      },
      buttonTouchable: {
        padding: 16,
      },
});