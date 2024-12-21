import React from 'react'
import { useState,useEffect } from 'react'
import { url } from '../components/Api'

export default function Product() {
  const [posts, setPosts] = useState([]);
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

  useEffect( () => {
    async function getData() {
      try {
        // Reset the error state in case there as an error previously
        setIsError(false);
         // Turn on the loading state each time we do an API call
         setIsLoading(true);
         const response = await fetch(url);
         const json = await response.json();

         setPosts(json.data);
         // Clear the loading state once we've successfully got our data
         setIsLoading(false);
      } catch (error) {
          // Clear the loading state if we get an error and then
          setIsLoading(false);
          setIsError(true);
      }
    }
    getData();
  },[]);
  if(isLoading){
    return <div>Loading posts</div>
  }
  if(isError){
    return <div>Error loading data</div>;
  }
  return (
    <div>
        <h1>Our Products</h1>
        <div className="container">
        <div className="row">          
            {posts.map((post) => (
              <div className="col-md-4">
              <div key={post.id}>
                <img className='img-fluid' src={post.image.url} alt={post.title} />
                <h4>{post.title}</h4>
                <p>{post.price}</p>
                </div>
              </div>
            ))}         
        </div>
      </div>
    </div>
  )
}
