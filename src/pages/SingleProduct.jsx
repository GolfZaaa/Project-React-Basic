import {  useParams } from 'react-router-dom';
import products from '../data';
import '../css/ProductDetail.css'
import { NavLink } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name,detail,price,type } = product;
  return (


<div className='top'>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
          <img className="img1" src={image} alt="" height={300} width={300} />
          </div>
          <div className="hover-container">
            <div><img src={image} /></div>
            <div><img src={image} /></div>
            <div><img src={image} /></div>
            <div><img src={image} /></div>
            <div><img src={image} /></div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">{name}</span>
          <span className="product-name">Category : {type}</span>
          <span className="product-price">$ {price}</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star-half-alt" /></span>
            <span>(350 ratings)</span>
          </div>
          <p className="product-description">{detail}</p>
          <div className="btn-groups">
            <button type="button" className="add-cart-btn"><i className="fas fa-shopping-cart" />add to cart</button>
            <button type="button" className="buy-now-btn"><i className="fas fa-wallet" />buy now</button>
          </div>
        </div>
      </div>
    </div>
  </div>



  <NavLink className="nav-link scrollto" to="/CreateComment">
  <button className='buttonsingleproduct' >
    Create Comment
  </button>
  </NavLink>

  <div className="comments-container">
  <h1 className='Commenttext'>Comment</h1>
  <ul id="comments-list" className="comments-list">
    <li>
      <div className="comment-main-level">
        {/* Avatar */}
        <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /> </div>
        {/* Contenedor del Comentario */}
        <div className="comment-box">
          <div className="comment-head">
            <h6 className="comment-name">Agustin Ortiz <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /></h6>
          </div>
          <div className="comment-content">
          The game is being played on YouTube, Facebook, Wikipedia and reddit.
          </div>
        </div>
      </div>
      {/* Respuestas de los comentarios */}
      <ul className="comments-list reply-list">
        <li>
          {/* Avatar */}
          <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt="" /></div>
          {/* Contenedor del Comentario */}
          <div className="comment-box">
            <div className="comment-head">
              <h6 className="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} />  <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /><AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> </a></h6>
            </div>
            <div className="comment-content">
            The game is being played on YouTube, Facebook, Wikipedia and reddit.
            </div>
          </div>
        </li>
        <li>
          {/* Avatar */}
          <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt="" /></div>
          {/* Contenedor del Comentario */}
          <div className="comment-box">
            <div className="comment-head">
              <h6 className="comment-name "><a href="http://creaticode.com/blog">Agustin Ortiz <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /></a></h6>
            </div>
            <div className="comment-content">
            The game is being played on YouTube, Facebook, Wikipedia and reddit.
            </div>
          </div>
        </li>
      </ul>
    </li>
    <li>
      <div className="comment-main-level">
        {/* Avatar */}
        <div className="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt="" /></div>
        {/* Contenedor del Comentario */}
        <div className="comment-box">
          <div className="comment-head">
            <h6 className="comment-name"><a href="http://creaticode.com/blog">Lorena Rojero <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /> <AiFillStar style={{width:15,height:15,color:"#f6ff00"}} /></a></h6>

          </div>
          <div className="comment-content">
          The game is being played on YouTube, Facebook, Wikipedia and reddit.
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>



</div>




  );
};

export default SingleProduct;