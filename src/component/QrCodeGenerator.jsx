import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { QRCode } from 'react-native-custom-qr-codes-expo';
import ProfileAccont from './ProfileAccont';
<QRCode content='https://reactnative.com'/>


const QrCodeGenerator = ({navigation}) => {
    const handleOnScan = () => {
        navigation.navigate('Scan')
    }
    return (
        <ScrollView style = { styles.container}>

            
            
            <View style = {styles.textContainer}>
                <View style = {styles.textHead}>
                    <Text style = { {fontWeight : 'bold', fontSize : 15}}>
                        Exchange Contact Information
                    </Text>
                </View>
                <View style = {styles.textDetails}>
                    <Text style = {{fontSize : 14}}>
                        Scan this QR below to share your contacts
                    </Text>
                </View>
            </View>

            <View style = {styles.qrCode}>
            <QRCode />
            </View>

            <View style = {{ flex : 0.2, justifyContent : 'center', alignItems : 'center', marginRight : 70}}>
                <ProfileAccont />
            </View>

            <View style = {{flexDirection : 'row', marginTop : 20, justifyContent : 'center', alignItems : 'center', marginRight : 30}}>
                
                <Text style = {styles.textScan}>Want to add new connection?</Text>
                <View style = { styles.code}>
                    <TouchableOpacity style = {styles.button} onPress = {handleOnScan}>
                        <Text style = {styles.text}>Scan QR</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </ScrollView>
    )
}

export default QrCodeGenerator

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    headerContainer : {
        backgroundColor : '#FD0039',
        flex : 0.2,
        justifyContent : 'center',
        alignItems : 'center'
    },
    image : {
        height : 60,
        width : '55%',
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 55,
        marginTop : 45
    },
    imageContainer : {
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row'
    },
    textContainer : {
        flex : 0.1,
        paddingTop : 50,
        marginLeft : 35
    },
    textHead : {
        paddingBottom : 20
    },
    qrCode : {
        flex : 0.4,
        //justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 30
    },
    button : {
        //borderTopWidth : 1,
        borderWidth : 1,
        height : 35,
        width : 80,
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#BC8677',
        marginLeft : 25,
        borderRadius : 3,
    },
    line : {
        height : 1,
        color : 'red'
    },
    text : {
        color : '#BC8677',
        fontWeight : 'bold'
    }
})
