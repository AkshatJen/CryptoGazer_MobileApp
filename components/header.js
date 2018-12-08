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
        ...Platform.select({
            ios:{
                width : '100%',
                backgroundColor: '#262A4A',
                height : '10%',
            }
            ,
            android : {
                width : '100%',
                height : '8%',
                backgroundColor: 'white',
            }
        }),
        
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
              marginTop : 25,
              width : '100%',
            },
      
      
          })
    },
    header:{...Platform.select({
        ios : {
            fontSize : 20,
            fontWeight : "bold",
            color : "white",
        },
        android : {
            fontSize : 20,
            fontWeight : "bold",
            color : "#262A4A",
        }
    }),

        
    }

})
export default Header;