import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo, SimpleLineIcons, MaterialCommunityIcons, EvilIcons} from '@expo/vector-icons';


const MyProfile = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.profileDetails}>
                <View style = {styles.imageContainer}>
                    <Image style = {styles.profilePic} source = {require('../../assets/JohnnySins.jpeg')}></Image>
                </View>
                <View style = {styles.profileName}>
                    <Text style = {styles.boldName}>Johnny Sins</Text>
                    <Text style = {styles.normalName}>Production Manager</Text>
                </View>

            </View>

            <View style = {styles.socialMedia}>

            <TouchableOpacity><Entypo name="twitter-with-circle" size={35} color="#4C4D4F" /></TouchableOpacity>

            <TouchableOpacity><Entypo name="linkedin-with-circle" size={35} color="#4C4D4F"  style = {{marginLeft : 13}}/></TouchableOpacity>
            </View>

            <View style = {styles.contactsContainer}>

                <View >
                <TouchableOpacity style = {styles.phone}>
                <SimpleLineIcons name="phone" size={19} color="black" />
                <Text style = {styles.contactText}>+233 56789876567</Text>
                </TouchableOpacity>
                </View>

                <View >
                <TouchableOpacity style = {styles.email}>
                <MaterialCommunityIcons name="email-outline" size={19} color="black" />
                <Text style = {styles.contactText}>johnnysins@email.com</Text>
                </TouchableOpacity>
                </View>

                <View >
                <TouchableOpacity style = {styles.location}>
                <EvilIcons name="location" size={20} color="black" />
                <Text style = {styles.contactText}>Atalanta, GA</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default MyProfile

const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 15,
        marginHorizontal : 16
    },
    profileDetails : {
        // flex : 0.3,
        flexDirection : 'row'
    },
    profilePic : {
        height : 80,
        width : 80,
        borderRadius : 50
    },
    profileName : {
        marginLeft : 15,
        paddingTop : 25
    },
    normalName : {
        color : '#A1A1A1'
    },
    socialMedia : {
        // justifyContent : 'space-between',
        flexDirection : 'row',

        marginTop : 25
    },
    phone : {
        flexDirection : 'row',
        //backgroundColor : 'red'
    },
    contactsContainer : {
        flex : 0.3,
        marginTop : 30,
    },
    email : {
        marginVertical : 35,
        flexDirection : 'row'
    },

    location : {
        //marginVertical : 35,
        flexDirection : 'row'
    },
    contactText : {
        marginLeft : 20
    }
})
