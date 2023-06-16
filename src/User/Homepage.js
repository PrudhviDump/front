import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./NavBar";
import { Sell} from "./Sell";

function HomePage(){
    const [product, setProduct] =useState([]);
    const fetchProduct = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get("https://localhost:7114/api/Product", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(response.data);
          setProduct(response.data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };
useEffect(() => {
    fetchProduct();
},[]);
      return(
        <div>
            <Navbar/>
   {product.map((product, index) =>{
    return(
      <div class="card" style={{width: "18rem"}} key ={product.productId}>
  <img class="card-img-top" src={product.productImageUrl} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{product.productName}</h5>
    <p class="card-text">{product.productDetails}</p>
  </div>
  <div>
    <p>{product.productPrice}</p>
    <p>{product.user}</p>
    </div>
  <div class="card-body">
    <p>Call</p>
    <p>Chat</p>
  </div>
</div>)})}
        </div>
      );
}

export default HomePage;