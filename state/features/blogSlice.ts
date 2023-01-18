import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { blogQueryType, fetchBlogs } from "../actions/actions";

export interface BlogState {
  value: number;
  loading: boolean;
  data: any[];
  lifestyle:any[],
  marketnews:any[],
}
type fetchPostActionType={
    data:any,
  whichCat?:string
  
}
const initialState: BlogState = {
  value: 0,
  loading: true,
  data: [],
  lifestyle:[],
  marketnews:[],
};

export const blogSlice = createSlice({
  name: "blogData",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state, action: PayloadAction<any>) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, {payload,type}: PayloadAction<any>) => {

      const {data,whichCat}=payload as fetchPostActionType;
        state.loading = false;
        if(whichCat){          
          //@ts-ignore
          state[whichCat.replaceAll(" ", "").toLowerCase()]=data
        }
        else{
          state.data=data.items.slice(0,5);
        }
        // if(whichCat==='Lifestyle'){
        //   state.lifestyleBlog = data;
        // }
        // else if (whichCat==='Market News'){
        //   state.marketNewsBlog = data;

        // }
      })
      .addCase(fetchBlogs.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.data = [];
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = blogSlice.actions;

export default blogSlice.reducer;
