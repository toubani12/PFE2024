import React, { useState } from 'react';
import { Card, Carousel, Tabs, List, Button, Input, Progress } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import PrimaryActivity from './PrimaryActivity';
import Meta from 'antd/es/card/Meta';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home = () => {
  const [tasks, setTasks] = useState({
    Culture: [
      { text: "Préparer l'exposition culturelle", progress: 50 },
      { text: 'Organiser la soirée théâtrale', progress: 30 },
      { text: 'Promouvoir la lecture', progress: 70 },
      { text: 'Initier un club de cinéma', progress: 20 },
      { text: 'Planifier une visite de musée', progress: 60 },
      { text: "Développer des ateliers d'art", progress: 40 },
      { text: 'Organiser un concours de poésie', progress: 10 },
      { text: 'Lancer un podcast culturel', progress: 80 },
      { text: 'Créer une bibliothèque virtuelle', progress: 90 },
      { text: 'Participer à un festival de musique', progress: 50 }
    ],
    Innovation: [
      { text: 'Développer une application mobile', progress: 60 },
      { text: 'Créer un prototype de machine', progress: 40 },
      { text: 'Organiser un hackathon', progress: 20 },
      { text: 'Établir des partenariats stratégiques', progress: 80 },
      { text: "Mettre en place un laboratoire d'innovation", progress: 30 },
      { text: 'Proposer des idées de start-ups', progress: 50 },
      { text: 'Tester de nouvelles technologies', progress: 70 },
      { text: 'Développer un produit durable', progress: 90 },
      { text: 'Concevoir un programme de formation', progress: 40 },
      { text: 'Participer à des conférences technologiques', progress: 60 }
    ],
    Sport: [
      { text: 'Organiser un tournoi de football', progress: 50 },
      { text: "Entraîner l'équipe de basket-ball", progress: 70 },
      { text: 'Promouvoir la santé par le sport', progress: 30 },
      { text: 'Créer des sessions de yoga en plein air', progress: 40 },
      { text: 'Participer à une course de charité', progress: 20 },
      { text: 'Développer un programme de remise en forme', progress: 60 },
      { text: 'Organiser des compétitions inter-écoles', progress: 80 },
      { text: 'Créer un club de randonnée', progress: 10 },
      { text: 'Établir un partenariat avec des clubs locaux', progress: 90 },
      { text: "Promouvoir l'inclusion par le sport", progress: 50 }
    ],
    Environnement: [
      { text: 'Organiser un nettoyage de plage', progress: 80 },
      { text: 'Planter des arbres dans la communauté', progress: 60 },
      { text: 'Éduquer sur le recyclage des déchets', progress: 40 },
      { text: "Promouvoir l'utilisation de sacs réutilisables", progress: 20 },
      { text: 'Participer à des initiatives de reforestation', progress: 70 },
      { text: 'Lancer une campagne de sensibilisation au changement climatique', progress: 90 },
      { text: "Réduire l'empreinte carbone de l'école", progress: 50 },
      { text: 'Impliquer les élèves dans le compostage', progress: 30 },
      { text: 'Organiser des ateliers de jardinage urbain', progress: 10 },
      { text: "Promouvoir l'utilisation de transports écologiques", progress: 80 }
    ]
  });

  const [newTask, setNewTask] = useState('');
  const [progress, setProgress] = useState({
    Culture: 50,
    Innovation: 70,
    Sport: 60,
    Environnement: 100
  });

  const handleAddTask = (key) => {
    setTasks({
      ...tasks,
      [key]: [...tasks[key], { text: newTask, progress: 0 }]
    });
    setNewTask('');
  };

  const handleRemoveTask = (key, index) => {
    setTasks({
      ...tasks,
      [key]: tasks[key].filter((_, i) => i !== index)
    });
  };

  const handleProgressChange = (key, index, value) => {
    const updatedTasks = tasks[key].map((task, i) => (
      i === index ? { ...task, progress: value } : task
    ));
    setTasks({
      ...tasks,
      [key]: updatedTasks
    });
  };

  const renderTasks = (key) => (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={tasks[key]}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button onClick={() => handleRemoveTask(key, index)}>Remove</Button>
            ]}
          >
            <List.Item.Meta
              title={<Input value={item.text} readOnly />}
              description={
                <Progress
                  percent={item.progress}
                  onChange={(e) => handleProgressChange(key, index, e.target.value)}
                />
              }
            />
          </List.Item>
        )}
      />
      <Input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
        style={{ width: '80%', marginRight: '8px' }}
      />
      <Button onClick={() => handleAddTask(key)}>Add Task</Button>
    </div>
  );

  const increase = (key) => {
    setProgress((prevProgress) => {
      const newPercent = prevProgress[key] + 10;
      return {
        ...prevProgress,
        [key]: newPercent > 100 ? 100 : newPercent
      };
    });
  };

  const decline = (key) => {
    setProgress((prevProgress) => {
      const newPercent = prevProgress[key] - 10;
      return {
        ...prevProgress,
        [key]: newPercent < 0 ? 0 : newPercent
      };
    });
  };

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div style={{ paddingTop: "100px" }}>
      <Tabs onChange={onChange} type="card" style={{ position: "absolute", top: "0", width: "100%", zIndex: 1 }}>
        <Tabs.TabPane tab="Evenements" key="1">
          <div>
            <Carousel autoplay autoplaySpeed={3000} dots={false} style={{ height: "300px" }}>
              <div>
                <img src="../../public/images/ActiviteAi.jpg" alt="" width={"80%"} height={"300px"} />
              </div>
              <div>
                <img src="../../public/images/Activity4.jpeg" alt="" width={"80%"} height={"300px"} />
              </div>
              <div>
                <img src="../../public/images/slider.png" alt="" width={"80%"} height={"300px"}  />
              </div>
            </Carousel>
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Card
                  hoverable
                  style={{ width: '80vh', maxWidth: '50%' }}
                  cover={<img src="../../public/images/EXamenBlan.jpg" alt="" />}
                >
                  <Meta title="Examen Blan" description="https://www.ofppt.ma/examen-blan" />
                </Card>
              </div>
              <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Link to="https://www.netacad.com">
                  <PrimaryActivity />
                </Link>
              </div>
            </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Innovation" key="2" style={{ margin:'10px',overflow:'scroll',maxHeight:'90vh'}}>
        <div style={{ display: 'flex'}}> 
        
        <div style={{  width: '70%' }}>
              <img src="../../public/images/Innovation.jpg" alt=""  style={{ width: '130vh', height: '90vh' }}/>
            </div>
            <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <h3 style={{ textAlign: "center" }}>Responsable : MME FARFARA SOUMIA</h3>

          <h1 style={{ textAlign: "center" }}>Avancement</h1>

            <Progress percent={progress.Innovation} type="line" />
            <Progress percent={progress.Innovation} type="circle" />
            <Button.Group>
              <Button onClick={() => decline('Innovation')} icon={<MinusOutlined />} />
              <Button onClick={() => increase('Innovation')} icon={<PlusOutlined />} />
            </Button.Group>
            <h1 style={{ textAlign: "center" }}>Tâches</h1>
            {renderTasks('Innovation')}
          </div>

          </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Culture" key="3" style={{ margin:'10px',overflow:'scroll',maxHeight:'90vh'}}>
          
          <div style={{ display: 'flex'}}> 
            <div style={{  width: '70%' }}>
              <img src="../../public/images/video.jpg" alt=""  style={{ width: '130vh', height: '90vh' }}/>
            </div>
            <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <h3 style={{ textAlign: "center" }}>Responsable : Mr ELMJADELY OMAR</h3>

          <h1 style={{ textAlign: "center" }}>Avancement</h1>
            <Progress percent={progress.Culture} type="line" />
            <Progress percent={progress.Culture} type="circle" />
            <Button.Group>
              <Button onClick={() => decline('Culture')} icon={<MinusOutlined />} />
              <Button onClick={() => increase('Culture')} icon={<PlusOutlined />} />
            </Button.Group>
          </div>
          <h1 style={{ textAlign: "center" }}>Tâches</h1>
          {renderTasks('Culture')}
          </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Sport" key="4" style={{ margin:'10px',overflow:'scroll',maxHeight:'90vh'}}>
        <div style={{ display: 'flex'}}> 
            <div style={{  width: '70%' }}>
              <img src="../../public/images/koora.jpg" alt=""  style={{ width: '130vh', height: '90vh' }}/>
            </div>
            <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <h3 style={{ textAlign: "center" }}>Responsable : Mr RIAD Mustapha</h3>
          <h1 style={{ textAlign: "center" }}>Avancement</h1>

            <Progress percent={progress.Sport} type="line" />
            <Progress percent={progress.Sport} type="circle" />
            <Button.Group>
              <Button onClick={() => decline('Sport')} icon={<MinusOutlined />} />
              <Button onClick={() => increase('Sport')} icon={<PlusOutlined />} />
            </Button.Group>
            <h1 style={{ textAlign: "center" }}>Tâches</h1>
          {renderTasks('Sport')}
          </div>
          </div>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Environnement" key="5" style={{ margin:'10px',overflow:'scroll',maxHeight:'90vh'}}>
        <div style={{ display: 'flex'}}> 
        
        <div style={{  width: '70%' }}>
              <img src="../../public/images/tabi3a.jpg" alt=""  style={{ width: '130vh', height: '90vh' }}/>
            </div>
            <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <h3 style={{ textAlign: "center" }}>Responsable : Mr QARA Mohammed</h3>

          <h1 style={{ textAlign: "center" }}>Avancement</h1>

            <Progress percent={progress.Environnement} type="line" />
            <Progress percent={progress.Environnement} type="circle" />
            <Button.Group>
              <Button onClick={() => decline('Environnement')} icon={<MinusOutlined />} />
              <Button onClick={() => increase('Environnement')} icon={<PlusOutlined />} />
            </Button.Group>
            <h1 style={{ textAlign: "center" }}>Tâches</h1>
          {renderTasks('Environnement')}
          </div>
          
          </div>
          </div>
        </Tabs.TabPane>
        
      </Tabs> 
      <h1 style={{ position: "absolute", top: "10px", right: "10px" }}>Toubani badr eddine</h1>
    </div>
  );
};

export default Home;
