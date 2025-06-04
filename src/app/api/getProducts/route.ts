import queryProducts from "@/database/queryProducts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: any){
    const productsData = await queryProducts();
    return NextResponse.json(productsData);
}