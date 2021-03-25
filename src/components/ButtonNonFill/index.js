import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const ButtonNonFillComponent = (props) => {
    const {action} = props;

    function actionSubmit() {
        action();
    }

    return(
        <>
            <TouchableOpacity
                style={styles.btn}
                action={() => actionSubmit()}>
                    <Text style={styles.label}>{props.label}</Text>
            </TouchableOpacity>
        </>
    );
};

let {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    btn: {
        marginTop: height * 0.03,
        backgroundColor: 'white',
        height: '15%',
        width: '90%',
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',        
    },

    label: {
        fontSize: 24,
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});

export default ButtonNonFillComponent;