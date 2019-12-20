import React from 'react';
import 'antd/dist/antd.css';
import { Layout} from 'antd';
import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import Home from "./Home";

const { Content} = Layout;
class App extends React.Component {

    render() {
        return (
            <Layout className="layout">
                <CustomHeader />
                <CustomFooter/>
            </Layout>
        )
    }
}

export default App;