import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetail';

const ResultsList = ({results, header, navigation}) => {
    if(results.length==0){
        return null;
    }

    return (
        <View>
            <Text style={styles.headerStyle}>{header}</Text>
            <FlatList
                horizontal
                data={results}
                showsHorizontalScrollIndicator ={false}
                keyExtractor={(result)=>{return result.id}}
                renderItem={({item}) => {
                    return (
                            <ResultsDetails result={item}/>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default ResultsList;