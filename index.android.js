/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Alert, AppRegistry, Button, ScrollView, StyleSheet, Text, TextInput, View,} from 'react-native';
import Hello from './Component/Hello/Hello';

import MyDatePicker from './Component/DatePicker/MyDatePicker';
import List from './Component/List/List';
import MyImage from './Component/Image/MyImage';
// import Hello from './Component/Hello'
// import MyKeybord from './Component/MyKeyboard/MyKeybord';
import BaiduMap from './BaiduMapDemo'


export default class native2 extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    _onButtonPress = () => {
        Alert.alert('确认退出吗')
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <View style={styles.container}>
                    {/*<Hello/>*/}
                    {/*<MyDatePicker/>*/}
                    <BaiduMap />
                    {/*<Button accessibilityLabel='accessibilityLabel ' color="red" disabled={false} title="登陆"*/}
                            {/*onPress={this._onButtonPress}/>*/}
                    {/*<Text style={styles.welcome}>*/}
                        {/*Welcome to React Native!*/}
                    {/*</Text>*/}
                    {/*<TextInput/>*/}
                    {/*<Text style={styles.instructions}>*/}
                        {/*To get started, edit index.android.js*/}
                    {/*</Text>*/}
                    {/*<Text style={styles.instructions}>*/}
                        {/*Double tap R on your keyboard to reload,{'\n'}*/}
                        {/*Shake or press menu button for dev menu*/}
                    {/*</Text>*/}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#F5FCFF',
    // },
    // welcome: {
    //     fontSize: 20,
    //     textAlign: 'center',
    //     margin: 10,
    // },
    // instructions: {
    //     textAlign: 'center',
    //     color: '#333333',
    //     marginBottom: 5,
    // },
});

AppRegistry.registerComponent('native2', () => native2);
