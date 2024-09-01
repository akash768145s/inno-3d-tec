import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Product from "@/models/Product";

export async function GET(request, { params }) {
  const { id } = params;

  await connect();

  try {
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
