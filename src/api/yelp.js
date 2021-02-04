import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer KqfbkxcjbMjjqO1g3EfDZvJSpOH_us8PQEOePqD8ymmoskLIaPr8uc2Gmb6Dzg00oZQYG_2Y9BbBTWiS_cDi5j9spYuvLDJYcePw0kEFFvRpE3RyiBXwJnfy_tDoX3Yx'
    }
});

