import { ChevronLeftIcon } from '@heroicons/react/outline'
import { useHistory } from 'react-router-dom'
import EditIcon from './Edit-icon'

export default function BackBar() {
  const history = useHistory()
  const onClick = function () {
    if (history.length === 1) {
      history.push('/')
      return
    }

    history.goBack()
  }

  return (
    <div
      tw="w-full h-10 fixed flex items-center px-2 bg-opacity-70 bg-white"
      className="glass"
    >
      <EditIcon onClick={onClick}>
        <ChevronLeftIcon tw="h-4 w-4 text-gray-600" />
      </EditIcon>
    </div>
  )
}
