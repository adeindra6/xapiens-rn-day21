import React from 'react';
import {Image, StyleSheet, Dimensions} from 'react-native';

const Image5Component = () => {
    return(
        <>
            <Image style={styles.image} source={require('@images/image5.png')} />
        </>
    );
};

let {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    image: {
        marginTop: height * 0.1,
        alignSelf: 'center',
    },
});

export default Image5Component;