import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    wrap_scroll: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingVertical: 15,
    },
    wrap_image: {
        width: 80,
        height: 80,
        borderColor: '#5A5657',
        borderWidth: 1,
        borderRadius: 40,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        color: '#5A5657',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    swap_indicator: {
        width: Dimensions.get('screen').width,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicator: {

    }
});

export default styles;
