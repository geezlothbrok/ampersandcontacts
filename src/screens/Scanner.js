import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { BarCodeScanner } from 'expo-barcode-scanner';


const Scanner = ({navigation}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }


  return (
    <View style = {styles.container}>

      <View style = {styles.barcodeScanner}>
      <BarCodeScanner onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      style={StyleSheet.absoluteFillObject}/>
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>

      <View style = {styles.shareQrContainer}>

        <View style = {styles.shareText}>

          <Text style = {styles.text}>
            Want to share your contact?
          </Text>

        
      </View>
        <View style = {styles.buttonContainer}>
          <TouchableOpacity style = {styles.button}>
            <Text style = {styles.buttonText}>Send QR</Text>
          </TouchableOpacity>
        </View>

      </View>

      
    </View>
  )
}

export default Scanner

const styles = StyleSheet.create({
  container : {
    flex : 1
  },

  barcodeScanner : {
    flex : 0.8
  },
  shareQrContainer : {
    flex : 0.2,
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    
  },

  buttonContainer : {
    marginLeft : 30
  },

  button : {
    borderWidth : 1,
        height : 35,
        width : 80,
        justifyContent : 'center',
        alignItems : 'center',
        borderColor : '#BC8677',
        borderRadius : 3
  },
  buttonText : {
    color : '#BC8677',
    fontWeight : 'bold'
  }

})
