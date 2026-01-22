
const { createSlice ,current} = require("@reduxjs/toolkit");

const initialState={
 users:JSON.parse(localStorage.getItem("users")) || [],

}
const Slice=createSlice({
    name:"AddSlice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const product=action.payload;
            
            const data={
                id: action.payload.id,
                title:action.payload.title,
                category:action.payload.category,
                image:action.payload.image,
                price:action.payload.price,
                rating:action.payload.rating,
                count:1,
            }
           const existingData= state.users.find((item)=>item.id===product.id);
            if(existingData){
                existingData.count+=1;
            }
            else{

                state.users.push(data)
                const localData= JSON.stringify(current(state.users));
                localStorage.setItem("users",localData);

            }
            
            
           
            
            
        },
        removeFromCart:(state,action)=>{
            const data= state.users.filter((item)=>{
                return item.id!==action.payload
             })

             state.users=data;
             

        }
    }
})
export const {addToCart,removeFromCart}=Slice.actions;
export default Slice.reducer;