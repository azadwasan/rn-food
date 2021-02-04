import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

const ResultsDetails = ({result, navigation}) => {
    return (
        <TouchableOpacity
            onPress = {() => {
                navigation.navigate('SingleResScr', {id: result.id});
            }}
        >   
        <View style={styles.detailsStyle}>
                <Image  style={styles.imageStyle}
                        source = {{
                            uri: result.image_url
                        }}
                />
                <Text style={styles.restaurantNameStyle}>{result.name}</Text>
                <Text style={styles.ratingReviewStyle}>Rating: {result.rating} stars, {result.review_count} reviews</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    detailsStyle:{
        height: 220,
        width: 230
    },
    imageStyle: {
        width: 210,
        height: 170,
        marginLeft: 15,
        borderRadius: 10,
        shadowColor: 'gray',
        shadowOffset:{width: 10, height: 10}
    },
    restaurantNameStyle:{
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 15
    },
    ratingReviewStyle:{
        marginLeft: 15
    }
});

export default withNavigation(ResultsDetails);