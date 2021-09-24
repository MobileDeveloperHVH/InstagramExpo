import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
    },
    safeAreaView: {
        width: '100%',
        height: 60,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        flexDirection: 'row',
    },
    title: {
        fontSize: 30,
        flex: 1,
        paddingLeft: 15,
        alignSelf: 'center',
    },
    buttonWrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonLeft: {
        width: 50,
    },
    buttonRight: {
        width: 50,
    }
});

export default styles;
