import React from 'react';

import {
    Form,
    Col
} from 'react-bootstrap';

import { getIn } from 'formik';

export const Input = (props) => {

    return (

        <Form.Group as={Col} md={props.col} controlId={'id_' + props.name}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                as={props.as}
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                rows={props.rows}
                value={props.values[props.name]}
                onChange={props.handleChange}
                isValid={getIn(props.touched, props.name) && !getIn(props.errors, props.name)}
                isInvalid={getIn(props.touched, props.name) && getIn(props.errors, props.name)}
            />
            <Form.Control.Feedback type='invalid' tooltip>
                {getIn(props.errors, props.name)}
            </Form.Control.Feedback>
        </Form.Group>
    )

};

Input.defaultProps = {
    col: 12,
    type: 'text',
    as: 'input',
};