import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
    HelloComponent,
    TitleComponent,
    PlainInputTextComponent,
    ButtonRedirectComponent,
} from '@components';

const WelcomeScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [search, setSearch] = useState(null);

    function searchHandler(text) {
        console.log(`Search Handler: ${text}`);
        setSearch(text);
    }

    return(
        <View>
            <HelloComponent text="Hello," />
            <TitleComponent text="There" />
            <PlainInputTextComponent
                value={search}
                placeholder="Search Course"
                password={false}
                onChangeText={(text) => {
                    searchHandler(text);
                }}
            />
            <View style={styles.bottom}>
                <ButtonRedirectComponent label="Go to Profile" action={() => navigation.navigate('Profile')} />
            </View>
        </View>
    );
};

let {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    bottom: {
        marginTop: height * 0.65,
    },
});

export default WelcomeScreen;