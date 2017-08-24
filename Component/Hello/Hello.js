/**
 * Jian Li
 * 2017/8/24 9:02
 * desc:
 **/
import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Hello extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        [1, 2].map((e) => {
            return e
        })
        return (
            <View>
                <Text>组件测试------555---</Text>
            </View>
        );
    }


}
