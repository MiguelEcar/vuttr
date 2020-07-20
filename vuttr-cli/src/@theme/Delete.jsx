import React from 'react';

import {
    Row,
    Col,
} from 'react-bootstrap';

// Sweet Alert
import swal from 'sweetalert';

class Delete extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            option: {
                title: this.props.t('def_dlg_remove_title'),
                text: this.props.t('def_dlg_remove_msg') + this.props.oid.title,
                icon: 'warning',
                buttons: {
                    cancel: true,
                    confirm: {
                        text: this.props.t('def_dlg_remove_btn'),
                        value: true,
                        visible: true,
                        className: 'bg-danger',
                        closeModal: true
                    }
                }
            }
        }
    }

    callback(isConfirm, swal) {
        if (isConfirm) {
            swal(this.props.t('def_removed'), '', 'success');
        } else {
            swal(this.props.t('def_cancel'), '', 'error');
        }
    }

    handleClick = (e) => {

        swal(this.state.option).then(
            (confirm) => {

                // press yes
                if (confirm) {
                    this.props.remove(this.props.oid);
                    return this.callback(confirm, swal);
                }

                return this.callback(confirm, swal);
            }
        );
    }

    render() {


        return (
            <>

                <Row>
                    <Col md='auto'>
                        <p className='fas fa-times' onClick={this.handleClick}
                            style={{ cursor: 'pointer' }} >
                            {this.props.t('def_btn_remove')}
                        </p>
                    </Col>
                </Row>

            </>
        );
    }

}

export { Delete };