import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity, View, useWindowDimensions} from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import styles from './styles';

const Tabs = [
    {
        key: '1',
        title: 'Hàng đầu',
    },
    {
        key: '2',
        title: 'Tài khoản',
    },
    {
        key: '3',
        title: 'Âm thanh',
    },
    {
        key: '4',
        title: 'Thẻ',
    },
    {
        key: '5',
        title: 'Địa điểm',
    }
];

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: 'white' }} />
);

const renderScene = SceneMap({
    '1': FirstRoute,
    '2': FirstRoute,
    '3': FirstRoute,
    '4': FirstRoute,
    '5': FirstRoute,
});

export default function Search() {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState(Tabs);

    const renderTabBar = props => (
        <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: 'black' }}
            style={{ backgroundColor: 'white' }}
            renderLabel={(props) => (
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                    }}
                >{props.route.title}</Text>
            )}
        />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 15,
                    marginBottom: 15,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        height: 40,
                        borderRadius: 15,
                        flexDirection: 'row',
                        backgroundColor: 'lightgrey',
                        marginLeft: 15,
                    }}
                >
                    <View style={{
                        width: 50,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <AntDesign name="search1" size={20} color="black"/>
                    </View>
                    <TextInput
                        style={{
                            flex: 1,
                            fontSize: 15,
                        }}
                        clearButtonMode="always"
                    />
                </View>
                <TouchableOpacity
                    style={{
                        width: 50,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                        }}
                    >
                        Huỷ
                    </Text>
                </TouchableOpacity>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
            />
        </SafeAreaView>
    )
}
