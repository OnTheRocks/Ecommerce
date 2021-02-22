import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true };
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
        required: true,
      },
    },
  ],
  shippingAddress: 
    {
      fullName: { Type: String, required: true },
      address: { Type: String, required: true },
      city: { Type: String, required: true },
      state: { Type: String, required: true },
      zip: { Type: String, required: true },
      country: { Type: String, required: true },
    },
  paymentMethod: { type: String, rquired: true },
  itemsPrice: { type: Number, required: true },
  shippingPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref:'User', required: true },
  isPaid: { type: Boolean, defualt: false},
  paidAt: { type: Date},
  isDeliverd: { type: Boolean, dfault: false }, 
  deliveredAt: { type: Date }, 
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;