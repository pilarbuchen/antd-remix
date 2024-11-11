import { createBoard } from '@wixc3/react-board';
import AntdComponent from '../../../src/components/antd-component/antd-component';

export default createBoard({
    name: 'AntdComponent',
    Board: () => <AntdComponent />,
});
