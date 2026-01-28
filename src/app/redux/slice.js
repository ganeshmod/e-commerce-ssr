
const { createSlice} = require("@reduxjs/toolkit");

const initialState={
 users: [],

}
const Slice=createSlice({
    name:"AddSlice",
    initialState,
    reducers:{
          hydrateUsers: (state, action) => {
            console.log(state)
      state.users = action.payload;
    },
        addToCart:(state,action)=>{

            console.log(action);
            const product=action.payload;
            
            const data={
                id: action.payload.id,
                title:action.payload.title,
                category:action.payload.category,
                image:action.payload.image,
                price:action.payload.price,
                rating:action.payload.rating,
                count:1,
                itemQuantity:1,
                tax:2,
                

            }
           
           const existingData= state.users.find((item)=>item.id===product.id);
           console.log(existingData)
            if(existingData){
                existingData.count+=1;
            }
            else{

                state.users.push(data)
                

            }
            
            
           
            
            
        },
        removeFromCart:(state,action)=>{
            const data= state.users.filter((item)=>{
                return item.id!==action.payload
             })

             state.users=data;
             

        },
        addQuantity:(state,action)=>{
            console.log(state)
            console.log("action",action)
            const id =action.payload;
            console.log(id)
            
            const existingData= state.users.find((item)=>item.id===id);
            console.log(existingData)
            if(existingData){
                console.log(existingData.itemQuantity)
                existingData.itemQuantity+=1;
               console.log(existingData.itemQuantity)
            }


        },
        reduceQuantity:(state,action)=>{
            console.log(state)
            console.log("action",action)
            const id =action.payload;
            console.log(id)
            
            const existingData= state.users.find((item)=>item.id===id);
            console.log(existingData)
            if(existingData){
                if(existingData.itemQuantity>1){

                    existingData.itemQuantity-=1;
                }
               console.log(existingData.itemQuantity)
            }


        }
        
    }
})
export const {addToCart,removeFromCart,hydrateUsers,addQuantity,reduceQuantity}=Slice.actions;
export default Slice.reducer;