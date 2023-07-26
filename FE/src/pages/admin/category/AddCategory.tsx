import { Typography } from 'antd'
import React from 'react'
// import AppHeader from '../../../component/AppHeader';
import { Button, Form, Input, Image } from 'antd';
import { IProduct } from '../../../types/product';
import SideMenu from '../../../component/SideMenu';
import { Select, Space } from 'antd';
import { useNavigate } from 'react-router-dom';


interface Props {
  onAddCategory: (product: IProduct) => void
}

const AddCategory = (props: Props) => {
  const navigate = useNavigate()
  const onFinish = (values: any) => {
    props.onAddCategory(values);
    navigate("/admin/category")
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (value: any) => {
    props.onAddCategory(value);
  };

  return (
    <div>
      {/* <AppHeader/> */}
      <div className='SideMenu'>
        <SideMenu />
        <Form
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

          {/* <Form.Item
                label="Product Price"
                name="price"
                rules={[{ required: true, message: 'Please input your price!' }]}
              >
                <Input />
              </Form.Item> */}

          <Form.Item
            label="CategoryId"
            name="categoryId"
          >

            <Space wrap>
              <Select
                defaultValue="Category"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: 'Category 1', label: 'Category 1' },
                  { value: 'Category 2', label: 'Category 2' },
                  { value: 'Category 3', label: 'Category 3' },
                ]}
              />
            </Space>
          </Form.Item>

          <Form.Item label="Hình ảnh">
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add New Product
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  )
}

export default AddCategory