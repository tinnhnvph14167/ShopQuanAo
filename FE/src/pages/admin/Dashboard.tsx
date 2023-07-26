import { ShoppingCartOutlined, AppstoreOutlined, UserOutlined, IdcardOutlined } from '@ant-design/icons'
import { Card, Space, Statistic, Typography } from 'antd'
import React from 'react'
// import AppHeader from '../../component/AppHeader'
import SideMenu from '../../component/SideMenu'

import { LikeOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';

type Props = {}

const Dashboard = (props: Props) => {

  return (

    <div>

      <div className='SideMenu'>
        <SideMenu />

        <Space direction="horizontal">
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                }}
              />
            }
            title={"Orders"}
            value={12234}
          />
          <DashboardCard icon={
            <AppstoreOutlined style={{
              color: "green",
              backgroundColor: "rgba(0,255,0,0.25)",
              borderRadius: 20,
              fontSize: 24,
            }} />}
            title={"Product"}
            value={1234} />
          <DashboardCard icon={<UserOutlined style={{
            color: "green",
            backgroundColor: "rgba(0,255,0,0.25)",
            borderRadius: 20,
            fontSize: 24,
          }}
          />
          }
            title={"User"} value={124434} />
          <DashboardCard icon={<IdcardOutlined style={{
            color: "green",
            backgroundColor: "rgba(0,255,0,0.25)",
            borderRadius: 20,
            fontSize: 24,
          }}
          />}
            title={"Category"} value={3456234} />
        </Space>
      </div>
    </div>

  )
}

function DashboardCard({ title, value }) {
  return (
    <Card>
      <Space direction="horizontal">
        <ShoppingCartOutlined />
        <Statistic title={title} value={value} />
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
          </Col>
          <Col span={12}>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row>

      </Space>
    </Card>

  )
}

export default Dashboard