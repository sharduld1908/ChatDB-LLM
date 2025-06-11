import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Body() {
  return (
    <div className='h-full flex flex-col sm:flex-row'>
        
        <div className='w-full sm:w-1/3 p-4'>
            <LeftContent />
        </div>

        <div className="hidden sm:block w-px bg-gray-300"></div>

        <div className="w-full sm:w-2/3 p-4">
            <RightContent />
        </div>

    </div>
  )
}

export default Body