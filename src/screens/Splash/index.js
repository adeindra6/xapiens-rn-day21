import React, {useEffect} from 'react';
import {View} from 'react-native';
import {
    Header1Component,
    Image1Component,
} from '@components';
import {useSelector} from 'react-redux';

const SplashScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home1');
        }, 1000);
    }, []);

    return(
        <View>
            <Image1Component />
            <Header1Component text="CodeFactory" />
        </View>
    );
};

export default SplashScreen;