import axios from "axios";
export default class ProductService{
    getProducts(){
        return axios.get("https://localhost:44303/api/product/getall")
    }

    getProductById(productId){
        return axios.get("https://localhost:44303/api/Product/getbyid?id="+productId)
    }
}