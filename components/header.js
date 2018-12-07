import React from 'react';
import {View , Text , StyleSheet, Platform} from 'react-native';

const Header = () => {
    return(
        <View style={styles.container}>
        <View style={styles.headerContainer}>
        <Text style={styles.header}>CryptoGazer</Text>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        width : '100%',
        backgroundColor: '#262A4A',
        height : '10%',
    },
    headerContainer:{
        display : "flex",
        alignItems : 'center',
        ...Platform.select({
            ios:{
              marginTop : 50,
              backgroundColor : '#262A4A',
              width : '100%' ,
            },
            android:{
              marginTop : 20,
            },
      
      
          })
    },
    header:{
        fontSize : 20,
        fontWeight : "bold",
        color : "white",
        
    }

})
export default Header;