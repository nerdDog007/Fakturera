import { createSlice } from "@reduxjs/toolkit";

const DashSlice = createSlice({
  name: "dash",
  initialState: {
    currenIndex:"Price List",
    items:null,
    article_no:null,
    product_service:null,
    price:null,
    in_price:null,
    unit:null,
    in_stock:null,
    description:null,
    priceList:[],
    field:""
  },
  reducers: {
    setField: (state, action) => {
      state.field = action.payload;
    },
    setPriceList: (state, action) => {
      state.priceList = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currenIndex = action.payload;
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setArticleNo: (state, action) => {
      console.log(state.article_no)
      state.article_no = action.payload;
    },
    setProductService: (state, action) => {
      state.product_service = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setInPrice: (state, action) => {
      state.in_price = action.payload;
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
    },
    setInStock: (state, action) => {
      state.in_stock = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },  
  },
});

export const {  setCurrentIndex,setField ,setPriceList,setItems,setArticleNo,setDescription,setInPrice,setInStock,setPrice,setProductService,setUnit} = DashSlice.actions;

export default DashSlice.reducer;