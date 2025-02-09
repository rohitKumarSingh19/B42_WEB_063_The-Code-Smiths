import Order from "../Models/Order.js";

// Create an order
export const createOrder = async (req, res) => {
  try {
    const { user, products, totalAmount, shippingAddress } = req.body;

    const newOrder = new Order({
      user,
      products,
      totalAmount,
      shippingAddress,
    });

    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    res.status(500).json({ message: "Error creating order", error });
  }
};

// Get user orders
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.id;
    const orders = await Order.find({ user: userId }).populate("products.product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

// Update order status (Admin/Vendor Only)
export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { orderStatus } = req.body;

    const order = await Order.findByIdAndUpdate(orderId, { orderStatus }, { new: true });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Error updating order", error });
  }
};
