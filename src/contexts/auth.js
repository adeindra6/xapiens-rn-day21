import React, {createContext, PureComponent, useContext} from 'react';

const AuthContext = createContext();

class AuthProvider extends PureComponent {
    state = {
        isLogin: false,
        name: '',
        email: '',
        password: '',
    };

    setUser(Name, Email, Password) {
        this.setState({
           isLogin: true,
           name: Name,
           email: Email,
           password: Password, 
        });
    }

    render() {
        const {children} = this.props;
        const {
            isLogin,
            name,
            email,
            password,
        } = this.state;

        const data = {
            isLogin,
            name,
            email,
            password,
            setUser: (name, email, password) => this.setUser(name, email, password),
        };

        return(
            <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
        );
    }
}

const AuthConsumer = () => useContext(AuthContext);

export {AuthContext, AuthConsumer};
export default AuthProvider;