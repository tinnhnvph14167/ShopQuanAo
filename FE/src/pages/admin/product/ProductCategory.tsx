// import React, { useState } from 'react'
// import HeaderHome from '../../../component/HeaderHome'
// import { useParams } from 'react-router-dom'
// import { IProduct } from '../../../types/product'
// type Props = {
//   // products: IProduct[];
// }

// const ProductCategory = (props: Props) => {
//   const { _id } = useParams()
//   //console.log(props.products);
//   const productcategory = props.products;
//   console.log(productcategory);
//   productcategory.filter((category) => category._id.categoryId == _id)
//   return (

//     <div>
//       <HeaderHome />
//       <div className='productCategory'>
//         {productcategory.map((category: any) => {
//           return (
//             <div className='productCategory_key' key={category._id}>
//               <h1>{category.name}</h1>
//               <img className='productCategory_img' src={category.image} alt="" />
//               <h3 className='productCategory_price'>Price: {category.price}</h3>
//               <p className='productCategory_des'>Description: {category.description}</p>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ProductCategory