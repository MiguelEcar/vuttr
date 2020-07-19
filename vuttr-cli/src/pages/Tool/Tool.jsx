import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    Button,
} from 'react-bootstrap';


import {
    NEW_TOOL,
    LIST_TOOL,
    DELETE_TOOL
} from '@model';

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
                    <Col md='auto'>
                        <Card>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Text>

                                </Card.Text>
                                <hr />
                                
                                {/* ///////////////////////////////////////////////////////////////////////////////// */}

                            </Card.Body>
                        </Card>
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
        newForm: (id) => dispatch({ type: NEW_TOOL }),
        deleteTool: (id) => dispatch({ type: DELETE_TOOL, id }),
        listTool: () => dispatch({ type: LIST_TOOL })
    }
}

const connectedTool = connect(mapStateToProps, mapDispatchToProps);
let exportTool = (connectedTool)(Tool);
exportTool = withTranslation()(exportTool);
exportTool = withRouter(exportTool);
export { exportTool as Tool };