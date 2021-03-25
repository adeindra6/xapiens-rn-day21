import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import {
    Header2Component,
    Image7Component,
    ButtonNonFillComponent,
    SubtitleComponent,
} from '@components';
import {useSelector} from 'react-redux';

const ProfileScreen = (props) => {
    //console.log({props});
    const {navigation} = props;

    const {name, username, phone, email} = useSelector(state => {
        console.log({state});
        return{
            name: state.login.list.data.full_name,
            username: state.login.list.data.username,
            phone: state.login.list.data.phone_number,
            email: state.login.list.data.email,
        };
    });

    function profile() {        
        Alert.alert("Your Profile", "This is your profile page");
    }

    function product() {
        navigation.navigate('Product');
    }

    return(
        <View>
            <Header2Component text="Profile" />
            <Image7Component />
            <ButtonNonFillComponent label="My Profile" action={() => profile()} />
            <ButtonNonFillComponent label="My Product" action={() => product()} />
            <SubtitleComponent text={`Full Name: ${name}`} />
            <SubtitleComponent text={`Username: ${username}`} />
            <SubtitleComponent text={`Phone Number: ${phone}`} />
            <SubtitleComponent text={`E-mail: ${email}`} />
        </View>
    );
};

export default ProfileScreen;