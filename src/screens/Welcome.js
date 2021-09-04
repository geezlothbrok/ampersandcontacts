import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const Welcome = ({ navigation}) => {
   const handleOnRegister = () => {
        navigation.navigate('Register')
    };

    const handleSignIn = () => {
        navigation.navigate('Login')
    }
    return (
        <View style = { styles.container}>
            <View style = {styles.imageContainer}>
                <Image style = {styles.image} source = {require ('../../assets/hall.jpg')} />
            </View>

            <View style = {styles.textContainer}>
                <Text style = {styles.text} >
                    KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
                </Text>
                <Text style = {styles.textDetails}>
                    Sign in or register with your Ampersand email
                </Text>
            </View>

            <View style = {styles.navContainer}>
                <TouchableOpacity style = {styles.register} onPress = {handleOnRegister}>
                    <Text style = {styles.registerText}>REGISTER</Text>
                    <Text style = {styles.navLine}></Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.signin} onPress = {handleSignIn}>
                    <Text style = {styles.signinText}>SIGN IN</Text>
                    <Text style = {styles.navLine}></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Welcome


const styles = StyleSheet.create ({
        container : {
            flex : 1
        },
        imageContainer : {
            flex : 0.7,
            marginBottom : 20
        },
        textContainer : {
            marginHorizontal : 16,
            flex : 0.2,
            paddingBottom : 50
        },
        text : {
            fontSize : 16,
           
        },
        textDetails : {
            fontSize : 12,
            color : '#A9A9A9',
            paddingTop : 10
        },
        navContainer : {
            flex : 0.1,
            flexDirection : 'row',
            marginHorizontal : 30,
            marginLeft : 50
        },
        signin : {
            marginLeft : 115 
        },
        navLine : {
            backgroundColor : 'red',
            height : 2
        }

})