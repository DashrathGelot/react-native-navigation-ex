import React from 'react';
import { Button, SafeAreaView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { push } from '../navigations/Root';
import GlobalStyle from './GlobalStyle';

export default (props) => {
    return(
        <SafeAreaView style={GlobalStyle.container}>
            <View>
                <Text>Home Screen</Text>
            </View>
            <Button
                title="Settings"
                onPress={() => push(props.componentId, "Settings")}
            />
            <Icon name="home"/>
        </SafeAreaView>
    )
}