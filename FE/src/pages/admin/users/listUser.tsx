import { Space, Table, Tag, Button, Layout, theme, MenuProps } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
import SideMenu from '../../../component/SideMenu';
import React, { useEffect } from 'react'
import { IProduct, IUser } from '../../../types/product';
import { message, Popconfirm } from 'antd';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Menu } from 'antd';
const { Header, Content, Sider } = Layout;
type Props = {
   users: IUser[],
  onRemove: (_id: number) => void
}


const confirm = () => {
  message.info('Clicked on Yes.');
};
const ListUser = ({ users, onRemove }: Props) => {
  console.log(users);

  const onHandleRemove = (_id: number) => {
    onRemove(_id);
  }
  const data = users.map((item: any) => {
    return {
      key: item._id,
      ...item
    }
  })
  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
      const key = String(index + 1);

      return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,

        children: new Array(4).fill(null).map((_, j) => {
          const subKey = index * 4 + j + 1;
          return {
            key: subKey,
            label: `option${subKey}`,
          };
        }),
      };
    },
  );
  const columns: ColumnsType<IUser[]> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Button type="primary" danger onClick={() => onHandleRemove(record.key)} >Delete</Button>
        </Space>
      ),
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <SideMenu />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          > <div>

              <div className='SideMenu'
              >
                <br />
                <Table columns={columns} dataSource={data} />
              </div>

            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>


  )
  /**level: kích thước của chữ */
}

export default ListUser