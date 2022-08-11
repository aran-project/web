import Modal from '../components/Modals'

export default () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-700">
        Product Purchased SusccessFully
      </h1>
      <Modal
        body="Product Purchased SusccessFully"
        head="Payment Done"
        trigFn={() => {}}
        disable={false}
        goTo="Continue shop"
        mode="success"
      />
    </div>
  )
}
