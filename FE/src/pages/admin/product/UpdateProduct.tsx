import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect } from 'react'
import SideMenu from '../../../component/SideMenu'
import { IProduct } from '../../../types/product'

type Props = {
  products: IProduct[],
  onUpdate: (products: IProduct) => void
}

const UpdateProduct = (props: Props) => {
  const navigate = useNavigate()
  const { _id } = useParams()

  const { register, handleSubmit, reset } = useForm()
  useEffect(() => {
    const currrentProduct = props.products.find((products: any) => products._id === _id)
    reset(currrentProduct);

  }, [props])
  const onHandleSubmit = (data: any) => {
    props.onUpdate(data);
    navigate("/admin/products")
  }
  return (
    <div>
      <div className='SideMenu'>
        <SideMenu/>
        <form className='form' action="" onSubmit={handleSubmit(onHandleSubmit)}>

          <label htmlFor="">Name</label><br />
          <input id='name' type="text" {...register("name")} /> <br />
          <label htmlFor="">Price</label><br />
          <input id='price' type="number" {...register("price")} /> <br />
          <label htmlFor="">Description</label><br />
          <input id='description' type="text" {...register('description')} /><br />
          <label htmlFor="">CategoryId</label><br />
          <input id='categoryId' type="text" {...register('categoryId')} /><br />
          <button className='btn-button  ' type='submit'>Update Product</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct