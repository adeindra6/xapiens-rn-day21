import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonBorderlessComponent = (props) => {
    const {action} = props;

    function actionSubmit() {
        action();
    }

    return(
        <>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => actionSubmit()}>
                    <Text style={styles.label}>{props.label}</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    btn: {
        marginTop: 10,
        marginRight: 10,
        borderWidth: 0,
        borderColor: 'white',
        alignSelf: 'flex-end',
    },

    label: {
        color: '#78746D',
        fontSize: 14,
        textAlign: 'center',
    },
});

export default ButtonBorderlessComponent;