<<<<<<< HEAD
import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { IconLogo } from '../../assets'
import { getData } from '../../utils/localStorage/index.js'

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(async () => {
            const userData = await getData("user");
            if (userData) {
                this.props.navigation.replace('MainApp');
            } else {
                this.props.navigation.navigate('Login');
            }
=======
import { StyleSheet, View } from "react-native";
import React, { Component } from "react";
import { IconLogo } from "../../assets";

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Login');
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
        }, 3000)
    }

    render() {
        return (
            <View style={styles.pages}>
                <IconLogo />
            </View>
<<<<<<< HEAD
        )
=======
        );
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
<<<<<<< HEAD
        alignItems: 'center',
        justifyContent: 'center',
    }
})
=======
        alignItems: "center",
        justifyContent: "center",
    },
});
>>>>>>> 1e328abde00584439eb8728d8300c152e0c68ab9
