import React, { useRef } from 'react';
import { Row, Col } from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'
import TimeAgo from 'timeago-react';
import ReactionBar from '../common/reactionbar'

const VideoCard1 = (props) => {

    const testItem = {
        _id: 'G9xHxhBksQ',
        title: 'Amid UP rumblings, Yogi Adityanath in Delhi to meet Amit Shah, PM Modi',
        synopsis: 'Just a week ago, BJP general secretary (Organisation) B L Santhosh had held one-on-one meetings over three days in Lucknow with ministers in Adityanath\'s Cabinet, in the first such exercise since he took over as CM.',
        content: [
            'Amidst speculation about changes in his government in Uttar Pradesh, Chief Minister Yogi Adityanath arrived in Delhi Thursday for a series of meetings. While he held talks with Union Home Minister Amit Shah Thursday, he is expected to meet Prime Minister Narendra Modi and BJP president J P Nadda Friday.',
            'Sources said the trip was not scheduled and that the Chief Minister wants to “brief the Prime Minister” on the progress made by the state “in managing the Covid pandemic” and to discuss pending development projects.',
            'However, a party leader said that among the issues Adityanath discussed with Shah was the possibility of a Cabinet reshuffle as he has to keep the party leadership in the loop.',
            'Shah reportedly told the CM that he should “take everyone along” and that the government should represent all sections of society. This is significant as alleged bias towards the Thakur community has been one of the main complaints against the Adityanath government.',
            'Asked about his meeting with Shah Thursday, Adityanath called it “a courtesy visit”.',
            'Just a week ago, BJP general secretary (Organisation) , in the first such exercise since he took over as CM. In the feedback that Santhosh reportedly received on the functioning of the party and government, Adityanath “favouring” own community in appointments is said to have come up several times.',
            'Incidentally, Shah also received Lok Sabha MP from Mirzapur and Apna Dal (S) president Anupriya Patel and Sanjay Nishad of the NISHAD party Thursday. Both have considerable hold over their respective communities in UP.',
            'Later, Sanjay Nishad and his son, a BJP MP, met former bureaucrat and BJP MLC A K Sharma, who is considered close to Modi.',
            'Incidentally, apart from Shah, Adityanath Thursday met Jitin Prasada, who crossed over from the Congress a day earlier. While in the Congress, Prasada had highlighted alleged atrocities against Brahmins in UP.',
            'In an official statement on Santhosh’s visit, the BJP had said his meetings revolved around preparations for the Assembly elections due early next year. However, while ruling out any leadership change, the party had remained mum on a Cabinet reshuffle, which now seems imminent. Thursday’s meetings of Shah with various UP leaders are being seen in that context.',
            'Insisting that Adityanath’s meeting with the PM would be about the successful handling of Covid in UP, a state government official said, “While there were warnings that the cases in the state could touch over a lakh per day, the state has brought them down and today the number of active cases was only 12,243.”',
            'The official added that the daily tally, lowest since mid-March, is far lesser than states like Maharashtra, Tamil Nadu and Kerala.',
            'At the height of the second surge, the Adityanath government had faced public criticism from own leaders and workers over the Covid situation.',
            'The official said the CM will also reiterate the state’s demand “that the Centre distribute vaccines on the basis of population of a state”.',
            'At his meeting with Shah, Adityanath presented a report titled ‘Pravasi Sankat ka Samadhan’ on management of the migrant crisis resulting from the Covid lockdown. “It includes the initiatives that have helped Uttar Pradesh not just manage migrant movement but also the testing and vaccination drives that have helped it reduce the Covid load in a short time,” said a senior officer.',
            '',
            'Sources said the CM would present the report to Modi too at their meeting Friday.',
            'Officials said Adityanath also has with him details of a “unique” plan setting district-wise GDP targets in the state, based on each district’s opportunities and challenges, linking it to the PM’s goal of a $5 trillion mark for the Indian economy by 2025. The report has the progress made between 2017, when the Adityanath government came to power, and Financial Year 2019-20.',
            'Among the development projects to figure in the talks would be the pending Delhi-Mumbai Industrial Corridor and Uttar Pradesh Defence Corridor.'
        ],
        imageUrl: 'https://images.indianexpress.com/2021/06/Amit-Shah-Yogi.jpg',
        contentUrl: '',
        authorName: 'Indian Express',
        authorId: 'KgokofisJt',
        authorImage: 'https://www.bing.com/th?id=AMMS_ff877029a29a9b4111ebf708769f4c24&w=148&h=148&c=7&dpr=1.25&pid=SANGAM',
        views: 0,
        likesArr: [],
        retweetsArr: [
            '60b8e342fe07217c5ccbbfd0',
            '60b8e342fe07217c5ccbbfd0',
            '60b8e342fe07217c5ccbbfd0'
        ],
        commentsArr: [],
        sharesArr: [
            '60b8e342fe07217c5ccbbfd0'
        ],
        bookmarksArr: [
            '60b8e342fe07217c5ccbbfd0'
        ],
        _created_at: '2021-06-11T15:51:27.539+0000',
        _updated_at: '2021-06-11T15:51:27.539+0000',
        publishedAt: '2021-06-11T15:59:44.697+0000'
    }
    const player = useRef(null);

    const { title, authorName, shares, comments, publishedAt, authorId, _id } = testItem
    let url = "https://www.youtube.com/watch?v=P6dvVp3Wwso"
    return (
        <Col>
            <Row className='justify-content-center bg-white pb-2 border-bottom border-light shadow-sm'>
                <Col >
                    <Row className='px-3'>
                        <Col className='p-0 m-0'>
                            <ReactPlayer url={url} width={"auto"} height={"30vh"}
                                light playing controls
                                ref={player}
                                config={{
                                    youtube: {
                                        playerVars: {
                                            mildmodestbranding: 1,
                                            fs: 0
                                        }
                                    },
                                }}
                                onEnded={() => player.current.showPreview()}
                            />
                        </Col>
                    </Row>
                    <Col className='px-3'>
                        <Row className='justify-content-center my-3'>
                            <Col className='mt-2'>
                                <h5 className='font-weight-bold'>{title}</h5>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={4}>
                                <Link to={`/profile/${authorId}`}>
                                    <p className='text-primary'>{authorName.toUpperCase()}</p>
                                </Link>
                            </Col>
                            <Col className='px-2'>
                                <Row className='justify-content-end px-3'>
                                    <p className='p-0 m-0 meta'>
                                        <TimeAgo time={publishedAt} className='mx-1' />
                                    </p>
                                    <p className='p-0 m-0 mx-1 meta' >{shares ? shares : 0} Shares</p>
                                    <p className='p-0 m-0 mx-1 meta'>{comments ? comments : 0} Comments</p>
                                </Row>

                            </Col>
                        </Row>
                        <Row className='justify-content-start'>

                            <ReactionBar newsItem={testItem} id={_id} />
                        </Row>
                    </Col>

                </Col>
            </Row>
        </Col>
    )
}

export default VideoCard1