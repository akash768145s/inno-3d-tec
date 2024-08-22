import connect from "../../utils/db"; 
import Cart from "../../models/Cart"; 

export default async function handler(req, res) {
  await connect();

  switch (req.method) {
    case "GET":
      try {
        const cartItems = await Cart.find(); // Adjust the query as needed
        res.status(200).json({ items: cartItems });
      } catch (error) {
        res.status(500).json({ message: "Failed to fetch cart items" });
      }
      break;

    case "POST":
      try {
        const { product } = req.body;

        res.status(200).json({ message: "Product added to cart" });
      } catch (error) {
        res.status(500).json({ message: "Failed to add product to cart" });
      }
      break;

    case "DELETE":
      try {
        const { productId } = req.body;
        // Implement your logic to remove a product from the cart
        // Example: await Cart.deleteOne({ _id: productId });
        res.status(200).json({ message: "Product removed from cart" });
      } catch (error) {
        res.status(500).json({ message: "Failed to remove product from cart" });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
