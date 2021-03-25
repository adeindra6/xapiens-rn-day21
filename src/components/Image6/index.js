import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

const Image6Component = () => {
    return(
        <>
            <Image style={styles.image} source={require('@images/image6.png')} />
        </>
    );
};

let {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    image: {
        marginTop: height * 0.01,
        alignSelf: 'center',
    },
});

export default Image6Component;