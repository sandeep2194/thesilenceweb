import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux'
import { addScrollPosition } from '../../actions/listsData'

const ScrollMemory = (props) => {

    useEffect(() => {
        const handleRecordScroll = () => {
            const { dispatch, name } = props
            dispatch(addScrollPosition(name, window.scrollY))
        }
        window.addEventListener('scroll', handleRecordScroll);
        return () => {
            window.removeEventListener('scroll', handleRecordScroll);
        }
    }, [props])

    useEffect(() => {
        const { scrollTo } = props
        window.scroll(0, scrollTo)
    }, [])

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