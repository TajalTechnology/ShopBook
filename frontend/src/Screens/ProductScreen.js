import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen(props){
    const product = data.products.find(x => x._id == props.match.params.id);
    return <div> 
        <div>
            <Link to="/" className="back-to-result">Back to Result</Link>
        </div>
        <div className="details">
        <div className="details-image">
        <img  src={product.image}  alt="product" />
        </div>
        <div className="details-info">
            <ul>
                <li>
                    {product.name}
                </li>
                <li>
                    {product.rating} Stars ({product.numReviews} Reviews)
                </li>
                <li>
                    Price:<b>${product.price}</b>
                </li>
                <li>
                    Description:
                    <div>
                        {product.description}
                    </div>
                </li>
            </ul>
        </div>

        <div className="details-action">
            <ul>
                <li>
                    Price:{product.price}
                </li>
                <li>
                    Status:{product.status}
                </li>
                <li>
                    Qty:<select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>

                    </select>
                </li>
                <li>
                    <button className="button">Add to Cart</button>
                </li>
            </ul>
        </div>
        
        </div>
        
    </div>
}
export default ProductScreen;