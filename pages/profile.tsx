import { useContext } from 'react'
import { UserContext } from '../hooks/UserContext'

const profile = () => {
  const { logged } = useContext(UserContext)

  return <div className="">{logged ? 'yes logged' : 'not logged'}</div>
}
export default profile
