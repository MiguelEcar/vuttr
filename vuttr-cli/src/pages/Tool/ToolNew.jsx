import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    Row,
    Modal,
    Button,
} from 'react-bootstrap';

import { Formik, Form } from 'formik';

import Chips from 'react-chips';

import {
    tool,
    CREATE_TOOL,
    NEW_TOOL,
} from '@model';
import { Input } from '@theme';

class ToolNew extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            show: false,
            chips: []
        }
    }

    // /////////////////////////////////////////////////////////////////////////////
    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true })
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    newForm = async () => {
        await this.props.newForm();
        this.handleShow();
    }
    // /////////////////////////////////////////////////////////////////////////////

    // /////////////////////////////////////////////////////////////////////////////
    onSubmit = async (values) => {
        values.tags = this.state.chips
        await this.props.createTool(values);
        this.handleClose();
        this.props.reloadPage();
    }
    // /////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { initialValues } = this.props;

        return (
            <>
                <Button className='fas fa-plus'
                    onClick={this.newForm}>
                    {t('def_btn_add')}
                </Button>

                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    backdrop='static'
                    keyboard={false}
                >
                    <Formik
                        initialValues={initialValues}
                        validationSchema={tool.validation}
                        onSubmit={(values) => this.onSubmit(values)}
                    >
                        {(formik) => (
                            <Form>

                                <Modal.Header closeButton>
                                    <Modal.Title><i className='fas fa-plus' />{t('def_add_new_tool')}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>


                                    {formik.values &&
                                        <>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('tool_title')}
                                                    placeholder={t('tool_title')}
                                                    name='title'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('tool_link')}
                                                    placeholder={t('tool_link')}
                                                    name='link'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('tool_description')}
                                                    placeholder={t('tool_description')}
                                                    name='description'
                                                    as='textarea'
                                                    rows='5'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <label>{t('tool_tags')}</label>
                                            
                                            <Chips
                                                value={this.state.chips}
                                                onChange={(chips) => this.setState({ chips })}
                                            />
                                            <i>{t('tool_tags_hint')}</i>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                        </>
                                    }

                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant='secondary' onClick={this.handleClose}>
                                        {t('def_close')}
                                    </Button>
                                    <Button variant='primary' type='submit' >
                                        {t('def_btn_add_tool')}
                                    </Button>
                                </Modal.Footer>

                            </Form>
                        )}
                    </Formik>
                </Modal>
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
        newForm: (id) => dispatch({ type: NEW_TOOL }),
        createTool: (data) => dispatch({ type: CREATE_TOOL, data }),
    }
}

const connectedToolNew = connect(mapStateToProps, mapDispatchToProps);
let exportToolNew = (connectedToolNew)(ToolNew);
exportToolNew = withTranslation()(exportToolNew);
exportToolNew = withRouter(exportToolNew);
export { exportToolNew as ToolNew };