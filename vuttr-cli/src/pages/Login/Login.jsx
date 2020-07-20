import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import { Row, Col, Button, Container, Card } from 'react-bootstrap';


import { history } from '@theme';
import { Input } from '@theme';

import {
    auth,
    user,
    LOGIN,
    CREATE_USER
} from '@model';

import { Formik, Form } from 'formik';

class Login extends React.Component {

    // ///////////////////////////////////////////////////////////////////////////////
    onLogin = (fields, login) => {
        login(fields).then(
            history.push('/')
        )
    }
    // ///////////////////////////////////////////////////////////////////////////////
    // ///////////////////////////////////////////////////////////////////////////////
    onSave = (fields, save, login) => {
        save(fields).then(
            this.onLogin(fields, login)
        )
    }
    // ///////////////////////////////////////////////////////////////////////////////

    render() {

        const { t } = this.props;
        const { login, save } = this.props;

        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <Card>
                            <Card.Header>{t('def_signin')}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {t('def_signin_msg')}
                                </Card.Text>
                                <hr />
                                {/* ///////////////////////////////////////////////////////////////////////////////// */}
                                <Formik
                                    initialValues={auth.newOid}
                                    validationSchema={auth.validation}
                                    onSubmit={(values) => this.onLogin(values, login)}
                                >
                                    {(formik) => (
                                        <Form>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('user_email')}
                                                    placeholder={t('user_email')}
                                                    name='email'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('user_password')}
                                                    placeholder={t('user_password')}
                                                    type='password'
                                                    name='password'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Col md='auto'>
                                                    <Button type='submit'>{t('def_signin')}</Button>
                                                </Col>
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                        </Form>
                                    )}
                                </Formik>
                                {/* ///////////////////////////////////////////////////////////////////////////////// */}
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* ///////////////////////////////////////////////////////////////////////////////// */}
                    {/* ///////////////////////////////////////////////////////////////////////////////// */}
                    <Col md={6}>
                        <Card>
                            <Card.Header>{t('def_signup')}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    {t('def_signup_msg')}
                                </Card.Text>
                                <hr />
                                {/* ///////////////////////////////////////////////////////////////////////////////// */}
                                <Formik
                                    initialValues={user.newOid}
                                    validationSchema={user.validation}
                                    onSubmit={(values) => this.onSave(values, save, login)}
                                >
                                    {(formik) => (
                                        <Form>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('user_name')}
                                                    placeholder={t('user_name')}
                                                    name='name'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('user_email')}
                                                    placeholder={t('user_email')}
                                                    name='email'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Input {...formik}
                                                    label={t('user_password')}
                                                    placeholder={t('user_password')}
                                                    type='password'
                                                    name='password'
                                                />
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                            <Row>
                                                <Col md='auto'>
                                                    <Button type='submit'>{t('def_signup')}</Button>
                                                </Col>
                                            </Row>
                                            {/* // ///////////////////////////////////////////////////////////// */}
                                        </Form>
                                    )}
                                </Formik>
                                {/* ///////////////////////////////////////////////////////////////////////////////// */}

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container >
        );
    }
}

export function mapStateToProps(state) {
    const { loginReducer } = state.model;
    return { loginReducer };
};

function mapDispatchToProps(dispatch) {
    return {
        login: (data) => dispatch({ type: LOGIN, data }),
        save: (data) => dispatch({ type: CREATE_USER, data }),
    }
}

const connectedLogin = connect(mapStateToProps, mapDispatchToProps);
let exportLogin = (connectedLogin)(Login);
exportLogin = withTranslation()(exportLogin);
exportLogin = withRouter(exportLogin);
export { exportLogin as Login };