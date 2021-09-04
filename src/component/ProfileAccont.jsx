import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ProfileAccont = () => {
    return (
        <View style = {styles.container}>

            <View style = {styles.profileContainer}>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.image} source = {require('../../assets/JohnnySins.jpeg')}></Image>
                </View>
                <View style = {styles.accountDetails}>
                    <Text style = {styles.boldText}>
                        Jonny Sins
                    </Text>
                    <Text style = {styles.normalText}>
                        Production Manager
                    </Text>
                </View>
            </View>
            
        </View>
    )
}

export default ProfileAccont

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 50
    },
    
    image : {
        height : 60,
        width : 60,
        //marginLeft : 30,
        borderRadius : 100,
        // justifyContent : 'center',
        // alignItems : 'center'
    },
    profileContainer : {
        flexDirection : 'row'
    },
    // accountDetails : {
    //     justifyContent : 'center',
    //     alignItems : 'center',
        
    // },
    boldText : {
        fontSize : 17,
        paddingBottom : 5,
        paddingLeft : 10,
    },
    normalText : {
        paddingLeft : 10,
        fontSize : 17,
        color : '#A0A0A0'
    }
})
