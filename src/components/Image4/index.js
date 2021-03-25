import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

const Image4Component = () => {
    return(
        <>
            <Image style={styles.image} source={require('@images/image4.png')} />
        </>
    );
};

let {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    image: {
        marginTop: height * 0.2,
        alignSelf: 'center',
    },
});

export default Image4Component;