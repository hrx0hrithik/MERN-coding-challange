import {ClockLoader} from 'react-spinners'

const LoadingComp = () => {
    return (
        <div className='flex flex-col items-center'>
            <ClockLoader color="#3664d7" />
            <p className='text-[32px]'>Loading data from Server Please wait ...</p>
        </div>
    )
}

export default LoadingComp