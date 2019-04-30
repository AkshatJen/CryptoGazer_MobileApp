    
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

class WatchlistItem extends Component {
    render() {
        return (
            <TouchableOpacity>
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 4 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 5 }}>
                    <Text>24hr</Text>
                    <Text>1wk</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}
export default WatchlistItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});