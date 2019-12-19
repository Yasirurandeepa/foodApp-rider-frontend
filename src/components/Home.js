import React from "react";
import { Carousel, Radio } from 'antd';

class Home extends React.Component {
    state = {
        dotPosition: 'top',
    };

    handlePositionChange = ({ target: { value: dotPosition } }) => this.setState({ dotPosition });

    render() {
        const { dotPosition } = this.state;
        return (
            <div style={{display: "block", marginLeft: "auto", marginRight: "auto", marginTop: "100px"}}>
                <Radio.Group
                    onChange={this.handlePositionChange}
                    value={dotPosition}
                    style={{ marginBottom: 8 }}
                >
                    <Radio.Button value="top">Top</Radio.Button>
                    <Radio.Button value="bottom">Bottom</Radio.Button>
                    <Radio.Button value="left">Left</Radio.Button>
                    <Radio.Button value="right">Right</Radio.Button>
                </Radio.Group>
                <Carousel dotPosition={dotPosition}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                </Carousel>
            </div>
        );
    }
}
export default Home;
