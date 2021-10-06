import React, { Fragment, useEffect, useState } from 'react'
import SinglePostHeader from '../common/singlePostHeader'
import { Image, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TimeAgo from 'timeago-react'
import ScrollMemory from '../common/scrollMemory'
import { handleSendClick } from '../../actions/news'
import { fetchNews } from '../../utils/api'
import SearchCard from '../common/searchCard';
import VideoPlayer from '../common/VideoPlayer'

const SingleNews = (props) => {
    const { newsId } = props.match.params
    const { imageUrl, authorName, shares, comments, pubDate, authorId, title, content, _id, postType, videoUrl } = props.item
    const { dispatch } = props
    const [related, setRelated] = useState([])
    const [relatedUrls, setRelatedUrls] = useState([])
    useEffect(() => {
        dispatch(handleSendClick(newsId))
        const { item } = props
        const { postType, title, } = item
        const firstWord = title.substring(0, title.indexOf(' '))
        fetchNews({ pageNo: 0, pageSize: 10, query: firstWord, postType, })
            .then((d) => {
                if (d.result && firstWord) {
                    setRelated(d.result)
                    const urls = d.result.map((d) => d.videoUrl)
                    setRelatedUrls(urls)
                }
            })
            .catch((err) => console.log(err))
    }, [newsId, dispatch, props])
    // console.log(related)
    return (
        <Fragment>
            <SinglePostHeader id={newsId} path={props.match.path} />
            <Row className='justify-content-center'>
                <Col lg={5} className='p-0 m-0'>
                    <Row>
                        <Col>
                            {postType === 'news' &&
                                <Image src={imageUrl} height={'250vh'} width='100%' />
                            }
                            {
                                postType === 'video' &&
                                <VideoPlayer videoUrl={relatedUrls.length > 1 ? relatedUrls : videoUrl} />
                            }
                        </Col>
                    </Row>
                    <Row className='m-4 justify-content-start border-bottom border-primary'>
                        <Col xs={3} className='m-0 p-0'>
                            <Link to={`/profile/${authorId}`}>
                                <p className='text-primary'>{authorName.toUpperCase()}</p>
                            </Link>
                        </Col>
                        <Col>
                            <Row className='justify-content-end'>
                                <p className='p-0 m-0 meta'>
                                    <TimeAgo datetime={pubDate} className='mx-1' />
                                </p>
                                <p className='p-0 m-0 mx-1 meta' >{shares ? shares : 0} Shares</p>
                                <p className='p-0 m-0 mx-1 meta'>{comments ? comments : 0} Comments</p>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='justify-content-start m-4'>
                        <h4 className='font-weight-bold'>{title}</h4>
                    </Row>

                    <Row className='justify-content-start mx-4'>
                        <ul>
                            {
                                postType === 'news' &&
                                content.map((p, i) => (
                                    <li key={i}>
                                        <span>{p}</span>
                                    </li>
                                ))
                            }
                            <ScrollMemory name={_id} />
                        </ul>
                    </Row>
                    <Row className='mx-4 mt-4 pl-2'>
                        {
                            related.length > 1 &&
                            <span>More Related</span>
                        }
                    </Row>
                    <Row className='pb-5 mb-5'>
                        <Col>
                            <ul>
                                {
                                    related.map((item, i) => (
                                        <li key={i}>
                                            {item.title !== title &&
                                                <SearchCard item={item} />
                                            }
                                        </li>
                                    ))
                                }

                            </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Fragment>
    )
}


function mapStateToProps({ news }, props) {
    const { newsId } = props.match.params
    let item = news[newsId]
    if (!item) {

    }
    return {
        item,
    }
}
export default connect(mapStateToProps)(SingleNews)