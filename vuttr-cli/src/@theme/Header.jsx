import React from 'react';
import { withTranslation } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { Row, Col } from 'react-bootstrap';

import { httpAuthService } from '@http';
import { history } from '@theme';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    this.token();
  }

  /////////////////////////////////////////////////////////////////////////////////
  token = () => {

    try {
      this.setState({
        user: this.props.loginReducer.user
      })
    } catch (err) {

    }
  }
  /////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////
  onLogout = async (logout) => {
    await logout();
    await history.push('/');
    this.setState({
      user: null
    })
  }
  /////////////////////////////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////////////////////////////
  render() {
    const { t } = this.props;

    const { logout } = this.props;

    return (
      <>
        <div className='header'>
          <div style={{ float: 'right' }}>
            {this.state.user &&
              <Row>
                <Col md='auto'>
                  <i>{t('def_hello') + this.state.user.name}</i>
                  <p onClick={() => this.onLogout(logout)}
                    style={{ cursor: 'pointer' }} >
                    {t('def_signout')}
                  </p>
                </Col>
              </Row>
            }
          </div>
        </div>
      </>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////
export function mapStateToProps(state) {
  const { loginReducer } = state.model;
  return { loginReducer };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: httpAuthService.logout
  }
};
/////////////////////////////////////////////////////////////////////////////////

const connectedHeader = connect(mapStateToProps, mapDispatchToProps);
let exportHeader = (connectedHeader)(Header);
exportHeader = withTranslation()(exportHeader);
exportHeader = withRouter(exportHeader);
export { exportHeader as Header };