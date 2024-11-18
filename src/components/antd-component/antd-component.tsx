import {
    Button,
    Space,
    Card,
    Input,
    Typography,
    Alert,
    List,
    Tabs,
    Progress,
    Rate,
    Switch,
    Slider,
    Row,
    Col,
} from 'antd';
import styles from './antd-component.module.scss';

const { Text, Title, Paragraph } = Typography;

const features = [
    {
        title: 'Modern Design',
        description: 'Clean and intuitive interface',
    },
    { title: 'Scalable', description: 'Built for growth' },
    { title: 'Collaborative', description: 'Team-friendly features' },
];

const tabItems = [
    {
        key: '1',
        label: 'Configuration',
        children: (
            <Space direction="vertical" style={{ width: '100%' }} size="large">
                <Input placeholder="Enter your API key" />
                <Slider defaultValue={30} />
                <Switch checkedChildren="ON" unCheckedChildren="OFF" defaultChecked />
            </Space>
        ),
    },
    {
        key: '2',
        label: 'Results',
        children: (
            <Alert
                message="Success"
                description="Your configuration has been saved successfully."
                type="success"
                showIcon
            />
        ),
    },
];

const AntdComponent = () => (
    <div className={styles.container}>
        {/* Navigation Bar */}
        <div className={styles.navbar}>
            <Row justify="space-between" align="middle">
                <Col>
                    <Title level={4} style={{ margin: 0 }}>
                        Brand Logo
                    </Title>
                </Col>
                <Col>
                    <Space>
                        <Button type="text">Features</Button>
                        <Button type="text">About</Button>
                        <Button type="text">Contact</Button>
                    </Space>
                </Col>
            </Row>
        </div>

        {/* Hero Section */}
        <div className={`${styles.hero}`}>
            <Space direction="vertical" size="large">
                <Title style={{ color: 'white', marginTop: 40 }}>Welcome to Our Platform</Title>
                <Paragraph style={{ color: 'white', fontSize: '18px' }}>
                    Build beautiful interfaces with Ant Design components
                </Paragraph>
                <Space>
                    <Button type="dashed" size="large" className={styles.button} ghost>
                        Get Started
                    </Button>
                    <Button size="large" className={styles.button} style={{ background: 'white' }}>
                        Learn More
                    </Button>
                </Space>
            </Space>
        </div>

        {/* Features Section */}
        <div className={styles.section}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 60, color: '#881919' }}>
                Key Features
            </Title>
            <Row gutter={[32, 32]}>
                {features.map((feature, index) => (
                    <Col xs={24} md={8} key={index}>
                        <Card className={styles.card}>
                            <Space
                                direction="vertical"
                                size="middle"
                                style={{ width: '100%', textAlign: 'center' }}
                            >
                                <Title level={4}>{feature.title}</Title>
                                <Text type="secondary">{feature.description}</Text>
                            </Space>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>

        {/* Statistics Section */}
        <div className={styles.section} style={{ background: '#f8f9fa' }}>
            <Row gutter={[32, 32]}>
                <Col xs={24} md={8}>
                    <div className={styles.statCard}>
                        <Progress type="circle" percent={75} />
                        <Title level={4} style={{ marginTop: 16 }}>
                            Project Completion
                        </Title>
                    </div>
                </Col>
                <Col xs={24} md={8}>
                    <div className={styles.statCard}>
                        <Title level={1} style={{ color: '#1890ff' }}>
                            98%
                        </Title>
                        <Title level={4}>Customer Satisfaction</Title>
                    </div>
                </Col>
                <Col xs={24} md={8}>
                    <div className={styles.statCard}>
                        <Rate defaultValue={4.5} allowHalf disabled />
                        <Title level={4} style={{ marginTop: 16 }}>
                            User Rating
                        </Title>
                    </div>
                </Col>
            </Row>
        </div>

        {/* Demo Section */}
        <div className={styles.section}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: 60 }}>
                Interactive Demo
            </Title>
            <Row gutter={[32, 32]}>
                <Col xs={24} md={12}>
                    <Card className={styles.card}>
                        <Tabs defaultActiveKey="1" items={tabItems} />
                    </Card>
                </Col>
                <Col xs={24} md={12}>
                    <Card className={styles.card}>
                        <List
                            header={<Text strong>Recent Updates</Text>}
                            dataSource={[
                                'New feature: Dark mode support',
                                'Performance improvements',
                                'Bug fixes and optimizations',
                                'Updated documentation',
                            ]}
                            renderItem={(item) => (
                                <List.Item>
                                    <Text>{item}</Text>
                                </List.Item>
                            )}
                        />
                    </Card>
                </Col>
            </Row>
        </div>

        {/* Call to Action Section */}
        <div className={styles.section} style={{ background: '#f8f9fa', textAlign: 'center' }}>
            <Space direction="vertical" size="large">
                <Title level={2}>Ready to Get Started?</Title>
                <Paragraph style={{ fontSize: '18px' }}>
                    Join thousands of users who are already using our platform
                </Paragraph>
                <Button type="primary" size="large" className={styles.button}>
                    Sign Up Now
                </Button>
            </Space>
        </div>

        {/* Footer */}
        <div style={{ background: '#001529', padding: '40px 20px', color: 'white' }}>
            <Row justify="center">
                <Col>
                    <Text style={{ color: 'white' }}>
                        © 2024 Your Company. All rights reserved.
                    </Text>
                </Col>
            </Row>
        </div>
    </div>
);

export default AntdComponent;
