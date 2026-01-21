const { createSlice,nanoid } = require("@reduxjs/toolkit");
const initialState={
   value:0,
}
const Slice=createSlice({
    name:"NoOfCart",
    initialState,
    reducers:{
        // addCount:(state,action)=>{
            
        //     const data={
        //          id:nanoid(),
        //          name:action.payload
        //     }
        //     state.value.push(data)
        // }
        addCount: (state) => {
          state.value += 1;
}
    }
})
export const{addCount}=Slice.actions
export default Slice.reducer