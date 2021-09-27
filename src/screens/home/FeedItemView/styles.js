import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
        paddingBottom: 15,
        marginBottom: 5,
    },
    view1: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    view2: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    view3: {
        flexDirection: 'row'
    },
    view4: {
        flexDirection: 'row',
        flex: 1,
    },
    image: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 15,
    },
    image2: {
        width: '100%',
        height: 350,
    },
    image3: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginLeft: 15,
    },
    text: {
        fontSize: 14,
        marginLeft: 15,
        fontWeight: 'bold',
    },
    text2: {
        marginLeft: 15,
        fontSize: 15,
        fontWeight: 'bold'
    },
    text3: {
        marginLeft: 15,
        fontSize: 15,
    },
    text4: {
        marginLeft: 15,
        fontSize: 15,
        color: 'lightgray'
    },
    text5: {
        marginTop: 15,
        marginLeft: 15,
        fontSize: 15,
        color: 'lightgray'
    },
    button: {
        width: 40,
    },
    button2: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button3: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
    },
});

export default styles;
