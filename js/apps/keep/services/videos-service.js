const KEY ='AIzaSyCULVf89jZc-kB-9GyyILEE6hQkVF5lSNQ'

function getVideos(searchStr) {
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${KEY}&q=${searchStr}`)
        .then(res => (res.json()))
        .then(resData => (resData.items))
        .catch((err) => {
            console.log('there is a problam', err);
        })
}

export const videoService ={
    getVideos
}