import React, { useEffect, useState } from 'react';
import { Avatar, List, message, AutoComplete, Input, Button, Space } from 'antd';
import VirtualList from 'rc-virtual-list';

const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';

const ContainerHeight = '80vh';

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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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

const App = () => {
  const [data, setData] = useState([]);
  
  // Function to fetch additional data
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(`${body.results.length} more items loaded!`);
      });
  };

  useEffect(() => {
    appendData();
  }, []);

  // Function to handle scrolling and load more data
  const onScroll = (e) => {
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      appendData();
    }
  };

  // Autocomplete options and search handler
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  // Function to handle editing a specific item
  const handleEdit = (email) => {
    console.log(`Edit ${email}`);
    // Implement edit logic here
  };

  // Function to handle deleting a specific item
  const handleDelete = (email) => {
    console.log(`Delete ${email}`);
    // Implement delete logic here
  };

  return (
    <div style={{ margin: 'auto', width: '90%', alignContent: 'center', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center' ,position: 'absolute',top: '5px'}}>Stagiaires</h1>

      <div style={{ margin: 'auto', width: '90%' }}>
        <AutoComplete
          popupMatchSelectWidth={252}
          style={{ width: 300, margin: 'auto' }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
          size="large"
        >
          <Input.Search size="large" placeholder="input here" enterButton style={{ margin: 'auto' }} />
        </AutoComplete>
      </div>

      <List loadMore={<Button onClick={appendData}>Load More</Button>}>
        <VirtualList
          data={data}
          height={ContainerHeight}
          itemHeight={47}
          itemKey="email"
          onScroll={onScroll}
        >
          {(item) => (
            <List.Item
              key={item.email}
              actions={[
                <Space>
                  <Button onClick={() => handleEdit(item.email)} type="primary">Edit</Button>
                  <Button onClick={() => handleDelete(item.email)} type="danger">Delete</Button>
                </Space>
              ]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              
            </List.Item>
          )}
        </VirtualList>
      </List>
    </div>
  );
};

export default App;
