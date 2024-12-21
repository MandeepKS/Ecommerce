import React, { useEffect, useState }  from 'react'
import { url } from '../components/Api'
import { Link} from 'react-router-dom'
function Home() {
  const [posts,setPosts] = useState([]);
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getData() {
      try{
        // Reset the error state in case there as an error previously
        setIsError(false);
        // Turn on the loading state each time we do an API call
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
      
        setPosts(json.data);
         // Clear the loading state once we've successfully got our data
        setIsLoading(false);
      } catch (error){
        // Clear the loading state if we get an error and then
        // set our error state to true
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
        <div className="section_hero">
          <div className="container">
            <h1 className="hero-title"> Welcome to Our E-Commerce Store!</h1>
            <p className="hero-subtitle"> Find the best deals on the latest products.</p>
            <a href="#section_products" className="cta-button">Shop Now</a>
          </div> 
          </div> 
        <div className="section_products"  id="section_products">
          <div className="container">
            <div className="row">
              {posts.map((post) => {
                let sale = parseFloat(post.price) - parseFloat(post.discountedPrice);            
                return (
                <div className="col-md-4 mb-4" key={post.id}>                   
                  <Link to={`/product/${post.id}`} style={{ textDecoration: 'none' }}>
                    <div className="card h-100">
                      <img className="card-img-top img-fluid" src={post.image.url} alt={post.title}  style={{ maxHeight: '250px', objectFit: 'cover' }}/>
                      {(sale > 0) ? <span className="sale-badge">SALE</span>: <span/>}
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">$ {post.price}</p>                
                        </div>                      
                    </div>
                  </Link>
                </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  )
}
export default Home;