import React, {useState} from 'react';
import {View} from 'react-native';
import {
    HelloComponent,
    TitleComponent,
    PlainInputTextComponent,
} from '@components';
import {useSelector} from 'react-redux';

const WelcomeScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [search, setSearch] = useState(null);

    /*
    const {username} = useSelector(state => {
        console.log("Welcome screen");
        console.log({state});
        console.log(state.login.list.data.username);
        return{
            username: state.login.list.data.username,
        };
    });*/

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
        </View>
    );
};

export default WelcomeScreen;