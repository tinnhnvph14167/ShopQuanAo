import { LineChartOutlined, IdcardOutlined, AppstoreOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons"
import { Menu, theme } from "antd"
import { useNavigate } from "react-router-dom"

function SideMenu() {
    const navigate = useNavigate()

    const handleLogout = () => {
        // Xoá token trong localStorage
        localStorage.removeItem('accesstoken');

        // Chuyển người dùng về trang đăng nhập
        navigate('/login');
    };

    return (
        <div className=''>
            <Menu
                theme="dark"
                onClick={(items) => {
                    navigate(items.key);
                }}
                items={[
                    {
                        label: 'Dashboard',
                        icon: <LineChartOutlined />,
                        key: '/admin',
                    },
                    {
                        label: 'Product',
                        key: '/admin/products',
                        icon: <AppstoreOutlined />,
                    },
                    {
                        label: 'User',
                        key: '/admin/users',
                        icon: <UserOutlined />,
                    },
                    {
                        label: 'Category',
                        key: '/admin/category',
                        icon: <IdcardOutlined />,
                    },
                    {
                        label: 'Logout',
                        key: '/',
                        icon: <LogoutOutlined />,
                        onClick: handleLogout, // Lắng nghe sự kiện click để logout
                    },
                ]}
            ></Menu>
        </div>
    );
}

export default SideMenu;
