import { Gender } from "@/constans/type"
import axios from "axios"

const Urls = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/genders?populate*`

export const getGender = async():Promise<Gender[]>=>{
    const res = await axios.get(Urls);
    const data = res.data.data;
    return data;

}
