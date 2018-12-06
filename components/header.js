import React from 'react';
import {View , Text , StyleSheet, Platform} from 'react-native';

const Header = () => {
    return(
        <View style={styles.container}>
        <Text style={styles.header}>CryptoGazer</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        display : "flex",
        alignItems : 'center',
        ...Platform.select({
            ios:{
              marginTop : 50,
            },
            android:{
              marginTop : 20,
            },
      
      
          })
    },
    header:{
        fontSize : 20,
        fontWeight : "bold",
    }

})
export default Header;