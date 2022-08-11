import { useQuery } from '@tanstack/react-query'

// zod example for User
const useUserQuery = () => {
  return useQuery(['user'], async () => {
    return await (await fetch('https://randomuser.me/api')).json()
  })
}

 const userComponent = () => {
  const { data, error } = useUserQuery()
  if (error || !data) {
    return <div>Something went wrong</div>
  }

  return <div>{JSON.parse(data)}</div>
}
export default userComponent