import { useRouter } from 'next/router'
import Modal from '../components/Modals'

export default () => {
  const router = useRouter()
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700">
        Product Purchased SusccessFully
      </h1>
      <Modal
        body="Product Purchased SusccessFully"
        head="Payment Done"
        trigFn={() => {
router.push("/shop")
        }}
        disable={false}
        goTo="Continue shop"
        mode="success"
        green={true}
      />
    </div>
  )
}
