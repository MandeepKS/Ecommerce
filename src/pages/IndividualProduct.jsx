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
    const [inputValue, setInputValue] = useState(1); 
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
    const handleInputValue = (event) => {
        setInputValue(event.target.value);    
      };
      const handleAddToCart = () => {
        const productToAdd = {
            id: id,
            title: data.title,
            price: parseFloat(data.price),
            discountedPrice: parseFloat(data.discountedPrice),
            image: data.image.url,
            quantity: parseInt(inputValue),
        };
        addToCart(productToAdd); // Pass the full product object to context
      };
    return (
        <div><h1>Single Product Page</h1>
            <p>ID : {id}</p>
        <div className="container">
            <div className="row">
                <div className="col-md-6"><img className='img-fluid' src={data.image.url} alt={data.title} />               
                <h3 className="d-flex justify-content-start mt-5 mb-5">Reviews</h3>
                   {(reviews.length !== 0) ?            
                    reviews.map((el) =>(
                         <div className="mt-5">
                            <div key={el.id}>
                                <h5 className="d-flex justify-content-start ms-5 ">{el.username} <span className=" ms-3 "> <StarRating count={el.rating} /></span></h5>
                                <p className="d-flex justify-content-start ms-5 ">{el.description}</p>
                            </div>
                        </div>
                    )) : <h5 className="d-flex justify-content-start ms-5 ">No reviews</h5> }
                </div>             
                <div className="col-md-6">
                <h4 className="d-flex justify-content-start ms-5 mt-5" >{data.title}</h4>                
                <p className="d-flex justify-content-start ms-5 "> Original Price : $ {data.price}</p>
                <p className="d-flex justify-content-start ms-5 ">Discount : $ {data.discountedPrice}</p>
                <p className="d-flex justify-content-start ms-5 ">You Saved : $ {savedMoney} </p>               
                <div className="d-flex justify-content-start ms-5">
                    <span className="d-flex align-items-center "><input type="number" value={inputValue} min="1" max="10" step="1" onChange={handleInputValue} style={{ width: '60px', textAlign: 'center' }}/></span>
                    <Link to={ `/cart/${id}`} state ={{quantity: inputValue}}> <button className="btn btn-primary ms-3" onClick={handleAddToCart}>Add to Cart</button> </Link>
                </div>
                <h3 className="d-flex justify-content-start ms-5 mt-5">Description</h3>
                <p  className="d-flex justify-content-start ms-5 mt-2">{data.description}</p>
                <hr className="d-flex justify-content-start ms-5 "/>
                </div>
            </div>
        </div>
        </div>);
}

function StarRating(props){
    const stars = [];
    for(let i = 0; i < props.count; i++){
        stars.push(<i className="bi bi-star-fill fs-5 ms-1" style={{ color: '#ffc107' }}></i>);
    }
    return <div>{stars}</div>
}
export default IndividualProduct;