import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Button, Image, Modal, Form } from 'react-bootstrap'
import BackHeader from '../common/backheader'
import { connect } from 'react-redux'
import { Formik, Form as MikForm, } from 'formik'
import * as Yup from 'yup';
import { TextInput, TextArea } from '../common/formFields'
import FeatherIcon from 'feather-icons-react';
import { save } from '../../actions/drafts'

class AddPostV2 extends Component {
    state = {
        modal: false,
        files: {},
        fileUrls: []
    }
    formRef = React.createRef()
    formikRef = React.createRef()

    componentWillUnmount() {
        const { fileUrls } = this.state
        fileUrls.forEach((url) => URL.revokeObjectURL(url))
    }
    handleNext = () => {
        if (this.formikRef.current) {
            const { values } = this.formikRef.current
            alert(values)
        }
    }
    handleSubmitThroughRef = () => {
        this.formRef.current.dispatchEvent(
            new Event("submit", { cancelable: true, bubbles: true })
        );
    };
    handleModal = () => {
        this.setState((prevState) => ({ modal: !prevState.modal }))
    }
    handleFilesChange = (e) => {
        e.preventDefault()
        const { values } = this.formikRef.current
        const { dispatch } = this.props
        const files = e.target.files
        let fileUrls = []
        Object.values(files).forEach(file => fileUrls.push(window.URL.createObjectURL(file)))
        this.setState({ files: files, modal: false, fileUrls, })
        dispatch(save({ ...values, files }))
    }
    removeImage = (i) => {
        this.setState((prevState) => {
            let { files, fileUrls } = prevState
            Object.values(files).splice(i, 1)
            fileUrls.splice(i, 1)
            return {
                files, fileUrls,
            }
        })
    }
    render() {
        const { user, draft } = this.props
        const { profilePic } = user
        const { title, body } = draft
        const { modal, fileUrls } = this.state
        return (
            <Fragment>
                <BackHeader pageName='Add a Post' >
                    <Button type='button' onClick={this.handleSubmitThroughRef} size='sm'>Next</Button>
                </BackHeader>
                <Container>
                    <Col lg={6} className='mt-3 p-0'>
                        <Formik
                            enableReinitialize
                            innerRef={this.formikRef}
                            initialValues={{ title: title, body: body, }}
                            validationSchema={Yup.object({
                                title: Yup.string()
                                    .min(10, 'Must be at least 50 characters')
                                    .required('Required'),
                                body: Yup.string()
                                    .min(140, 'Must be at least 140 characters')
                                    .required('Required')
                            })}
                        >
                            <MikForm ref={this.formRef} onSubmit={this.handleNext}>
                                <Row>
                                    <Col sm={1} xs={1} className='ml-1'>
                                        <Image src={profilePic} className='rounded-circle' height={40} width={40} />
                                    </Col>
                                    <Col className='ml-2 mt-1'>
                                        <TextInput name='title' type='text' placeholder='Title' />
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Col sm={1}></Col>
                                    <Col>
                                        <TextArea name='body' placeholder='your story' rows={12} />
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Col className='ml-2'>
                                        {
                                            fileUrls.map((file, i) => (
                                                <Col key={i} className='mx-2' style={{
                                                    backgroundImage: `url(${file})`,
                                                    height: '50px',
                                                    width: '50px',
                                                    backgroundRepeat: 'contain'
                                                }}>
                                                    <Row className='justify-content-end'>
                                                        <FeatherIcon icon='x' size='18' color='#7B8794' onClick={() => this.removeImage(i)} className='m-1' />
                                                    </Row>
                                                </Col>
                                            ))
                                        }
                                    </Col>
                                </Row>
                                <Row className='mt-4'>
                                    <Col className='ml-3'>
                                        <FeatherIcon icon='camera' size={20} color='#2F80ED' onClick={this.handleModal} />
                                        <FeatherIcon icon='paperclip' size={20} color='#2F80ED' className='ml-3' />
                                    </Col>
                                </Row>
                                <Modal show={modal} onHide={this.handleModal} centered>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Media Uploader</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form.Control name='files' type='file' multiple
                                            onChange={this.handleFilesChange}
                                            accept="image/png, image/jpeg"
                                        />
                                    </Modal.Body>
                                </Modal>
                            </MikForm>
                        </Formik>
                    </Col>
                </Container>

            </Fragment >
        )
    }
}
function mapStateToProps({ users, drafts }) {
    const userId = localStorage.getItem('userId')
    const user = users[userId]
    return {
        user,
        draft: drafts
    }
}
export default connect(mapStateToProps)(AddPostV2)