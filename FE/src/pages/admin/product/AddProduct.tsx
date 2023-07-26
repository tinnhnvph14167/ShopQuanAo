import React, { useEffect } from 'react'
import SideMenu from '../../../component/SideMenu'
import { useNavigate } from 'react-router-dom';
import { IProduct, ICategory } from '../../../types/product';
import { useForm, SubmitHandler } from "react-hook-form";

import { getAllCategories } from '../../../api/category'

interface Props {
  onAdd: (products: IProduct) => void;
}

const AddProduct = (props: Props) => {
  const [categories, setCategories] = React.useState<any>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IProduct>();

  useEffect(() => {
    getAllCategories().then(({ data: { categories } }) =>
     {
      setCategories(categories)}
    );
  }, []);

  const navigate = useNavigate()
  const onSubmit: SubmitHandler<IProduct> = (data) => {
    props.onAdd(data);
    navigate("/admin/products")
  };

  console.log('categories', categories)
  console.log('watch',watch('categoryId'))

  return (
    <div>

      <div className='SideMenu'>
        <SideMenu />
        {/* <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: '0 auto' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Product Name"
            name="name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Product Image"
            name="image"
            rules={[{ required: true, message: 'Please input your image!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Product Description"
            name="description"
            rules={[{ required: true, message: 'Please input your description!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="CategoryId"
            name="categoryId"
            rules={[{ required: true, message: 'Please input your categoryId!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Hình ảnh">

          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add New Product
            </Button>
          </Form.Item>
        </Form> */}
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1>Thêm sản phẩm</h1>
          <label htmlFor="">name</label>
          <input type="text" {...register("name", { required: true, minLength: 5 })} />
          {errors.name && errors.name.type === "required" && (
            <p>Bắt buộc phải nhập trường này</p>
          )}
          <label htmlFor="">price</label>
          <br />
          <input type="number" {...register("price", { required: true, minLength: 4 })} />
          {errors.price && errors.price.type === "required" && (
            <p>Bắt buộc phải nhập trường này</p>
          )}
          <br />
          <label htmlFor="">Danh Muc</label>
          {/* <input type="text" {...register("categoryId", { required: true })} />
                {errors.categoryId && errors.categoryId.type === "required" && (
                    <p>Bắt buộc phải nhập trường này</p>
                )} */}
          <select className="form-control" {...register("categoryId", { required: true })}>
          <option value={null}>Chon danh muc</option>
            {
              (categories || []).map((x: any) => {
                return <option value={x._id}>{x.name}</option>
              })
            }
          </select>
          <label htmlFor="">description</label>
          <input type="text" {...register("description")} />
          <br />
          <button>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct