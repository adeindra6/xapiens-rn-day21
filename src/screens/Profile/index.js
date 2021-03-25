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

    const {id, token, role, name, username, phone, email} = useSelector(state => {
        console.log({state});
        return{
            id: state.login.list.data.id,
            token: state.login.list.data.token,
            role: state.login.list.data.role,
            name: state.login.list.data.full_name,
            username: state.login.list.data.username,
            phone: state.login.list.data.phone_number,
            email: state.login.list.data.email,
        };
    });

    function profile() {        
        Alert.alert("Your Profile Detail",
            "Your ID: " + id + "\n" +
            "Your Access Token: \n\n" + token + "\n\n" +
            "Your Role: " + role + "\n" +
            "Full Name: " + name + "\n" +
            "Username: " + username + "\n" +
            "Phone Number: " + phone + "\n" +
            "E-mail: " + email
        );
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