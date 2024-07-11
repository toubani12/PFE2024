import React, { useState } from 'react';
import { AutoComplete, Input, Col, Divider, Drawer, List, Row, Select, Form, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

const getRandomInt = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <span>
              Found {query} on{' '}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const ActivityList = () => {
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [options, setOptions] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const showDrawer = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setEditingEvent(null);
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setOpen(true);
  };

  const handleSave = (values) => {
    console.log('Saved values:', values);
    onClose();
  };

  const eventList = [
    {
      id: 1,
      name: 'Jour de la terre',
      description: "Date 29-06-2024",
      image: '../public/images/slider.png',
      link: 'https://www.ofppt.ma/examen-blan',
      details: [
        { title: 'Date', content: '29 Juin 2024' },
        { title: 'Heure', content: '9h00 - 12h00' },
        { title: 'Lieu', content: 'ISTAB Bouznika' },
        { title: 'Description', content: 'Examen simulé pour évaluer les compétences des étudiants.' },
      ],
    },
    {
      id: 2,
      name: 'Examen Blanc',
      description: 'date 19-06-2024',
      image: '../public/images/ExamenBlan.jpg',
      link: 'https://www.journeedelaterre.org',
      details: [
        { title: 'Date', content: '22 Avril 2024' },
        { title: 'Heure', content: 'Toute la journée' },
        { title: 'Lieu', content: 'Campus OFPPT' },
        { title: 'Description', content: 'Journée dédiée à sensibiliser à la protection de l\'environnement.' },
      ],
    },{
      id: 3,
      name: 'AI Generative',
      description: 'Date 29-03-2024',
      image: '../public/images/ActiviteAi.jpg',
      link: 'https://www.journeedelaterre.org',
      details: [
        { title: 'Date', content: '22 Avril 2024' },
        { title: 'Heure', content: 'Toute la sécurité' },
        { title: 'Lieu', content: 'Campus OFPPT' }, 
      ]
    },{
      id: 4,
      name: 'NetAcad',
      description: 'Date 29-01-2024',
      image: 'https://newsroom.cisco.com/c/dam/r/newsroom/en/us/assets/a/y2022/m10/Networking_Academy_25_Hero2_1200x675.jpg',
      link: 'https://www.journeedelaterre.org',
      details: [
        { title: 'Date', content: '22 Avril 2024' },
        { title: 'Heure', content: 'Toute la sécurité' },
        { title: 'Lieu', content: 'Campus OFPPT' }, 
      ]
    }
    // Additional events...
  ];

  return (
    <>
      <h1 style={{ textAlign: 'center', position: 'absolute', top: '10px', width: '100%' }}>Liste des événements</h1>
      <AutoComplete
        popupMatchSelectWidth={252}
        style={{ width: 300 }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
        size="large"
      >
        <Input.Search size="large" placeholder="Rechercher un événement" enterButton />
      </AutoComplete>
      <List
        dataSource={eventList}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <a onClick={() => handleEdit(item)} key={`a-${item.id}`}>
                Edit
              </a>,
            ]}
          >
            <List.Item.Meta
              avatar={<img src={item.image} alt={item.name} style={{ width: 50, height: 50 }} />}
              title={<a href={item.link} target="_blank" rel="noopener noreferrer">{item.name}</a>}
              description={item.description}
            />
            <Select defaultValue="1" style={{ width: 120 }}>
              <Option value="1">Slide 1</Option>
              <Option value="2">Slide 2</Option>
              <Option value="3">Slide 3</Option>
              <Option value="4">Slide 4</Option>
              <Option value="firstDisplay">Premier Affiche</Option>
              <Option value="secondDisplay">Deuxième Affiche</Option>
            </Select>
          </List.Item>
        )}
      />
      <Drawer width={640} placement="right" closable={false} onClose={onClose} visible={open}>
        {selectedEvent && !editingEvent && (
          <>
            <p className="site-description-item-profile-p">Détails de l'Événement</p>
            <Divider />
            <p className="site-description-item-profile-p">{selectedEvent.name}</p>
            <Row>
              {selectedEvent.details.map((detail, index) => (
                <Col key={index} span={12}>
                  <DescriptionItem title={detail.title} content={detail.content} />
                </Col>
              ))}
            </Row>
          </>
        )}
        {editingEvent && (
          <>
            <p className="site-description-item-profile-p">Éditer l'Événement</p>
            <Divider />
            <Form layout="vertical" onFinish={handleSave}>
              <Form.Item
                name="name"
                label="Titre de l'événement"
                initialValue={editingEvent.name}
                rules={[{ required: true, message: 'Veuillez entrer le titre de l\'événement' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="date"
                label="Date de l'événement"
                initialValue={editingEvent.details.find((detail) => detail.title === 'Date')?.content}
                rules={[{ required: true, message: 'Veuillez entrer la date de l\'événement' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image de l'événement"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                rules={[{ required: true, message: 'Veuillez uploader une image' }]}
              >
                <Upload name="image" action="/upload.do" listType="picture" accept="image/*">
                  <Button icon={<UploadOutlined />}>Cliquer pour uploader</Button>
                </Upload>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Enregistrer
                </Button>
              </Form.Item>
            </Form>
          </>
        )}
      </Drawer>
    </>
  );
};

export default ActivityList;
