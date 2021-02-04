import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, Image, StyleSheet} from 'react-native';
import yelp from '../api/yelp'

const SingleRestaurantScreen = ({navigation}) =>  {
    const id = navigation.getParam('id');
    const [businessDetails, setBusinessDetails] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const getResult = async () => {
        try{
            const response = await yelp.get(`/${id}`);
            setBusinessDetails(response.data);
            setErrorMsg('');
        }
        catch(e){
            setErrorMsg('Failed to fetch business details! Please try again.')
        }
    }

    useEffect(()=>{
        getResult(id);
    }, []);

    if(!businessDetails && !errorMsg){
        return null;
    }

    return (
        <View>
            {
            errorMsg?
                <Text>{errorMsg}</Text>
                :
                <FlatList
                    data = {businessDetails.photos}
                    keyExtractor = {(photo)=>{
                        return photo;
                    }}
                    renderItem = {(photo)=>{
                        return <Image style={styles.image} source={{uri: photo.item}}/>
                    }}
                />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height: 150,
        width: 150
    }
});

export default SingleRestaurantScreen;