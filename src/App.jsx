// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Layout, theme } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import Logo from './components/Logo';
import MenuList from './components/MenuList';
import ToogleThemeBouton from './components/ToogleThemeBouton';

import Home from './pages/home';
import ActivityList from './pages/ActivityList';
import AddActivity from './pages/AddActivity';
import Responsable from './pages/Responsable';
import AddResponsable from './pages/AddResponsable';
import Stagiair from './pages/Stagiair';
import AddStagiair from './pages/AddStagiair';
import Settings from './pages/Settings';
import SingIn from './pages/SingIn';

const { Header, Sider, Content, Footer } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <BrowserRouter>
      <Layout>
        <Sider
          className='sidebar'
          collapsed={collapsed}
          collapsible
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
        >
          <Logo />
          <MenuList darkTheme={darkTheme} />
          <ToogleThemeBouton
            darkTheme={darkTheme}
            ToogleTheme={() => setDarkTheme(!darkTheme)}
          />
        </Sider>
        <Layout>
          <Header
            style={{ padding: 0, background: colorBgContainer }}
          >
            <Button
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              className='toggle'
              onClick={() => setCollapsed(!collapsed)}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: colorBgContainer }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/activity-list" element={<ActivityList />} />
              <Route path="/add-activity" element={<AddActivity />} />
              <Route path="/responsable" element={<Responsable />} />
              <Route path="/add-responsable" element={<AddResponsable />} />
              <Route path="/stagiair" element={<Stagiair />} />
              <Route path="/add-stagiair" element={<AddStagiair />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/signin" element={<SingIn />} />
            </Routes>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
