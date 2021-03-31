import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {
    Header1Component,
} from '@components';

const LoadingScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Welcome');
        }, 1000);
    }, []);

    return(
        <View>
            <Header1Component text="Loading" />
            <ActivityIndicator size="large" color="#00ff00" />
        </View>
    );
};

export default LoadingScreen;