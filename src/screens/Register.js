import { NavigationContainer } from '@react-navigation/native';
import React,{useState}  from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, ImagePickerIOS, ImageComponent, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ImagePicker from '../component/ImagePicker';

const Register = ({navigation}) => {
  const [image, setImage] = useState(null);

  const handleOnSave = () => {
      navigation.navigte()
  }
    
    return (
        <ScrollView style = {styles.container}>

            <ImageBackground style = {styles.iconContainer} source={{ uri: image }}>

                <ImagePicker setImage={setImage}/>

            </ImageBackground>

                
            <View style = {styles.formsContainer}>
                <View style = {styles.nameContainer}>
                <Text style = {styles.text}>Full Name</Text>
                <TextInput style = {styles.input}
                autoCapitalize = 'words'
                textAlign = 'right'
                autoCorrect = {false}
                autoCompleteType = 'name'></TextInput>
                </View>
                <Text style = { styles.line}></Text>

                <View style = {styles.nameContainer}>
                <Text style = {styles.text}>Email</Text>
                <TextInput style = {styles.input}
                autoCapitalize = 'none'
                textAlign = 'right'
                autoCorrect = {false}
                autoCompleteType = 'email'></TextInput>
                </View>
                <Text style = { styles.line}></Text>

                <View style = {styles.nameContainer}>
                <Text style = {styles.text}>Phone Number</Text>
                <TextInput style = {styles.input} autoCompleteType = 'cc-number' textAlign = 'right'></TextInput>
                </View>
                <Text style = { styles.line}></Text>

                <View style = {styles.nameContainer}>
                <Text style = {styles.text}>Role</Text>
                <TextInput style = {styles.input}
                autoCapitalize = 'words'
                textAlign = 'right'
                autoCorrect = {true}
                autoCompleteType = 'name'></TextInput>
                </View>
                <Text style = { styles.line}></Text>

                <View style = {styles.nameContainer}>
                <Text style = {styles.text}>Twitter</Text>
                <TextInput style = {styles.input}
                autoCapitalize = 'none'
                textAlign = 'right'
                autoCorrect = {false}
                autoCompleteType = 'off'></TextInput>
                </View>
                <Text style = { styles.line}></Text>

                <View style = {styles.nameContainer}>
                <Text style = {styles.text}>Linkedln</Text>
                <TextInput style = {styles.input}
                autoCapitalize = 'none'
                textAlign = 'right'
                autoCorrect = {false}
                autoCompleteType = 'off'></TextInput>
                </View>
                
            </View>

            <View style = {styles.buttonContainer} onPress = {handleOnSave}>
                <TouchableOpacity style = {styles.button} >
                    <Text style = {styles.buttonText}>REGISTER</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default Register

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    iconContainer : {
        flex : 0.3,
        justifyContent : 'center',
        alignItems : 'center',
        paddingVertical : 40,
        backgroundColor : '#FBFBFB'
    },
    iconText : {
        fontSize : 11,
        color : '#FD0039',
        paddingTop : 11
    },
    formsContainer : {
        flex : 0.4,
        marginHorizontal : 20,
        paddingVertical : 20
    },
    nameContainer : {
        flexDirection : 'row'
    },
    line : {
        height : 2,
        backgroundColor : '#D5D8DC',
        marginVertical : 10
    },
    text : {
        fontSize : 15,
        color : '#4B4B4B'
    },
    buttonContainer : {
        flex : 0.1,
        justifyContent : 'center',
        alignItems : 'center',
        marginHorizontal : 20
    },
    button : {
        height : 50,
        width : '100%',
        backgroundColor : '#FD0039',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 3
    },
    buttonText : {
        color : 'white',
        fontSize : 18,
        fontWeight : 'bold'
    },
    input : {
        paddingLeft : 40,
        flex : 1
    }
    
})
