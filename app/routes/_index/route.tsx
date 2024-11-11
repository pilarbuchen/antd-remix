import classNames from 'classnames';
import styles from './_index.module.scss';
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import commonStyles from '~/styles/common-styles.module.scss';
import { getUrlOriginWithPath } from '~/utils';
import TypescriptSvg from '../../../src/assets/svg/typescript.svg';
import ViteSvg from '../../../src/assets/svg/vite.svg';
import { ConfigProvider, Button, Space, Card, Input, Typography } from 'antd';

const { Text, Title } = Typography;

export const loader = ({ request }: LoaderFunctionArgs) => {
    return { canonicalUrl: getUrlOriginWithPath(request.url) };
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <div>
                <Title level={2}>Welcome to Codux with Ant Design!</Title>

                <Space
                    direction="vertical"
                    size="large"
                    style={{ width: '100%', alignItems: 'center', marginTop: '20px' }}
                >
                    <Button type="primary" size="large">
                        Click Me
                    </Button>
                    <Button type="default" size="middle">
                        Another Button
                    </Button>
                    <Input placeholder="Enter your text here" style={{ width: '300px' }} />
                </Space>

                <Card
                    title="Card Header"
                    bordered={false}
                    style={{
                        width: 300,
                        marginTop: '20px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Text>
                        This is some content inside the card. Ant Design provides a rich set of UI
                        components for building interfaces.
                    </Text>
                </Card>
            </div>

            <h2 className={styles.title}>Welcome to your App Homepage 🎉</h2>
            <span>
                Double click to edit App component
                <br />
                &amp; drag here elements from + Add <b>Elements</b> Panel
            </span>
            <p className={styles.paragraph}>
                This project is using <img src={ViteSvg} width="12" />+
                <img src={TypescriptSvg} width="12" />
                Visit vitejs.dev to learn more.{' '}
            </p>
        </div>
    );
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    const title = 'Blank Starter';
    const description = 'Welcome to the Blank Starter';
    const imageUrl = 'https://website-starter.com/og-image.png';

    return [
        { title },
        {
            name: 'description',
            content: description,
        },
        {
            tagName: 'link',
            rel: 'canonical',
            href: data?.canonicalUrl,
        },
        {
            property: 'robots',
            content: 'index, follow',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: imageUrl,
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
        {
            name: 'twitter:title',
            content: title,
        },
        {
            name: 'twitter:description',
            content: description,
        },
        {
            name: 'twitter:image',
            content: imageUrl,
        },
    ];
};

export const links: LinksFunction = () => {
    return [
        {
            rel: 'icon',
            href: '/favicon.ico',
            type: 'image/ico',
        },
    ];
};
