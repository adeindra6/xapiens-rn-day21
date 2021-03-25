import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert} from 'react-native';
import {
    Image5Component,
    Header2Component,
    SubtitleComponent,
    PlainInputTextComponent,
    ButtonRedirectComponent,
} from '@components';
import {useForm} from '@libs';
import {useDispatch} from 'react-redux';
import {Login} from '@redux/Login/action';
import {setLogin, setToken, setUsername} from '@redux/Global/action';

const LoginScreen = (props) => {
    //console.log({props});
    const {navigation} = props;
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const dispatch = useDispatch();

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

    function login(username, password) {
        if(validateUsername(username) && validatePassword(password)) {
            console.log(username);
            console.log(password);
            dispatch(Login(username, password));
            dispatch(setLogin(true));            
            navigation.navigate('Welcome');            
        }
        else {
            Alert.alert("Warning", "Pastikan Username alphanumeric dan antara 5-20 karakter dan Password minimal 6 karakter");
        }
    }

    return(
        <View>
            <Image5Component />
            <Header2Component text="Log in" />
            <SubtitleComponent text="Login with social networks" />
            <View style={styles.space}>
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
                <Text>{' '}</Text>
                <TouchableOpacity>
                    <SubtitleComponent text="Forgot Password?" />
                </TouchableOpacity>
                <Text>{' '}</Text>
                <ButtonRedirectComponent action={() => login(username, password)} label="Log in" />
                <Text>{' '}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <SubtitleComponent text="Sign Up" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

let {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    space: {
        marginTop: height * 0.01,
    },
});

export default LoginScreen;