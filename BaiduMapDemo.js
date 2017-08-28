/**
 * @author lovebing
 */

import React, {
    Component,
    PropTypes
} from 'react';

import {
    MapView,
    MapTypes,
    Geolocation
} from 'react-native-baidu-map';

import {
    Button,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

import Dimensions from 'Dimensions';

/**
 * #### MapView Props 属性
 | Name                    | Type  | Default  | Extra
 | ----------------------- |:-----:| :-------:| -------
 | zoomControlsVisible     | bool  | true     | Android only 允许缩放
 | trafficEnabled          | bool  | false    | 实时路况
 | baiduHeatMapEnabled     | bool  | false    |
 | mapType                 | number| 1        |
 | zoom                    | number| 10       |
 | center                  | object| null     | {latitude: 0, longitude: 0}
 | marker                  | object| null     | {latitude: 0, longitude: 0, title: ''}
 | markers                 | array | []       | [marker, maker]
 | onMapStatusChangeStart  | func  | undefined| Android only
 | onMapStatusChange       | func  | undefined|
 | onMapStatusChangeFinish | func  | undefined| Android only
 | onMapLoaded             | func  | undefined|
 | onMapClick              | func  | undefined|
 | onMapDoubleClick        | func  | undefined|
 | onMarkerClick           | func  | undefined|
 | onMapPoiClick           | func  | undefined|

 #### MapModule Methods (Deprecated)
 setMarker(double lat, double lng)
 setMapType(int mapType)
 moveToCenter(double lat, double lng, float zoom)
 Promise reverseGeoCode(double lat, double lng)
 Promise reverseGeoCodeGPS(double lat, double lng)
 Promise geocode(String city, String addr),
 Promise getCurrentPosition()

 */
export default class BaiduMapDemo extends Component {

    constructor() {
        super();

        this.state = {
            mayType: 1,
            zoom: 15,
            marker: {
                longitude: 104.068059,
                latitude: 30.54702,
                title: '当前位置'
            },
            // zoomControlsVisible: false,
            center: {
                longitude: 104.068059,
                latitude: 30.54702,
            },
            trafficEnabled: false,
            baiduHeatMapEnabled: false,
            markers: [{
                longitude: 104.06731890369583,
                latitude: 30.539485929060504,
                title: "Window of the world"
            }, {
                longitude: 113.995516,
                latitude: 22.537642,
                title: "我的测试地点"
            }]
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    zoomControlsVisible={this.state.zoomControlsVisible}
                    trafficEnabled={this.state.trafficEnabled}
                    baiduHeatMapEnabled={this.state.baiduHeatMapEnabled}
                    zoom={this.state.zoom}
                    mapType={this.state.mapType}
                    center={this.state.center}
                    marker={this.state.marker}
                    markers={this.state.markers}
                    style={styles.map}
                    onMarkerClick={(e) => {
                        console.warn('onMarkerClick--------', JSON.stringify(e));
                        // Geolocation.reverseGeoCode(e.latitude, e.longitude).then(
                        //     (r) => {
                        //         console.warn('reverseGeoCode----------', JSON.stringify(r));
                        //         this.setState({
                        //             zoom: 15,
                        //             marker: {
                        //                 latitude: e.latitude,
                        //                 longitude: e.longitude,
                        //                 title: '<View><Text>{r.address}</Text></View>'
                        //             },
                        //             center: {
                        //                 latitude: e.latitude,
                        //                 longitude: e.longitude,
                        //                 rand: Math.random()
                        //             }
                        //         });
                        //     }
                        // ).catch(e => {
                        //     console.warn('reverseGeoCode--------err')
                        // })
                    }}
                    moveToCenter={(e) => {
                        console.warn('moveToCenter----------', JSON.stringify(e));
                    }}
                    setMarker={(e) => {
                        console.warn('setMarker', JSON.stringify(e))
                    }}
                    onMapPoiClick={(e) => {
                        console.warn('onMapPoiClick---------------', JSON.stringify(e));
                        Geolocation.reverseGeoCode(e.latitude, e.longitude).then(
                            (r) => {
                                console.warn('reverseGeoCode----------', JSON.stringify(r));
                                this.setState({
                                    zoom: 15,
                                    marker: {
                                        latitude: e.latitude,
                                        longitude: e.longitude,
                                        title: <Text>{r.address}</Text>
                                    },
                                    center: {
                                        latitude: e.latitude,
                                        longitude: e.longitude,
                                        rand: Math.random()
                                    }
                                });
                            }
                        ).catch(e => {
                            console.warn('reverseGeoCode--------err')
                        })
                    }}
                >
                </MapView>

                <View style={styles.row}>
                    <Button title="Normal" onPress={() => {
                        this.setState({
                            mapType: MapTypes.NORMAL
                        });
                    }}/>
                    <Button style={styles.btn} title="Satellite" onPress={() => {
                        this.setState({
                            mapType: MapTypes.SATELLITE
                        });

                    }}/>

                    <Button style={styles.btn} title="Locate" onPress={() => {
                        console.warn('center-----------', this.state.center);
                        Geolocation.getCurrentPosition()
                            .then(data => {
                                console.warn('getCurrentPosition--------------', JSON.stringify(data));
                                this.setState({
                                    zoom: 15,
                                    marker: {
                                        latitude: data.latitude,
                                        longitude: data.longitude,
                                        title: 'Your location'
                                    },
                                    center: {
                                        latitude: data.latitude,
                                        longitude: data.longitude,
                                        rand: Math.random()
                                    }
                                });
                            })
                            .catch(e => {
                                console.warn(e, 'error');
                            })
                    }}/>
                </View>

                <View style={styles.row}>
                    <Button title="Zoom+" onPress={() => {
                        this.setState({
                            zoom: this.state.zoom + 1
                        });
                    }}/>
                    <Button title="Zoom-" onPress={() => {
                        if (this.state.zoom > 0) {
                            this.setState({
                                zoom: this.state.zoom - 1
                            });
                        }

                    }}/>
                </View>

                <View style={styles.row}>
                    <Button title="Traffic" onPress={() => {
                        this.setState({
                            trafficEnabled: !this.state.trafficEnabled
                        });
                    }}/>

                    <Button title="Baidu HeatMap sadfasd" onPress={() => {
                        this.setState({
                            baiduHeatMapEnabled: !this.state.baiduHeatMapEnabled
                        });
                    }}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        height: 40
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
        marginBottom: 16
    }
});
