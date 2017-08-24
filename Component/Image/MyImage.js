/**
 * Jian Li
 * 2017/8/24 17:46
 * desc:
 **/
'use strict';

import React, {Component} from 'react'
import {Image, View,} from 'react-native'

export default class MyImage extends Component {
    render() {
        const pic = {
            uri: 'http://facebook.github.io/react/img/logo_og.png'
        }
        return (
            <View>
                <Image
                    onLayout={({nativeEvent: {layout: {x, y, width, height}}}) => {
                        console.log(x, y, width, height)
                    }}
                    onLoad={(e) => {
                        console.log('onLoad ', e)
                    }}
                    resizeMode='center'
                    source={pic} style={{height: 100, width: 200}}/>
            </View>
        )
    }
}

