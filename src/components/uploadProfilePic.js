import React, { Component, Fragment } from 'react';
import Avatar from 'react-avatar-edit'
import { toastr } from 'react-redux-toastr'
import { connect } from 'react-redux'
import BackHeader from './backheader'
import { Container, Row, Button, Col } from 'react-bootstrap'
import { PersonBoundingBox } from 'react-bootstrap-icons'
class UploadProfilePic extends Component {

    state = {
        preview: null,
        src: null
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
        //todo dispatch api call to users API to upload pic
    }
    render() {
        return (
            <Fragment>
                <BackHeader pageName='Upload Profile Pic' />
                <Container>
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
                    <Row className='mt-5 justify-content-center'>
                        {(this.state.preview) ? <img src={this.state.preview} alt="Preview" /> :
                            <PersonBoundingBox size={76} className='control-icons' />
                        }
                    </Row>
                    <Row className='p-5 justify-content-center'>
                        <Col lg={6} className='px-5'>
                            <Button type='submit' size='sm'
                                className='btn-block'
                                onClick={this.onFileLoad}
                            >Save</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default connect()(UploadProfilePic)