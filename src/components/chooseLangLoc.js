import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import CloseHeader from './closeBtnHeader'
import FeatherIcon from 'feather-icons-react';
import ChooseLocation from './chooseLocation'

class ChooseLangLoc extends Component {
    state = {
        selectedLanguages: [
            'hi'
        ]
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
        {
            name: 'বাংলা',
            abbreviation: 'বা',
            code: 'bn'
        },
        {
            name: 'தமிழ்',
            abbreviation: 'த',
            code: 'ta'
        },
        {
            name: 'ગુજરાતી',
            abbreviation: 'ગુ',
            code: 'gu',
        },
        {
            name: 'മലയാളം',
            abbreviation: 'മ',
            code: 'ml',
        }
    ]

    langChip = (language, index) => {
        const selected = this.state.selectedLanguages.includes(language.code)
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
                console.log('in selected')
                langs.splice(index, 1)
            } else {
                langs.push(code)
            }
            return {
                selectedLanguages: [...langs]
            }
        })
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={6}>
                            <CloseHeader heading='Choose Languages' />
                            <Row >
                                <Col >
                                    {
                                        this.languages.map((language, index) => this.langChip(language, index))
                                    }
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                <Col >
                                    <ChooseLocation />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default ChooseLangLoc