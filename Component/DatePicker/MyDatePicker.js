/**
 * Jian Li
 * 2017/8/24 14:46
 * desc:
 **/
import React, {Component} from 'react';
import {DatePickerAndroid, StyleSheet, Text, TouchableHighlight, View,} from 'react-native';

export default class MyDatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // presetDate: new Date(2016, 3, 5),
            // allDate: new Date(2020, 4, 5),
            text: '请选择时间！',
        }
        this.showPicker = this.showPicker.bind(this);
    }

    async showPicker(options) {
        try {
            let newState = {};
            let {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action !== DatePickerAndroid.dismissedAction) {
                let date = new Date(year, month, day);
                newState['text'] = date.toLocaleDateString();
                newState['date'] = new Date(year, month, day + 1);
            }
            this.setState(newState)
        } catch ({code, message}) {
            console.warn('Connot open date picker', message)
        }
    }


    render() {
        let {text} = this.state;
        let _this = this;
        return (
            <View>
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="#a5a5a5"
                    onPress={e => this.showPicker({date: this.state.date, mode: 'spinner'})}>
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableHighlight>
                <Text>请选择时间</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});