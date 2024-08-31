import React, {useEffect, useState} from "react";
import axios from "axios";
import API_KEY from '../secrets'
import PostItemAPI from "./PostItemAPI";

function ContentAPIHooks() {

    const [posts, setPosts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
      fetchImages();
    })

    const fetchImages = async () => {
      const response = 
        await axios.get('https://pixabay.com/api/?key=45663614-e00a7fbe886c1af81dbbfb94f&per_page=100'); 
      const fetchedPosts = Array.isArray(response.data.hits) 
          ? response.data.hits 
          : [response.data.hits] 
      setPosts(fetchedPosts);
      setIsLoaded(true);  
    }

    const handelChange = (event) => {
    const inputText = event.target.value.toLowerCase()
    const filteredPosts = posts.filter(post => {
        return post.type.toLowerCase().includes(inputText)
    });
    setFilteredPosts(filteredPosts);
    }

  return (
    <div>
        <input type='text' id="search" name='search' placeholder='Artwork type: photo' onChange={handelChange} />
        {
        filteredPosts.map(post => 
        <form key={post.id}>
          <PostItemAPI apost={post} />
          <hr />
        </form>
      )}
    </div>
  )
}

export default ContentAPIHooks
