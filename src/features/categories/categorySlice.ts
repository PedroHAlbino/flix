import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface Category{
    id:string,
    name:string,
    description:string,
    is_active:boolean,
    deleted_at:null | string,
    created_at:string,
    updated_at:null | string,
    
}

const category: Category ={
    id:"0001",
    name:"Olive",
    description:"Earum quo at color",
    is_active:true,
    deleted_at:null,
    created_at:"2022-05-15T10:00:00+0000",
    updated_at:"2022-05-15T10:00:00+0000",
}


export const initalState =[
    category, 
        {...category, id:'01212', name:"Peach"},
        {...category, id:'01519', name:"Apple"},
       

];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initalState,
    reducers: {
      createCategory(state, action) {},
      updateCategory(state, action) {},
      deleteCategory(state, action) {},
    },
  })

  export const selectCategories = (state: RootState) => state.categories;

  export default categoriesSlice.reducer;
  