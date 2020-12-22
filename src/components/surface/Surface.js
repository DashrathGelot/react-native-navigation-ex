import React from 'react';
import { Text, View } from 'react-native';
import GlobalStyle from '../GlobalStyle';

class Surface extends React.Component {

    render() {
        return (
            <View style={GlobalStyle.container}>
                <Text>Surface</Text>
            </View>
        );
    }
}

export default Surface;