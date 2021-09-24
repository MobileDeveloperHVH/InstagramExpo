import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {Ionicons, FontAwesome5} from '@expo/vector-icons';

import styles from './styles';

export default function HeaderBar() {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.safeAreaView}>
                    <Text style={styles.title}>Instagram</Text>

                    <View style={styles.buttonWrap}>
                        <TouchableOpacity style={styles.buttonLeft}>
                            <Ionicons name="add-circle-outline" size={30} color="black"/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonRight}>
                            <FontAwesome5 name="facebook-messenger" size={25} color="black"/>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
}
