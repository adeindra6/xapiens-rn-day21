import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const ButtonRedirectComponent = (props) => {
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
        backgroundColor: '#E3562A',
        alignSelf: 'center',
        width: '90%',
        height: 65,
        borderRadius: 20,
    },

    label: {
        fontSize: 16,
        color: 'white',
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
    },
});

export default ButtonRedirectComponent;