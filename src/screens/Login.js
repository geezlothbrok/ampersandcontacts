import React, {useState}from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Login = ({navigation}) => {
    const [form, setform] = useState({ email: '', password: '' });

    const handleOnChange = (name, text) => {
		setform({ ...form, [name]: text });
	};

    const handleLogIn = () => {
        navigation.navigate('QrCode')
    };

    // const handleResetPassword = () => {
    //     navigation.navigate()
    // }

    return (
        <ScrollView style = {styles.container}>
            <View style = {styles.imageContainer}>
                <Image style = {styles.image} source = {require('../../assets/login.jpeg')}></Image>
            </View>

            <View style = {styles.emailContainer}>
                <Text>Email</Text>
                <TextInput style = {styles.email}
                autoCompleteType = 'email'
                autoCorrect = {false}
                textAlign = 'right'
                autoCapitalize = 'none'
                onChangeText = {(text) => {
                    handleOnChange('email', text);
                }} 
                value ={form.email}>
                </TextInput>
            </View>
            <Text style = { styles.line}></Text>

            <View style = {styles.passwordContainer}>
                <Text>Password</Text>
            <TextInput
				style={styles.passwordInput}
				secureTextEntry={true}
                textAlign = 'right'
				autoCompleteType="password"
				autoCapitalize="none"
				autoCorrect={false}
				onChangeText={(text) => {
                handleOnChange('password', text);
				}}
				value={form.password}
			/>
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.button} onPress = {handleLogIn}>
                    <Text style = {styles.text}>SIGN IN</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.resetContainer}>
                <View>
                    <Text style = {styles.forgot}>Forgot?</Text>
                </View>
                <View style = {styles.reset}>
                    <TouchableOpacity >
                        <Text style = {styles.passText}>Reset Password</Text>
                        <Text style = {styles.passLine}></Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex : 1
    },
    imageContainer : {
        flex : 0.4,
        paddingBottom : 50
    },
    image : {
        height : 200
    },
    emailContainer : {
        flex : 0.2,
        flexDirection : 'row',
        marginHorizontal : 18
    },
    email : {
        paddingLeft : 30,
        flex : 1
    },
    line : {
        backgroundColor : '#E7E7E7',
        height : 1,
        marginHorizontal : 18,
        marginTop : 10
    },
    passwordContainer : {
        flex : 0.2,
        flexDirection : 'row',
        marginHorizontal : 18,
        paddingTop : 20
    },
    passwordInput : {
        paddingLeft : 30,
        flex:1
    },
    buttonContainer : {
        flex : 0.2,
        justifyContent : 'center',
        alignItems : 'center',
        paddingTop : 40,
        marginHorizontal : 18
    },
    button : {
        backgroundColor : '#FD0039',
        height : 50,
        width : '100%',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 3
    },
    text : {
        color : 'white',
        fontWeight : 'bold',
        fontSize : 18,
    },
    resetContainer : {
        flex : 2,
        flexDirection : 'row',
        marginLeft : 18,
        paddingTop : 50
    },
    forgot : {
        fontSize : 15,
        color : '#6E6F71'
    },
    reset : {
        paddingLeft : 6
    },
    passText : {
        fontSize : 15,
        color : '#6E6F71'
    },
    passLine : {
        backgroundColor : '#FD0039',
        height : 2,
        marginTop : 5
    }
})
