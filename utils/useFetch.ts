import { publicRequest } from './apiEndpoints'
import { useEffect, useState } from 'react'

const useFetch = (api: string) => {
  const [state, setState] = useState<any>([])
  const [loading, setLoading] = useState<Boolean>(true)
  const [err, setErr] = useState<string | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const res: any = await publicRequest.get(api)
      if (!res.data) {
        console.log('Server down')
        setErr('server down')
      } else if (res.data.err) {
        setErr(res.data.err)
      } else {
        setState(res.data)
        setLoading(false)
        console.log('data', res.data)
      }
    }
    fetchData()
  }, [api])
  return [state, loading, err]
}
export default useFetch
