import React from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 0,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 10
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 5
    },
    coinSymbol: {
        marginTop: 5,
        marginLeft: 25,
        marginRight: 5,
        fontWeight: "bold",  
        color : '#262A4A'        
    },
    coinName: {
        marginTop: 5,
        marginLeft: 0,
        color : '#262A4A'  
    },
   
    coinPrice: {
        marginTop: 5,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold",  
        color : '#262A4A'      
    },
     image: {
        left : 45 ,
        width: 35,
        height: 35,
    },
    moneySymbol: {
        fontWeight: "bold",
        color : '#262A4A'  
    },
    statisticsContainer: {
        display: "flex",
        flexDirection: "row",
      //  borderTopColor: "#FAFAFA",
      //  borderTopWidth: 2,
        padding: 0,
        
        //justifyContent: "flex-end",
        //justifyContent : 'space-around',
    },
    day :{
        marginLeft: 25,
        color : '#262A4A'  
    },
    week : {
        marginRight: 10,
        marginLeft : 'auto',
        color : '#262A4A'  
    },

    percentChangePlus: {
        
        color: "#41A235",
        fontWeight: "bold",
    },
    percentChangeMinus: {
        color: "#D52929",
        fontWeight: "bold",
        
    }
})

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
 
    
    return (
        <View style={styles.container}>
             <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                /> 
                
            <View style={styles.upperRow}>
               
                <Text style={styles.coinSymbol}>{symbol}</Text>
                <Text style={styles.coinName}> |  {coin_name}</Text>
                <Text style={styles.coinPrice}>{price_usd}
                    <Text style={styles.moneySymbol}> $ </Text>
                </Text>
               
            </View>

            <View style={styles.statisticsContainer}>
            

                <Text style={styles.day}>24h:
                     <Text style={percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text style={styles.week}>7d:
                    <Text style={percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }> {percent_change_7d} % </Text>
                </Text>

            </View>

        </View> 
    );
}



export default CoinCard;