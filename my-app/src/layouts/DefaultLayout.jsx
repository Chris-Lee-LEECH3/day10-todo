import { NavLink, Outlet } from "react-router";
import { Flex, Layout } from "antd";
const { Header, Footer, Content } = Layout;

const DefaultLayout = () => {
  return (
    <Flex gap="middle" wrap>
      <Layout>
        <Header>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/todos-done"}>Done Todos</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About us</NavLink>
              </li>
            </ul>
          </nav>
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
