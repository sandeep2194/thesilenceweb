import React from 'react'
import { PenFill, TrashFill } from 'react-bootstrap-icons'
import SmallNewsListCard from './smallNewsListCard'
import { BottomScrollListener } from 'react-bottom-scroll-listener';

function userPostList(props) {
    const { user, isCurrentUser, scrollCb } = props
    return <ul>
        <BottomScrollListener onBottom={scrollCb} />
        {(user.news) ? user.news.map((n, i) => (
            <li key={i}>
                <SmallNewsListCard item={n} isCurrentUser={isCurrentUser} />
            </li>
        )) : null}
    </ul>
}

export default userPostList