import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import { handleUpdateUser } from '../../actions/authedUser'
import { connect } from 'react-redux'
import history from '../../utils/history';
import { toastr } from 'react-redux-toastr'
class ChooseLang extends Component {
    state = {
        selectedLanguages: []
    }
    componentDidMount() {
        const { selectedLanguages } = this.props
        this.setState({ selectedLanguages: selectedLanguages })
    }
    languages = [
        {
            name: 'english',
            abbreviation: 'en',
            code: 'en',
        },
        {
            name: 'हिंदी',
            abbreviation: 'हि',
            code: 'hi',
        },
    ]
    langChip = (language, index) => {
        const selected = this.state.selectedLanguages && this.state.selectedLanguages.includes(language.code)
        return (
            <Button key={index} variant="outline-primary" size="md" className={selected ? 'm-2 lang-loc-topic-chipBtn active' : 'm-2 lang-loc-topic-chipBtn'}
                onClick={() => this.updateLang(language.code)}
            >
                <Row className='align-items-center'>
                    {
                        !selected &&
                        <span className="lan-abbreviation rounded-circle bg-primary">

                            <i className='pr-1'>
                                {language.abbreviation}
                            </i>
                        </span>
                    }

                    <span className={selected ? 'ml-2' : ''}>{language.name}</span>
                    {
                        selected &&
                        <i className="rounded-circle bg-white px-1 ml-2 mb-1">
                            <FeatherIcon icon='check' size="16" color="#4F4F4F" />
                        </i>

                    }
                </Row>
            </Button >
        )
    }
    updateLang = (code) => {
        this.setState((prevState) => {
            let langs = [...prevState.selectedLanguages]
            const index = langs.indexOf(code)
            const selected = langs.includes(code)

            if (selected) {
                langs.splice(index, 1)
            } else {
                langs.push(code)
            }
            return {
                selectedLanguages: [...langs]
            }
        })
    }
    handleLangSubmit = () => {
        const { selectedLanguages } = this.state
        const { dispatch, stepCb } = this.props
        stepCb &&
            stepCb(1)
        dispatch(handleUpdateUser({
            languages: selectedLanguages,
        }))

        if (!stepCb) {
            history.goBack()
            toastr.success('Languages Saved')
        }
    }
    render() {
        const { btnText } = this.props
        return (
            <Fragment>
                <Container className='my-5'>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <Row >
                                <Col >
                                    {
                                        this.languages.map((language, index) => this.langChip(language, index))
                                    }
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='mt-5 mx-1'>
                        <Button type="button" size='md' className='btn-block' onClick={this.handleLangSubmit}>{btnText}</Button>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps({ users }) {
    const userId = localStorage.getItem('userId')
    const user = users[userId]
    return {
        selectedLanguages: user ? user.languages : [],
    }
}
export default connect(mapStateToProps)(ChooseLang)