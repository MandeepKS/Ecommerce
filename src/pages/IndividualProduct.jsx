import React, {useState, useEffect, useContext} from "react";
import { Link, useParams } from 'react-router-dom';
import { url } from '../components/Api'
import { CartContext } from "../context/CartContext";

// This function fetch the single product item
function IndividualProduct() {
    const { id } = useParams();
    const [data,setData] = useState(null);
    const [isLoading,setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [inputValue] = useState(1); 
    const { addToCart } = useContext(CartContext);
    const newUrl = url + id;
    useEffect(() => {
        async function getData(url) {
            try{
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json.data);
            } catch (error){
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        }
        
        getData(newUrl);
    },[newUrl]);
    
    if (isLoading || !data) {
        return <div>Loading</div>;
    }

    if (isError) {
        return <div>Error</div>;
    }
    let savedMoney = parseFloat(data.price)-parseFloat(data.discountedPrice);
    let reviews = data.reviews;

      const handleAddToCart = () => {
        const productToAdd = {
            id: id,
            title: data.title,
            price: parseFloat(data.price).toFixed(2),
            discountedPrice: parseFloat(data.discountedPrice).toFixed(2),
            image: data.image.url,
            quantity: parseInt(inputValue),
        };
        addToCart(productToAdd); // Pass the full product object to context
      };
    return (      
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5"><img className='img-fluid' src={data.image.url} alt={data.title} />               
                    </div>             
                    <div className="col-md-6">
                    <h4 className="d-flex justify-content-start ms-5 mt-5 fw-bolder" >{data.title}</h4>                
                    {(savedMoney> 0 ?<p className="d-flex justify-content-start ms-5 text-decoration-line-through "> Original Price : $ {data.price}</p> :<p className="d-flex justify-content-start ms-5 fw-bold ">Price : $ {data.price}</p>)}
                    {(savedMoney> 0 ? <p className="d-flex justify-content-start ms-5 fw-bold"> Pay : $ {data.discountedPrice}</p> : '' )}
                    {(savedMoney> 0 ? <p className="d-flex justify-content-start ms-5 ">Save : $ { parseFloat(savedMoney).toFixed(2)}</p> : '' )}              
                    <div className="d-flex justify-content-start ms-5">
                        <Link to={ `/cart/${id}`} state ={{quantity: inputValue}}> <button className="cta-button" onClick={handleAddToCart}>Add to Cart</button> </Link>
                    </div>
                    <h3 className="d-flex justify-content-start ms-5 mt-3">Description</h3>
                    <p  className="d-flex justify-content-start ms-5 mt-2">{data.description}</p>
                    <hr className="d-flex justify-content-start ms-5 "/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <h3 className="d-flex justify-content-start mt-5 ms-5 mb-5">Customer Reviews</h3>
                   {(reviews.length !== 0) ?            
                    reviews.map((el) =>(
                         <div className="mt-5" key={el.id}>                        
                                <h5 className="d-flex justify-content-start ms-5 ">{el.username} <span className=" ms-3 "> <StarRating count={el.rating} /></span></h5>
                                <p className="d-flex justify-content-start ms-5 ">{el.description}</p>                            
                        </div>
                    )) : <h5 className="d-flex justify-content-start ms-5 ">No reviews</h5> }
                    </div>
                </div>
            </div>
        );
}

function StarRating(props){
    const stars = [];
    for(let i = 0; i < props.count; i++){
        stars.push(<i className="bi bi-star-fill fs-5 ms-1" key={i} style={{ color: '#ffc107' }}></i>);
    }
    return <div>{stars}</div>
}
export default IndividualProduct;