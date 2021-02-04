import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    
    const searchApi = async (term) => {
        console.log('Triggering a search for the term = ' + term);
        try{
            const response = await yelp.get(
                '/search',
                {
                    params:{
                        limit: 50,
                        term,
                        location: 'san jose'
                    }
                }
            );
            setResults(response.data.businesses);
            setErrorMsg('');
        }
        catch(e){
            setErrorMsg('Something went wrong!')
        }
    };
    
    useEffect(()=>{
        searchApi('beef');
    }, []);
    return [searchApi, results, errorMsg];
}