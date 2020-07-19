import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Row,
    Col,
    Card,
} from 'react-bootstrap';

import { Formik, Form } from 'formik';

import {
    tool,
    CREATE_TOOL,
} from '@model';

class ToolNew extends React.Component {

    // /////////////////////////////////////////////////////////////////////////////
    onSubmit = async (values) => {
        await this.props.createTool(values);
    }
    // /////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { toolReducer, initialValues } = this.props;

        return (
            <>
                <Formik
                    initialValues={initialValues}
                    validationSchema={tool.validation}
                    onSubmit={(values) => this.onSubmit(values)}
                >
                    {({ errors, touched, values }) => (
                        <Form>
                            {/* // ///////////////////////////////////////////////////////////// */}
                            <Row>
                                <Col md={12}>
                                    
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </>
        );
    }
}

export function mapStateToProps(state) {
    const { toolReducer } = state.model;

    return { toolReducer, initialValues: toolReducer.oid };
};

function mapDispatchToProps(dispatch) {
    return {
        createTool: (data) => dispatch({ type: CREATE_TOOL, data }),
    }
}

const connectedToolNew = connect(mapStateToProps, mapDispatchToProps);
let exportToolNew = (connectedToolNew)(ToolNew);
exportToolNew = withTranslation()(exportToolNew);
exportToolNew = withRouter(exportToolNew);
export { exportToolNew as ToolNew };