import React from 'react';
import { Text, View } from 'react-native';
import GlobalStyle from '../GlobalStyle';

class Screen extends React.Component {
    render() {
        return (
            <View style={GlobalStyle.container}>
                <Text>Screen</Text>
            </View>
        );
    }
}

export default Screen;