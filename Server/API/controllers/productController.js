import Product from '../Models/Product.js';

// Get products with search, filtering, sorting, and pagination
export const getProducts=async(req,res)=>{
  try{
    let {search,category,minPrice,maxPrice,rating,sortBy,order,page,limit}=req.query;
    let filter={};
    //search by the title or category(case-sensitive)
    if(search){
      filter.$or=[
        {title:{$regex:search,$options:'i'}},
        {category:{$regex:search,$options:'i'}},
      ];
    }
    //Filter by category
    if(category){
      filter.category=category;
    }
    //filter by price
    if(minPrice || maxPrice){
      filter.price={};
      if(minPrice) filter.price.$gte=Number(minPrice);
      if(maxPrice) filter.price.$lte=Number(maxPrice);
    }
    //filter by rating
    if(rating){
      filter.rating={$gte:Number(rating)};
    }
    //sorting logic
    let sortOptions={};
    if(sortBy){
      sortOptions[sortBy]=order==='desc'? -1:1;
    }
    //pagination setup
    const pageNumber=Number(page)||1;
    const pageSize=Number(limit)||10;
    const skip=(pageNumber-1)*pageSize;
    //fetch total count for pagination
    const totalProducts=await Product.countDocuments(filter);
    //Fetch products with applied filters,sorting, and pagination
    const products=await Product.find(filter)
    .sort(sortOptions)
    .skip(skip)
    .limit(pageSize);
  //send response
  res.json({
    totalProducts,
    page:pageNumber,
    totalPages:Math.ceil(totalProducts/pageSize),
    products,
  });
  }catch(error){
    res.status(500).json({message:`Server error`,error:error.message});
  }
}
//Get a Single Product by ID(GET)
export const getProductById=async(req,res)=>{
  try{
    const {id}=req.params;
    const product=await Product.findById(id);
    if(!product){
      return res.status(404).json({message:'Product not found'});
    }
    res.json(product);
  }catch(error){
    res.status(500).json({message:'Server error',error:error.message});
  }
}
//create products
export const createProduct=async(req,res)=>{
  try{
    const {title,image,category,description,price,discountedPrice}=req.body;
    if(!title || !image || !category || !description || !price){
      return res.status(400).json({message:'All required fields must be provided'});
    }
    const newProduct=new Product({
      title,
      image,
      category,
      description,
      price,
      discountedPrice
    });
    await newProduct.save();
    res.status(201).json({message:'Product created successfully ', product:newProduct});
  }catch(error){
    res.status(500).json({message:'Server error',error:error.message});
  }
}
//updateProduct
export const updateProduct=async(req,res)=>{
  try{
    const {id} = req.params;
    const updates=req.body;
    // Check if the product exists
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const updatedProduct = await Product.findByIdAndUpdate(id,updates,{new:true});
    if(!updatedProduct){
      return res.status(404).json({message:'Product not found'});
    }
    res.status(200).json({message:'Product updated successfully',product:updateProduct});
  }catch(error){
    res.status(500).json({message:'Server error',error:error.message});
  }
}
//deleteProduct
export const deleteProduct=async(req,res)=>{
  try{
    const {id}=req.params;
    const deletedProduct=await Product.findByIdAndDelete(id);
    if(!deletedProduct){
      return res.status(404).json({message:'Product not found'});
    }
    res.json({message:'Product deleted successfully'});
  }catch(error){
    res.status(500).json({message:'Server error',error:error.message});
  }
}