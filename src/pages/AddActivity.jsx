import React, { useState } from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { Option } = Select;
const App = () => {
  const [componentSize, setComponentSize] = useState('default');
  const [events, setEvents] = useState([]);

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    const newEvent = {
      name: values.name,
      date: values.date.format('YYYY-MM-DD'),
      location: values.location,
      description: values.description,
    };

    setEvents([...events, newEvent]);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #f0f0f0', borderRadius: '8px' }}>
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}
    >
      <h1>Ajouter une Evenement</h1><br />
      <hr />

        <Select defaultValue="1" style={{ width: 120 }}>
              <Option value="1">Slide 1</Option>
              <Option value="2">Slide 2</Option>
              <Option value="3">Slide 3</Option>
              <Option value="4">Slide 4</Option>
              <Option value="firstDisplay">Premier Affiche</Option>
              <Option value="secondDisplay">Deuxième Affiche</Option>
          </Select><br />
          <br />

      {/* Input for Event Name */}
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter event name!' }]}>
        <Input />
      </Form.Item>

      {/* DatePicker for Event Date */}
      <Form.Item label="Date" name="date" rules={[{ required: true, message: 'Please select event date!' }]}>
        <DatePicker />
      </Form.Item>

      {/* Input for Event Location */}
      <Form.Item label="Location" name="location" rules={[{ required: true, message: 'Please enter event location!' }]}>
        <Input />
      </Form.Item>

      {/* Input for Event Description */}
      <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please enter event description!' }]}>
        <Input.TextArea />
      </Form.Item>

      {/* Select for Event Type (Demo for illustration) */}
      <Form.Item label="Type" name="eventType">
        <Select>
          <Select.Option value="demo">Demo</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
                name="image"
                label="Image "
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                rules={[{ required: true, message: 'Veuillez uploader une image' }]}
              >
                <Upload name="image" action="/upload.do" listType="picture" accept="image/*">
                  <Button icon={<UploadOutlined />}>Cliquer pour uploader</Button>
                </Upload>
              </Form.Item>


      <Form.Item label=" ">
        <Button type="primary" htmlType="submit"> Add Event</Button>
      </Form.Item>

    </Form>
    </div>
  );
};

export default App;
