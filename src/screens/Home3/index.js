import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
    ButtonBorderlessComponent,
    Image4Component,
    Header2Component,
    SubtitleComponent,
    ButtonRedirectComponent,
} from '@components';

const Home3Screen = (props) => {
    //console.log({props});
    const {navigation} = props;

    function skip() {
        navigation.navigate('Login');
    }

    function next() {
        navigation.navigate('Login');
    }

    return(
        <View>
            <ButtonBorderlessComponent action={() => skip()} label="Skip" />
            <Image4Component />
            <Header2Component text="Improve your skills" />
            <SubtitleComponent 
                text="Quarantine is the perfect time to spend your" 
            />
            <SubtitleComponent
                text="day learning something new, from anywhere!"
            />
            <View style={styles.buttonnext}>
                <ButtonRedirectComponent action={() => next()} label="Let's Start" />
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

export default Home3Screen;