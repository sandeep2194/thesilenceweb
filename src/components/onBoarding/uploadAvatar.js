import React, { Component, Fragment } from 'react';
import Avatar from 'react-avatar-edit'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import { Container, Row, Button, Col, Image } from 'react-bootstrap'
import { PersonBoundingBox } from 'react-bootstrap-icons'
import { uploadFile } from '../../utils/api'
import { handleUpdateUser } from '../../actions/authedUser'

class UploadAvatar extends Component {
    state = {
        preview: null,
        src: null,
        file: null
    }
    onClose = () => {
        this.setState({ preview: null })
    }
    onCrop = (preview) => {
        this.setState({ preview: preview })
    }
    onBeforeUpload = (element) => {
        if (element.target.files[0].size > 71680) {
            toastr.error('File Upload Error', "File size too big")
            element.target.value = ''
        }
    }
    onFileLoad = (file) => {
        this.setState({ file: file })
    }
    handlePicSubmit = async () => {
        const { stepCb, dispatch } = this.props
        const { file } = this.state
        const uploadedFile = await uploadFile(file)
        const fileUrl = uploadedFile.result[0]
        dispatch(handleUpdateUser({
            profilePic: fileUrl
        }))
        stepCb(4)
    }
    render() {
        return (
            <Fragment>
                <Container className='my-2'>
                    <Row className='pt-3 justify-content-center '>
                        <Avatar
                            width={300}
                            height={250}
                            onCrop={this.onCrop}
                            onClose={this.onClose}
                            onBeforeFileLoad={this.onBeforeFileLoad}
                            onFileLoad={this.onFileLoad}
                            src={this.state.src}
                        />

                    </Row>
                    <Row className='mt-3 justify-content-center'>
                        {(this.state.preview) ? <Image src={this.state.preview} alt="Preview" height={100} /> :
                            <PersonBoundingBox size={76} className='control-icons' />
                        }
                    </Row>
                    <Row className='mt-5 justify-content-center'>
                        <Col className='px-5'>
                            <Button type='button' size='md'
                                className='btn-block'
                                onClick={this.handlePicSubmit}
                            >Continue</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default connect()(UploadAvatar)