import React, { Fragment, Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import CloseHeader from './closeBtnHeader'
import FeatherIcon from 'feather-icons-react';

class ChooseLocation extends Component {
    state = {
        selectedLocations: [
            'Noida'
        ]
    }

    locations = [
        'Noida',
        'New Delhi',
        'Mumbai',
        'Pune',
        'Bhopal',
        'Patna',
        'Amritsar'
    ]

    locChip = (location, index) => {
        const selected = this.state.selectedLocations.includes(location)
        return (
            <Button key={index} variant="outline-primary" size="md" className={selected ? 'm-2 lang-loc-topic-chipBtn active' : 'm-2 lang-loc-topic-chipBtn'}
                onClick={() => this.updateLocation(location)}
            >
                <Row className='align-items-center'>
                    {
                        !selected &&
                        <span className="lan-abbreviation rounded-circle bg-primary">

                            <FeatherIcon icon='map-pin' size="16" color="#fff" />
                        </span>
                    }

                    <span className={selected ? 'ml-2' : ''}>{location}</span>
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
    updateLocation = (location) => {
        this.setState((prevState) => {
            let locations = [...prevState.selectedLocations]
            const index = locations.indexOf(location)
            const selected = locations.includes(location)

            if (selected) {
                console.log('in selected')
                locations.splice(index, 1)
            } else {
                locations.push(location)
            }
            return {
                selectedLocations: [...locations]
            }
        })
    }
    render() {
        return (
            <Fragment>
                <h6 className="ml-3 mb-3 mt-5">Choose Location(s)</h6>
                <Row >
                    <Col lg={6}>
                        {
                            this.locations.map((location, index) => this.locChip(location, index))
                        }
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default ChooseLocation