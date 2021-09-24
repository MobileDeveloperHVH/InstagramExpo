import React from 'react';
import {Image, ScrollView, Text, View, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';

import {SimpleLineIcons, FontAwesome, FontAwesome5, Feather} from '@expo/vector-icons';

import {HeaderBar} from '../../components'

import styles from './styles';

export default function Home() {
    const [headerData, setHeaderData] = React.useState(null);

    function getApi1() {
        fetch('https://www.breakingbadapi.com/api/characters?limit=10')
            .then((response) => response.json())
            .then((data) => {
                setHeaderData(data);
            })
    }

    React.useEffect(() => {
        getApi1();
    }, []);

    return (
        <View style={styles.container}>
            <HeaderBar/>
            <View
                style={styles.wrap_scroll}
            >
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    {
                        headerData && headerData.length > 0 ? (
                            <>
                                {
                                    headerData.map((value, index) => (
                                        <View key={index.toString()}>
                                            <View style={styles.wrap_image}>
                                                <Image
                                                    source={{uri: value.img}}
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
                    keyExtractor={(value) => `${value}`}
                    data={['1', '2', '3', '4']}
                    renderItem={({item, index}) => (
                        <View
                            style={{
                                width: '100%',
                                borderBottomWidth: 1,
                                borderBottomColor: 'lightgrey',
                                paddingBottom: 15,
                                marginBottom: 5,
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    paddingVertical: 10,
                                    alignItems: 'center',
                                }}
                            >
                                <View style={{
                                    flexDirection: 'row',
                                    flex: 1,
                                    alignItems: 'center',
                                }}>
                                    <Image
                                        source={require('../../../assets/icon.png')}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: 15,
                                            marginLeft: 15,
                                        }}
                                        resizeMode="cover"
                                    />
                                    <Text
                                        style={{
                                            fontSize: 14,
                                            marginLeft: 15,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        ssht_up
                                    </Text>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        width: 40,
                                    }}
                                >
                                    <SimpleLineIcons name="options" size={20} color="black"/>
                                </TouchableOpacity>
                            </View>
                            <Image
                                source={require('../../../assets/icon.png')}
                                style={{
                                    width: '100%',
                                    height: 350,
                                }}
                                resizeMode="cover"
                            />
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        flex: 1,
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            height: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <FontAwesome name="heart" size={24} color="#FC384F"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            height: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <FontAwesome5 name="comment" size={24} color="black"/>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            width: 50,
                                            height: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Feather name="send" size={24} color="black"/>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    style={{
                                        width: 50,
                                        height: 50,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Feather name="bookmark" size={24} color="black"/>
                                </TouchableOpacity>
                            </View>
                            <Text
                                style={{
                                    marginLeft: 15,
                                    fontSize: 15,
                                    fontWeight: 'bold'
                                }}
                            >{999} lượt thích</Text>
                            <Text
                                style={{
                                    marginLeft: 15,
                                    fontSize: 15,
                                }}
                            >ssht_up cc .... </Text>

                            <TouchableOpacity
                                activeOpacity={0.9}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginTop: 15,
                                }}
                            >
                                <Image
                                    source={{uri: headerData[0].img}}
                                    style={{
                                        width: 30,
                                        height: 30,
                                        borderRadius: 15,
                                        marginLeft: 15,
                                    }}
                                    resizeMode="cover"
                                />
                                <Text
                                    style={{
                                        marginLeft: 15,
                                        fontSize: 15,
                                        color: 'lightgray'
                                    }}
                                >Thêm bình luận ...</Text>
                            </TouchableOpacity>
                            <Text
                                style={{
                                    marginTop: 15,
                                    marginLeft: 15,
                                    fontSize: 15,
                                    color: 'lightgray'
                                }}
                            >22 tháng 5</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
