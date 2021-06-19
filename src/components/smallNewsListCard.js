import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom'

const SmallNewsListCard = (props) => {

    const { item, isCurrentUser } = props;
    return (
        <Col className='mt-3 p-0 m-0 '>
            <Row className='border rounded border-secondary p-0 m-0'>
                <Col xs={3} className='rounded-left mr-3 p-0 m-0'>
                    <Link to={`/news/${item._id}`}>
                        <Image src={item.imageUrl} alt='News Main Image'
                            className='rounded-left ' height='100%' width='120%' />
                    </Link>
                </Col>
                <Col className='p-0 ml-4 mr-2 mt-2'>
                    <Link to={`/news/${item._id}`}>
                        <h5 className='text-decoration-none'>{item.title}</h5>
                    </Link>
                </Col>

                {isCurrentUser &&
                    <Col xs={1} className='mr-2'>
                        <FeatherIcon icon='edit-2' size='16' color='#7B8794' />
                    </Col>}
            </Row>
        </Col>
    )
}

export default SmallNewsListCard