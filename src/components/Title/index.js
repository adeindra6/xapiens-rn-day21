import React from 'react';
import {Text, StyleSheet, Dimensions} from 'react-native';

const TitleComponent = (props) => {
    return(
        <>
            <Text style={styles.text}>{props.text}</Text>
        </>
    );
};

let {height, width} = Dimensions.get("window");
const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        marginLeft: width * 0.01,
        color: '#333333',
    },
});

export default TitleComponent;