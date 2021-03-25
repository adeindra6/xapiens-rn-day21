import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const PlainInputTextComponent = (props) => {
    const {value, onChangeText} = props;

    return(
        <>
            <TextInput
                value={value}
                placeholder={props.placeholder}
                style={styles.textinput}
                secureTextEntry={props.password}
                onChangeText={onChangeText}
            />
        </>
    );
};

const styles = StyleSheet.create({
    textinput: {
        width: '95%',
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: 'white',
    },
});

export default PlainInputTextComponent;