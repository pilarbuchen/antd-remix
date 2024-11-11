import React from 'react';
import { ConfigProvider, Button, Space, Card, Input, Typography } from 'antd';

const { Text, Title } = Typography;

const AntdComponent: React.FC = () => (
    <div>
     <Title level={2}>Welcome to Codux with Ant Design!</Title>

      <Space direction="vertical" size="large" style={{ width: '100%', alignItems: 'center', marginTop: '20px' }}>
        <Button type="primary" size="large">
          Click Me
        </Button>
        <Button type="default" size="middle">
          Another Button
        </Button>
        <Input placeholder="Enter your text here" style={{ width: '300px' }} />
      </Space>

      <Card title="Card Header" bordered={false} style={{ width: 300, marginTop: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Text>This is some content inside the card. Ant Design provides a rich set of UI components for building interfaces.</Text>
      </Card>
      </div>
);

export default AntdComponent;
