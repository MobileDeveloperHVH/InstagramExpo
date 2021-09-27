import React from 'react';
import {Image, ScrollView, Text, View, ActivityIndicator, FlatList} from 'react-native';

import {HeaderBar} from '../../components'
import FeedItemView from './FeedItemView';

import styles from './styles';

const app_id = '614f2bb9f3355d367c817fec';

export default function Home() {
    const [allProfile, setAllProfile] = React.useState([]);
    const [feedData, setFeedData] = React.useState([]);

    function getAllProfile() {
        fetch('https://dummyapi.io/data/v1/user?limit=10', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-id': app_id,
            },
        })
            .then((response) => response.json())
            .then((res) => {
                setAllProfile(res.data);
            })
    }

    function getFeedData() {
        fetch('https://dummyapi.io/data/v1/post?limit=10', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'app-id': app_id,
            },
        })
            .then((response) => response.json())
            .then((res) => {
                setFeedData(res.data);
            })
    }

    React.useEffect(() => {
        getAllProfile();
        getFeedData();
    }, []);

    return (
        <View style={styles.container}>
            <HeaderBar/>
            <View
                style={styles.wrap_scroll}
            >
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {
                        allProfile && allProfile.length > 0 ? (
                            <>
                                {
                                    allProfile.map((value, index) => (
                                        <View key={index.toString()}>
                                            <View style={styles.wrap_image}>
                                                <Image
                                                    source={{uri: value.picture}}
                                                    style={styles.image}
                                                    resizeMode="cover"
                                                />
                                            </View>
                                            {
                                                index === 0 ? (
                                                    <Text
                                                        style={styles.title}
                                                    >Tin Của bạn</Text>
                                                ) : null
                                            }
                                        </View>
                                    ))
                                }
                            </>
                        ) : (
                            <View style={styles.swap_indicator}>
                                <ActivityIndicator size="large" style={styles.indicator}/>
                            </View>
                        )
                    }

                </ScrollView>
            </View>
            <View style={{flex: 1}}>
                <FlatList
                    keyExtractor={(value) => `${value.id}`}
                    data={feedData}
                    renderItem={({item, index}) => (
                        <FeedItemView myProfile={allProfile[0]} data={item}/>
                    )}
                />
            </View>
        </View>
    )
}
