import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

const Image7Component = () => {
    return(
        <>
            <Image style={styles.image} source={require('@images/image7.png')} />
        </>
    );
};

let {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    image: {
        marginTop: height * 0.05,
        alignSelf: 'center',
        borderRadius: 200 / 2,
        height: 200,
        width: 200,
        borderColor: 'blue',
        borderWidth: 3,
        overflow: 'hidden',
    },
});

export default Image7Component;