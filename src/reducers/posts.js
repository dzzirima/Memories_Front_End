export default  (posts = [],action) =>{

    switch (action.type) {
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);

            // by putting them one on top of the other they perform the same thing
        case 'UPDATE':
        case 'LIKE':
            return posts.map((post) => post._id === action.payload._id ? action.payload._id : post)

        case 'FETCH_ALL':
            return action.payload
        
        case 'CREATE':
            return [...posts,action.payload]
            
        default:
            return posts;
    }
}