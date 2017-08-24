/**
 * Jian Li
 * 2017/8/24 16:56
 * desc:
 **/
'use strict';
import React, {Component} from 'react';

import {DrawerLayoutAndroid, StyleSheet, Text, View,} from 'react-native';

export default class MyDrawerLayoutAndroid extends Component {
    render() {
        const navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                drawerLockMode='locked-open'
                renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }
}
const styles = StyleSheet.create({});
