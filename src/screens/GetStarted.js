import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const GetStarted = ({ navigation }) => {
    const handleOnPress = () => {
        navigation.navigate('Welcome')
    }
    return (
        <View style = {styles.container}>
            
            <View style = {styles.imageContainer}>
                <Image style = {styles.image} source = {require('../../assets/mono.png')}></Image>
            </View>

            <View style = {styles.nameContainer}>
                <Text style = {styles.ampersand}>
                    AMPERSAND
                </Text>
                <Text style = {styles.contact}>CONTACTS</Text>


                <View style = {styles.linkContainer}>
                    <TouchableOpacity onPress = {handleOnPress}>
                        <Text style = {styles.start}>GET STARTED</Text>
                        <Text style = {styles.startLine}></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default GetStarted


const styles = StyleSheet.create ({
        container : {
            flex : 1,
        },
        imageContainer : {
            flex : 0.2,
            justifyContent : 'center',
            alignItems : 'center',
            marginTop : 80
        },
        image : {
            height : 70,
            width : 250,
        },
        nameContainer : {
            flex : 0.7,
            justifyContent : 'center',
            alignItems : 'center',
        },
        ampersand : {
            fontSize : 20,
            fontWeight : 'bold',
            //fontFamily : 'S'
        },
        contact : {
            fontSize : 20,
            fontWeight : 'bold'
        },
        linkContainer : {
            flex : 0.2,
            justifyContent : 'center',
            alignItems : 'center',
            paddingTop : 100
        },
        start : {
            fontSize : 13,
        },
        startLine : {
            backgroundColor : 'red',
            height : 2
        },
        
    


})