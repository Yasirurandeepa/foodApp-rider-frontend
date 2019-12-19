import React from 'react';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";

const { Content} = Layout;
class App extends React.Component {

    render() {
        return (
            <Layout className="layout">
                <CustomHeader />
                <Content>
                    <div style={{ background: '#fff', padding: 24, minHeight: 805 }}>

                    </div>
                </Content>
                <CustomFooter/>
            </Layout>
        )
    }
}

export default App;