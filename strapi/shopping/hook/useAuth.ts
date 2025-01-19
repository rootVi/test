import {create} from 'zustand';

const useAuthManage = create((set)=>({
    
    jwt:"",
    loader:false,
    
    setLoader:(loader)=>set({loader}),
    setJwt:(jwt)=>set({jwt}),
}))
export default useAuthManage