import { Product } from "@/constans/type"
import axios from "axios"

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products?populate=*`

export const getSlider = async():Promise<Product[]>=>{
    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;

}