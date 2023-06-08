import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

// 全局加载，不重复
export default function RootComponent() {
  const { Header, Content, Sider } = Layout;
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ background: colorBgContainer, padding: '10px' }}>
        <div className="logo" />
      </Header>

      <Layout>
        <Sider style={{ background: colorBgContainer }}>
          <div />
          <Menu
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "首页",
                onClick: () => {
                  // 使用React Router的导航
                  navigate("/");
                },
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "欢迎",
                onClick: () => {
                  // 使用React Router的导航
                  navigate("/welcome");
                },
              },
            ]}
          />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
