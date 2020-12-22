import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { mainRoot } from '../navigations/Root';
import GlobalStyle from './GlobalStyle';

class Login extends React.Component {
    
    onLogin = () => {
        Navigation.setRoot(mainRoot);
    }

    render() {
        return (
            <SafeAreaView style={GlobalStyle.container}>
                <View>
                    <Text>Login Screen</Text>
                </View>
                <Button
                    title="Login"
                    onPress={this.onLogin}
                />
            </SafeAreaView>
        );
    }
}

export default Login;