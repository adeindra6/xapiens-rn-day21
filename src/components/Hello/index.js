import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';

const HelloComponent = (props) => {
    return(
        <>
            <Text style={styles.text}>{props.text}</Text>
        </>
    );
};

let {height, width} = Dimensions.get("window");
const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        color: '#3C3A36',
        marginLeft: width * 0.01,
    },
});

export default HelloComponent;