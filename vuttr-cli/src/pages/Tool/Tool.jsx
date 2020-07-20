import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Container,
    Row,
    Col,
    Card,
    Badge,
} from 'react-bootstrap';


import {
    LIST_TOOL,
    DELETE_TOOL
} from '@model';

import { ToolNew } from './ToolNew';

class Tool extends React.Component {

    componentDidMount() {
        this.props.listTool();
    }

    remove = async (oid) => {

        await this.props.deleteTool(oid.id);
        await this.props.listTool();
    }

    render() {

        const { t } = this.props;
        const { toolReducer } = this.props;

        return (
            <Container>
                <Row>
                    <Col md='12'><h1>VUTTR</h1></Col>
                    <Col md='12'><h2>Very Useful Tools to Remember</h2></Col>
                </Row>
                <Row>
                    <Col md='12'>

                        <div style={{ float: 'right' }} >
                            <ToolNew />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md='12'>
                        {toolReducer.list && toolReducer.list.map((tool) =>
                            <div key={tool.id}>
                                <Card>
                                    <Card.Header>
                                        {tool.title}

                                        <div style={{ float: 'right' }}>
                                            <Row>
                                                <Col md='auto'>
                                                    <p className='fas fa-times'
                                                        style={{ cursor: 'pointer' }} >
                                                        {t('def_btn_remove')}
                                                    </p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>{tool.description}</Card.Text>
                                        <hr />
                                        {tool.tags.map((tag) =>
                                            <Badge key={tag} variant='primary'>{tag}</Badge>
                                        )}
                                        {/* ///////////////////////////////////////////////////////////////////////////////// */}

                                    </Card.Body>
                                </Card>
                                <hr />
                            </div>
                        )}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export function mapStateToProps(state) {
    const { toolReducer } = state.model;
    return { toolReducer };
};

function mapDispatchToProps(dispatch) {
    return {
        deleteTool: (id) => dispatch({ type: DELETE_TOOL, id }),
        listTool: () => dispatch({ type: LIST_TOOL })
    }
}

const connectedTool = connect(mapStateToProps, mapDispatchToProps);
let exportTool = (connectedTool)(Tool);
exportTool = withTranslation()(exportTool);
exportTool = withRouter(exportTool);
export { exportTool as Tool };