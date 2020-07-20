import * as Yup from 'yup';


const newOid = {
    title: '',
    link: '',
    description: '',
    tags: [],
};

const validation = Yup.object().shape({
    title: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(100, 'This field may have max 100 characters!')
        .required('This field is required!'),
    link: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(500, 'This field may have max 500 characters!')
        .required('This field is required!'),
    description: Yup.string()
        .min(2, 'This field must have at least 2 characters!')
        .max(500, 'This field may have max 500 characters!')
        .required('This field is required!'),
});

export const tool = {
    newOid,
    validation
}