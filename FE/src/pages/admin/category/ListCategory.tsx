import { Button, Divider, Input, Modal, Form, Space, Table, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';
import { ICategory } from '../../../types/product';
import { deleteCategory, getAllCategory } from '../../../api/category'
import { Header } from 'antd/es/layout/layout';
// import Header from '../../Header';
import Sidebar from '../../../component/SideMenu';

type Props = {};

const ListCategory = (props: Props) => {
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    const [form] = Form.useForm();

    useEffect(() => {
        getAllCategory().then(({ data }) => {
            setCategories(data.categories);
        });
    }, []);

    const onCreateCategory = () => {
        setModalVisible(true);
    };

    const onHandleCreateCategory = async (values: any) => {
        try {
            const { data } = await getAllCategory(values);
            setCategories([...categories, data.category]);
            setModalVisible(false);
        } catch (error) {
            console.log(error);
        }
    };

    const onHandleDeleteCategory = async (_id: string) => {
        try {
            await deleteCategory(_id);
            const newCategories = categories.filter((category) => category._id !== _id);
            setCategories(newCategories);
        } catch (error) {
            console.log(error);
        }
    };

    const columns: ColumnsType<ICategory> = [
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <Link to={`/admin/category/${record._id}`}>{text}</Link>,
        },
        {
            title: 'Action',
            key: 'action',
            render: (record: any) => (
                <Space size="middle">
                    <Button type="primary" danger onClick={() => onHandleDeleteCategory(record._id)}>
                        Delete
                    </Button>
                    <Button type="primary">
                        <Link to={`/admin/category/${record._id}/update`}>Update</Link>
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <Header />
            <div className="list-category-container">
                <Sidebar />
                <div className="list-category-content">
                    <div className="list-category-header">
                        <h3>Category List</h3>
                        <Button type="primary" onClick={onCreateCategory} icon={<PlusOutlined />}>
                            Add Category
                        </Button>
                    </div>
                    <Divider />
                    <div className="list-category-table">
                        <Table columns={columns} dataSource={categories} rowKey="_id" />
                    </div>
                </div>
            </div>
            <Modal
                title="Add Category"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                <Form form={form} onFinish={onHandleCreateCategory}>
                    <Form.Item label="Category Name" name="name" rules={[{ required: true }]}>
                        <Input placeholder="Category Name" />
                    </Form.Item>
                    <Form.Item label="Parent Categories" name="parentId">
                        <Select>
                            {categories.map((category) => (
                                <Select.Option key={category._id} value={category._id}>
                                    {category.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <div style={{ textAlign: 'right' }}>
                        <Button style={{ marginRight: 8 }} onClick={() => setModalVisible(false)}>
                            Cancel
                        </Button>
                        <Button type="primary" htmlType="submit">
                            OK
                        </Button>
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default ListCategory;
