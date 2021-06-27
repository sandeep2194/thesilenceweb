import { useEffect } from 'react'
import { addScroll, handleSendData } from '../../actions/usageTracking'
import { connect } from 'react-redux'
import { useDebouncedCallback } from 'use-debounce';

const UserUsageReport = (props) => {
    const { dispatch } = props
    const debounced = useDebouncedCallback(
        () => { dispatch(addScroll()) }, 1000
    );
    useEffect(() => {
        const handleSendingUsage = () => {
            const hidden = document.hidden
            hidden &&
                dispatch(handleSendData())
        }
        window.addEventListener('scroll', debounced)
        document.addEventListener('visibilitychange', handleSendingUsage)
    }, [debounced, dispatch])
    return null
}

export default connect()(UserUsageReport)