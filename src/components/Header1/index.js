import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Header1Component = (props) => {
    return(
        <>
            <Text style={styles.text}>{props.text}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#3C3A36',
    },
});

export default Header1Component;