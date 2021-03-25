import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
    ButtonBorderlessComponent,
    Image2Component,
    Header2Component,
    SubtitleComponent,
    ButtonRedirectComponent,
} from '@components';

const Home1Screen = (props) => {
    //console.log({props});
    const {navigation} = props;

    function skip() {
        navigation.navigate('Login');
    }

    function next() {
        navigation.navigate('Home2');
    }

    return(
        <View>
            <ButtonBorderlessComponent action={() => skip()} label="Skip" />
            <Image2Component />
            <Header2Component text="Learn anytime" />
            <Header2Component text="and anywhere" />
            <SubtitleComponent 
                text="Quarantine is the perfect time to spend your" 
            />
            <SubtitleComponent
                text="day learning something new, from anywhere!"
            />
            <View style={styles.buttonnext}>
                <ButtonRedirectComponent action={() => next()} label="Next" />
            </View>
        </View>
    );
};

let {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    buttonnext: {
        marginTop: height * 0.1,
    },
});

export default Home1Screen;