import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {Feather, FontAwesome, FontAwesome5, SimpleLineIcons} from '@expo/vector-icons';

import styles from './styles';

export default function FeedItemView({myProfile, data}) {
    const feedId = data.id;
    const feedImage = data.image;
    const feedLikes = data.likes ? data.likes : 0;
    const publishDate = data.publishDate;
    const feedTags = data.tags;
    const feedDescription = data.text;

    const ownerId = data.owner.id;
    const ownerFirstName = data.owner.firstName;
    const ownerLastName = data.owner.lastName;
    const ownerPicture = data.owner.picture;
    const ownerTitle = data.owner.title;

    function formatDate(date) {
        if (data) {
            const convert = new Date(date);
            return `${convert.getDate()}-${convert.getMonth() + 1}-${convert.getFullYear()}`;
        }
        return '';
    }

    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.view1}
            >
                <View style={styles.view2}>
                    <Image
                        source={{uri: ownerPicture}}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <Text
                        style={styles.text}
                    >
                        {ownerFirstName} {ownerLastName}
                    </Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                >
                    <SimpleLineIcons name="options" size={20} color="black"/>
                </TouchableOpacity>
            </View>
            <Image
                source={{uri: feedImage}}
                style={styles.image2}
                resizeMode="cover"
            />
            <View
                style={styles.view3}
            >
                <View
                    style={styles.view4}
                >
                    <TouchableOpacity
                        style={styles.button2}
                    >
                        <FontAwesome name="heart" size={24} color="#FC384F"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                    >
                        <FontAwesome5 name="comment" size={24} color="black"/>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button2}
                    >
                        <Feather name="send" size={24} color="black"/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.button2}
                >
                    <Feather name="bookmark" size={24} color="black"/>
                </TouchableOpacity>
            </View>
            <Text
                style={styles.text2}
            >{feedLikes.toString()} lượt thích</Text>
            <Text
                style={styles.text3}
            >{feedDescription}</Text>

            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.button3}
            >
                {
                    myProfile ? (
                        <Image
                            source={{uri: myProfile.picture}}
                            style={styles.image3}
                            resizeMode="cover"
                        />
                    ) : null
                }
                <Text
                    style={styles.text4}
                >Thêm bình luận ...</Text>
            </TouchableOpacity>
            <Text
                style={styles.text5}
            >{formatDate(publishDate)}</Text>
        </View>
    )
}
