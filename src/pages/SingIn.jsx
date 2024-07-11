// SingIn.jsx
import React from 'react';
import { Form, Input, Button, Checkbox, Avatar } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';

const SingIn = () => {
  const navigate=useNavigate();
  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    navigate('/home');
  };

  return (
    <>
    <div style={{ position: 'absolute',backgroundImage: "url('https://minajliki.ma/wp-content/uploads/2023/12/AF1QipNPkw5vBshMzP8SLGExYek9qk1nIA7RlIIAqgyfw1600-h1000-k-no.jpeg')",backgroundSize:"cover", top: 0, left: 0, width: '100%', height: '100%' }}>
    
    <div style={{ maxWidth: '300px', margin: '100px auto', textAlign: 'center' }}>
      <h1 style={{position:"absolute",top:"10px",left:"40%",color:"blue",textShadow:"2px 2px 4px #fff"}}>ISTA BOUZNIKA ACTIVITES </h1><br />
      <img src="../../public/images/ActivityLogo.png" alt="" width={'150px'} style={{position:"absolute",top:"10px",right:"10px"}}/>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '5px' }}>
      <Avatar size={64} icon={<UserOutlined />} style={{ marginBottom: '20px' }} />
      <h1>Login</h1><br />
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a style={{ float: 'right' }} href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Log in
          </Button>
          
         
        </Form.Item>
      </Form>
      </div>
      <Footer
          className='footer'
          style={{
            textAlign: 'center',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            left: 0,
          }}
        >
          <Link to="https://www.ofppt.ma">OFPPT officiel</Link>
             <br /><br />
          <Link to="https://icuae.ma/annuaire/ista-ofppt-bouznika-bouznika-2/">Portail Bouznika</Link>
             <br /><br />
            ISTA BOUZNIKA CLUB <span style={{ color:'transparent' }}>||||</span>
            CONTACT:0537205060 <span style={{ color:'transparent' }}>||||</span>
            EMAIL:istab@ofppt-edu.ma <span style={{ color:'transparent' }}>||||</span>
          
          
             ElectronicB Design ©{new Date().getFullYear()} Created by Toubani Badr DDWOFS201

          
        </Footer>
    </div>
    </div>
    </>
  );
};

export default SingIn;
