import * as Yup from 'yup';


const newOid = {
    name: '',
    email: '',
    password: '',
};

const validation = Yup.object().shape({
    name: Yup.string()
        .required('This field is required!'),
    email: Yup.string()
        .email('Invalid Email!')
        .required('This field is required!'),
    password: Yup.string()
        .required('This field is required!'),
});

export const user = {
    newOid,
    validation
}