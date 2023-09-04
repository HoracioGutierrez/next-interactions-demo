import demos from "@/models/demos";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await dbConnect()
        const data = await demos.find({}, {}, { sort: { createdAt: -1 } })
        const res = {
            type: 'GET_DEMOS',
            payload: {
                demos: data || [],
            },
            error: null

        }
        return NextResponse.json(res)

    } catch (error) {
        const res = {
            type: 'GET_DEMOS',
            payload: {
                demos: [],
            },
            error: error
        }
        return NextResponse.json(res)
    }
}