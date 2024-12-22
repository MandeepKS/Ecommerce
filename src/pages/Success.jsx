import { Link} from 'react-router-dom'
function Success() {
    return (
        <div>
            <div className="section_success">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section_success">
                            <span><i className="bi bi-emoji-sunglasses" style ={{fontSize:'5rem'}}></i></span>
                            <h1 className="section_success_title">Thank you for your order!</h1>
                            <p className="section_success_subtitle">Your order has been successfully placed.</p>
                            <Link to="/" className="cta-button">Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Success;