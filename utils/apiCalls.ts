import { publicRequest, ORDER } from './apiEndpoints'
type BuyCartItemInputs = {
  pid: string | number
  quantity: number
  address: string
  shipmentName: string
}
export const BuyCartItem = async ({
  pid,
  quantity,
  address,
  shipmentName,
}: BuyCartItemInputs) => {
  try {
    // publicRequest
    //   .post(ORDER, { pid, quantity, address, shipmentName })
    //   .then((res) => {
    //     if (!res.data || res.data.data.err) {
    //       return Promise.reject(res)
    //     } else {
    //       console.log(res.data.data)
    //       return res.data.url
    //     }
    //   })
    const res = await publicRequest.post(ORDER, {
      pid,
      quantity,
      address,
      shipmentName,
    })

    console.log(res.data)
    return res.data.data.url
  } catch (e) {
    console.log(e)
    return {
      err: 'Fetch Err',
    }
  }
}
