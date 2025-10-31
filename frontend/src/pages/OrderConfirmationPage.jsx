
const checkout = {
  _id: '12345',
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: '1',
      name: 'Sneaker',
      size: 'M',
      color: 'white',
      price: 175,
      quantity: 1,
      image: "https://picsum.photos/150?random=2"
    },
    {
      productId: '2',
      name: 'shirt',
      size: 'L',
      color: 'black',
      price: 175,
      quantity: 1,
      image: "https://picsum.photos/150?random=2"
    },
  ],
  shippingAddress: {
    address: '123 faishon street',
    city: 'new York',
    country: 'usa'
  }
  
}
console.log(checkout.checkoutItems.color)

const OrderConformationPage = () => {

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt)
    orderDate.setDate(orderDate.getDate() + 10)
    return orderDate.toLocaleDateString()
    
  }
  



  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-6">
        Thank You for your order!
      </h1>

      {checkout && 
      <div className="p-6 rounded-lg border">
        <div className="flex justify-between mb-20">
        {/* order id and details  */}
        <div>
          <h2 className='text-xl font-semibold'>
            Order ID: {checkout._id}

          </h2>
          <p className='text-gray-500'>
            Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* estimated delivery  */}
        <div>
          <p className=" text-emerald-700 text-sm">Estimated Delivery: {calculateEstimatedDelivery(checkout.createdAt)}</p>
        </div>

        </div>

        {/* order Items  */}
        <div className="mb-20">
          {checkout.checkoutItems.map((item)=>(
            <div key={item.productId} 
            className='flex items-center mb-4'>
              <img src={item.image} alt={item.name}
              className='h-16 w-16 object-cover rounded-md mr-4' />

              <div>
                <h4 className="text-md font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500 ">{item.color} | {item.size}</p>
              </div>
              <div className='ml-auto text-right '>
                <p className="text-md">${item.price}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>

              </div>



            </div>

          ))}
        </div>

        {/* Payment & delivery info  */}

        <div className="grid grid-cols-2 gap-8">

          <div className="">
            <h4 className="text-lg font-semibold mb-2">payment</h4>
              <p className="text-gray-600">Paypal</p>           
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className='text-gray-600'>{checkout.shippingAddress.address}</p>
              <p className='text-gray-600'>{checkout.shippingAddress.city}, {" "} 
                {checkout.shippingAddress.country}
              </p>
            
          </div>
        </div>

      </div>
      
      }
    </div>
  )
}

export default OrderConformationPage
