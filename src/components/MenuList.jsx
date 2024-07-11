
import { Menu } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';

// eslint-disable-next-line react/prop-types
const MenuList = ({ darkTheme }) => {
  const [selectedKey, setSelectedKey] = useState('');
  const navigate = useNavigate(); // Utilisation correcte de useNavigate

  const handleMenuClick = (key) => {
    setSelectedKey(key);
    navigate(key); // Naviguer vers l'URL correspondante
  };

  return (
    <Menu theme={darkTheme ? 'dark' : 'light'}  className='menu-bar' selectedKeys={[selectedKey]}>
      <Menu.Item key='/home' icon={<HomeOutlined />} onClick={() => handleMenuClick('/home')}>
        <Link to='/home'>Accueil</Link>
      </Menu.Item>
      {/* <Menu.SubMenu key='/activity' icon={<AppstoreOutlined />} title='Commentaire'>

        <Menu.Item key='/activitylist' icon={<BarsOutlined />} onClick={() => handleMenuClick('/activitylist')}>
          <Link to='/activitylist'>Evenement List</Link>
        </Menu.Item>
        <Menu.Item key='/addactivity' icon={<PlusOutlined />} onClick={() => handleMenuClick('/addactivity')}>
          <Link to='/addactivity'>Ajouter une Evenement</Link>
        </Menu.Item>
      </Menu.SubMenu> */}
      {/* <Menu.SubMenu key='/responsables' icon={<UserOutlined />} title='Responsables'>
        <Menu.Item key='/responsable' icon={<BarsOutlined />} onClick={() => handleMenuClick('/responsable')}>
          <Link to='/responsable'>List des Responsables</Link>
        </Menu.Item>
        <Menu.Item key='/addresponsable' icon={<UserAddOutlined />} onClick={() => handleMenuClick('/addresponsable')}>
          <Link to='/addresponsable'>Ajouter un Responsable</Link>
        </Menu.Item>
      </Menu.SubMenu> */}
      {/* <Menu.SubMenu key='/students' icon={<UserOutlined />} title='Stagiaires'>
        <Menu.Item key='/listStagiaire' icon={<BarsOutlined />} onClick={() => handleMenuClick('/stagiaire')}>
          <Link to='/stagiaire'>List des Stagiaires</Link>
        </Menu.Item>
        <Menu.Item key='/addStagiaire' icon={<UserAddOutlined />} onClick={() => handleMenuClick('/addstagiaire')}>
          <Link to='/addstagiaire'>Ajouter un Stagiaire</Link>
        </Menu.Item>
      </Menu.SubMenu> */}
      <Menu.Item key='/settings' icon={<SettingOutlined />} onClick={() => handleMenuClick('/settings')}>
        <Link to='/settings'>Paramètres</Link>
      </Menu.Item>
      <Menu.Item key='/signOut' icon={<PoweroffOutlined />} onClick={() => handleMenuClick('/signout')}>
        <Link to='/signout'>Déconnexion</Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
