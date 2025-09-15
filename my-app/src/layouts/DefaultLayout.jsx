import { NavLink, Outlet, useNavigate } from "react-router";
import { Flex, Layout, Menu } from "antd";
const { Header, Footer, Content } = Layout;

const flexStyle = {
  width: "100%",
};

const NavMenu = () => {
  const navigate = useNavigate();

  const items = [
    {
      key: 1,
      label: "Home",
    },
    {
      key: 2,
      label: "Done Todos",
    },
    {
      key: 3,
      label: "About us",
    },
  ];

  const handleNavigate = (key) => {
    if (key == 1) {
      navigate("/");
    } else if (key == 2) {
      navigate("/todos-done");
    } else if (key == 3) {
      navigate("/about");
    }
  }

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
        onClick={(e) => {
          handleNavigate(e.key)
        }}
      />
    </>
  );
};

const DefaultLayout = () => {
  return (
    <Flex gap="middle" width="100%%" style={flexStyle} wrap>
      <Layout width="100%">
        <Header style={{ display: "flex", alignItems: "center" }}>
          <NavMenu />
        </Header>

        <Content>
          <Outlet />
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    </Flex>
  );
};

export default DefaultLayout;
