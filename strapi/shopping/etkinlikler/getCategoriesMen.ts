import { Category } from "@/constans/type"
import axios from "axios"


export const getCategorieMen = async(url:string):Promise<Category[]>=>{
const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL + url}`

    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;

}