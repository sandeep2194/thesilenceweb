import { useEffect } from 'react'
import { addScroll, handleSendData } from '../../actions/usageTracking'
import { connect } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce';

const UserUsageReport = (props) => {
    const { dispatch } = props
    const debounced = useDebouncedCallback(
        () => { dispatch(addScroll()) }, 1000
    );
    const handleSendingUsage = () => {
        const hidden = document.hidden
        hidden &&
            dispatch(handleSendData())
    }
    useEffect(() => {
        window.addEventListener('scroll', debounced)
        document.addEventListener('visibilitychange', handleSendingUsage)
    }, [debounced, handleSendingUsage])
    return null
}

export default connect()(UserUsageReport)