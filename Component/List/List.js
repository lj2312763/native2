/**
 * Jian Li
 * 2017/8/24 17:19
 * desc:
 **/
import React, {Component} from 'react';
import {FlatList, SectionList, Text, View} from 'react-native';

let n = 0;
export default class List extends Component {
    _renderItem = ({item}) => <Text key={++n}>{item.name}{item.time}</Text>

    render() {
        let dataSouce = [];
        for (let i = 0; i < 10; ++i) {
            dataSouce.push({key: 'abc-123' + i, time: new Date().toLocaleDateString()})
        }
        return (
            <View>
                <FlatList
                    data={dataSouce}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
                {/*不同section渲染同组件*/}
                <SectionList
                    renderItem={({item}) => <Text>{item.key}+{item.title}</Text>}
                    renderSectionHeader={({section}) => (<Text>{section.key}</Text>)}
                    sections={
                        [
                            {data: [{title: '1', key: '1'}], key: '第一类sadfsd'},
                            {data: [{title: '1', key: '2'}], key: '第二类'},
                            {data: [{title: '1', key: '3'}], key: '第三类'},
                            {data: [{title: '1', key: '4'}], key: '第四类'},
                            {data: [{title: '1', key: '5'}], key: '第五类'},
                        ]
                    }
                >
                </SectionList>

                {/*不同section渲染不同组件*/}
                <SectionList
                    sections={[
                        {
                            data: [{title: '1', key: ++n}],
                            key: '第一类sadfsd',
                            renderItem: ({item}) => <Text>{JSON.stringify(item)}</Text>
                        },

                        {
                            data: [{title: '1', key: ++n}], key: '第二类',
                            renderItem: ({item}, i) => <Text>{JSON.stringify(item)}----{i}</Text>
                        },
                        {
                            data: [{title: '1', key: ++n}], key: '第三类',
                            renderItem: ({item}) => <Text>{JSON.stringify(item)}</Text>
                        },
                        {
                            data: [{title: '1', key: ++n}], key: '第四类',
                            renderItem: ({item, index}) => <Text>{JSON.stringify(item)}---{index}</Text>
                        },
                        {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        }, {
                            data: [{title: '6551', key: ++n}, {title: '1', key: ++n}], key: '第五类',
                            renderItem: (item) => <Text>{JSON.stringify(item)}{'\n'}</Text>
                        },
                    ]}
                >

                </SectionList>

            </View>
        );
    }
}