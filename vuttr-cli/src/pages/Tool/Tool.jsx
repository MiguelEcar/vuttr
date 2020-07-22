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
import { Delete } from '@theme';

import { ToolNew } from './ToolNew';

class Tool extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            tagsOnly: true
        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    async componentDidMount() {
        await this.props.listTool();
    }
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    remove = async (oid) => {

        await this.props.deleteTool(oid.id);
        await this.componentDidMount();
    }
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    onSearch = async ({ target }) => {

        if (target.name === 'search') {
            await this.setState({
                search: target.value
            })
        }
        if (target.name === 'tagsOnly') {
            await this.setState({
                tagsOnly: target.checked
            })
        }

        await this.props.listTool({ search: this.state.search, tagsOnly: this.state.tagsOnly });
    }
    // /////////////////////////////////////////////////////////////////////////////

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

                    <Col md='5'>
                        <input type='text' placeholder={t('def_search')}
                            className='form-control' name='search'
                            value={this.state.search} onChange={this.onSearch} />
                    </Col>
                    <Col md='6'>
                        <label>
                            <input type='checkbox' name='tagsOnly'
                                checked={this.state.tagsOnly} onChange={this.onSearch} />
                            {t('def_search_check')}
                        </label>

                    </Col>

                    <Col md='1'>
                        <ToolNew reloadPage={() => this.componentDidMount()} />
                    </Col>

                </Row>
                <hr />
                <Row>
                    <Col md='12'>
                        {toolReducer.list && toolReducer.list.map((tool) =>
                            <div key={tool.id}>
                                <Card>
                                    <Card.Header>
                                        {tool.title}

                                        <div style={{ float: 'right' }}>
                                            <Delete oid={tool} remove={this.remove} t={t}
                                                removed={toolReducer.removed} />
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <pre>{tool.description}</pre>
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
            </Container >
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
        listTool: (search) => dispatch({ type: LIST_TOOL, search })
    }
}

const connectedTool = connect(mapStateToProps, mapDispatchToProps);
let exportTool = (connectedTool)(Tool);
exportTool = withTranslation()(exportTool);
exportTool = withRouter(exportTool);
export { exportTool as Tool };