import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { addScrollPosition } from '../../actions/listsData'

const ScrollMemory = (props) => {
    useEffect(() => {
        const handleRecordScroll = () => {
            const { dispatch, name, scrollTo } = props
            const currentPosition = window.scrollY
            const sensitivity = window.innerHeight
            if (currentPosition > (scrollTo + sensitivity) || currentPosition < (scrollTo - sensitivity) || currentPosition < 450)
                dispatch(addScrollPosition(name, currentPosition < 450 ? 0 : currentPosition))
        }
        window.addEventListener('scroll', handleRecordScroll);
        return () => {
            window.removeEventListener('scroll', handleRecordScroll);
        }
    }, [props])

    useEffect(() => {
        const { scrollTo } = props
        window.scroll(0, scrollTo)
    }, [props])

    return (
        <Fragment>

        </Fragment>
    )
}
function mapStateToProps({ listsData }, props) {
    const listData = listsData[props.name]
    return {
        scrollTo: listData ? listData.scrollPosition : 0
    }
}
export default connect(mapStateToProps)(ScrollMemory)