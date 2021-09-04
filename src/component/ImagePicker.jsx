import React, { useState, useEffect } from 'react';
import { Text, Image, View, Platform, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

export default function ImagePickerReal({setImage}) {

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',
    }}>
        <View style = {styles.icon}>
            <TouchableOpacity style = {styles.iconClick} onPress={pickImage}>
            <AntDesign name="user" size={70} color= '#FD0039' />
            <Text style = {styles.text}>ADD PROFILE PHOTO</Text>
            </TouchableOpacity>
        </View>
    </View>
      )
}


const styles = StyleSheet.create({
        text : {
            color : '#FD0039',
            paddingTop : 10
        },
        iconClick : {
            justifyContent : 'center',
            alignItems : 'center'
        },
})