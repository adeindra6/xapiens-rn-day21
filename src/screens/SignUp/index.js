import React, {useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import {
    Image6Component,
    Header2Component,
    SubtitleComponent,
    PlainInputTextComponent,
    ButtonRedirectComponent,
} from '@components';
import {useForm} from '@libs';
import {useDispatch} from 'react-redux';
import {Signup} from '@redux/Signup/action';

const SignUpScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [name, setName] = useState(null);
    const [username, setUsername] = useState(null);
    //const [email, setEmail] = useState(null);
    //const [phonenumber, setPhonenumber] = useState(null);
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();

    function nameHandler(text) {
        console.log(`Name Handler: ${text}`);
        setName(text);
    }

    let {Name, verifName} = useForm();
    function validateName(name) {
        let verifiedName = verifName(name);
        return verifiedName;
    }

    function usernameHandler(text) {
        console.log(`Username Handler: ${text}`);
        setUsername(text);
    }

    let {Username, verifUsername} = useForm();
    function validateUsername(username) {
        let verifiedUsername = verifUsername(username);
        return verifiedUsername;
    }

    function passwordHandler(text) {
        console.log(`Password Handler: ${text}`);
        setPassword(text);
    }

    let { Password, verifPassword } = useForm();
    function validatePassword(password) {
        let verifiedPassword = verifPassword(password);
        return verifiedPassword;
    }

    function signup(name, username, password) {
        let email = `${username}@gmail.com`;
        let phonenumber = '08802180301';
        if(validateName(name) && validateUsername(username) && validatePassword(password)) {
            console.log(name);
            console.log(username);
            console.log(email);
            console.log(phonenumber);
            console.log(password);
            dispatch(Signup(name, username, password, phonenumber, email));
            navigation.navigate('Login');
        }
        else {
            Alert.alert("Warning", 
                "1. Nama hanya boleh mengandung alpha-numeric \n" +
                "2. Pastikan Username alpha-numeric dan antara 5-20 karakter \n" +
                "3. Password minimal 6 karakter"
            );
        }
    }

    return(
        <View>
            <Image6Component />
            <Header2Component text="Sign up" />
            <SubtitleComponent text="Create your account" />
            <PlainInputTextComponent
                value={name}
                placeholder="Name"
                password={false}
                onChangeText={(text) => {
                    nameHandler(text);
                }}
            />
            <PlainInputTextComponent
                value={username}
                placeholder="Username"
                password={false}
                onChangeText={(text) => {
                    usernameHandler(text);
                }}
            />
            <PlainInputTextComponent
                value={password}
                placeholder="Password"
                password={true}
                onChangeText={(text) => {
                    passwordHandler(text);
            }}
            />
            <ButtonRedirectComponent action={() => signup(name, username, password)} label="Sign up" />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <SubtitleComponent text="Log in" />
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;