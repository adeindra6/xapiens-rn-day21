import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header2Component = (props) => {
    return(
        <>
            <Text style={styles.text}>{props.text}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: '#3C3A36',
    },
});

export default Header2Component;