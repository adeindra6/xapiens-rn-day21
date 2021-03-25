import React from 'react';
import {Text, StyleSheet} from 'react-native';

const SubtitleComponent = (props) => {
    return(
        <>
            <Text style={styles.text}>{props.text}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        textAlign: 'center',
        color: '#78746D',
    },
});

export default SubtitleComponent;