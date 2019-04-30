import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import WatchlistItem from './WatchlistItem';
let { height, width } = Dimensions.get('window');


class Watchlist extends Component {

  /*  constructor() {
        super();
        this.state = {
            layout: {
                height: height,
                width: width
            }
        };
    }

    updated = event => {
    
        this.setState({
            layout: {
                height: event.nativeEvent.layout.height,
                width: event.nativeEvent.layout.width
            }
        });
    }; */

    render() {
        return (
                <View style={{ flex: 1 }} onLayout = {this.updated}>
                  
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            

                            
                            <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                                <Text style={{ color : '#000',fontSize: 24, fontWeight: '700' }}>
                                Best Currency with +1% Ripple
                                </Text>
                               
                                <View style={{ width: width - 40, height: 200, marginTop: 20 , justifyContent : 'center' }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={{ uri: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/ripple_p0xeut.png'}}
                                    />

                                </View>
                            </View>
                            <Text style={{ color : '#000',fontSize: 18, fontWeight: '700', paddingHorizontal: 20 , marginTop: 20}}>
                                Going up
                            </Text>

                            <View style={{ height: 130, marginTop: 5 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={true}
                                >
                                    
                                    <WatchlistItem imageUri={{uri : 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609485/ethereum_nw0chu.png'}}
                                        name="Ethereum"
                                    />

                                    <WatchlistItem imageUri={{}}
                                       name="Ethereum Classic"
                                       />
                                </ScrollView>
                            </View>

                            <Text style={{ color : '#000',fontSize: 18, fontWeight: '700', paddingHorizontal: 20 , marginTop : 20}}>
                                Going Down
                            </Text>

                            <View style={{ height: 130, marginTop: 5 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={true}
                                >
                                    <WatchlistItem imageUri={{uri : 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin_eqld4v.png'}}
                                        name="Bitcoin"
                                    />

                                    <WatchlistItem imageUri={{ uri: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1512510148/miota_2x_xkby9u.png'}}
                                        name="MIOTA"
                                    />
                                    <WatchlistItem imageUri={{uri : 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/neo_fvoo6c.png'}}
                                        name="NEO"
                                    />
                                    
                                    <WatchlistItem imageUri={{uri : 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516327336/bch_2x_hahroi.png'}}
                                        name="Bitcoin Cash"
                                    />
                                    <WatchlistItem imageUri={{uri : 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1512427497/ltc_fjbqjf.png'}}
                                        name="Litecoin"
                                    />
                                   
                                </ScrollView>
                            </View>



                            
                        </View>
                    </ScrollView>

                </View>
         
        );
    }
}
export default Watchlist;

const styles = StyleSheet.create({
  
});
