// Settings.jsx
import React from 'react';
import { Form, Input, Select, Button } from 'antd';


const Settings = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #f0f0f0', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Parrametres de connexion </h2>
      <Form
        name="settings"
        initialValues={{  username: '', email: '' }}
        onFinish={onFinish}
        layout="vertical"
      >
        
       
        <Form.Item
          name="ncienpassword"
          label="AncienPassword"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          
          
          <Input.Password placeholder="Ancien Password" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          
          
          <Input.Password placeholder="Nouveau Password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Save Settings
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Settings;
