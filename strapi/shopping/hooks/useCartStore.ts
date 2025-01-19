import {gettoCart} from '@/etkinlikler/gettoCart'
import { create } from 'zustand';


const useCartStore = create((set)=>({
   items:[],
   fetchItems:async(userId:any, jwt:any)=>{
         const data = await gettoCart(userId, jwt);
         set({items:data})
   },
}))

export default useCartStore