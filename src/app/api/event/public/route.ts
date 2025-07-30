import { NextResponse } from "next/server";
import { EventModel, dbConnect } from "@/lib/server";

// GET all approved events (with optional date filter, pagination)
export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);

    const date = searchParams.get("date");
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const page = parseInt(searchParams.get("page") || "1", 10);

    const query: Record<string, unknown> = { approved: true };
    if (date) {
      query.date = date;
    }

    const total = await EventModel.countDocuments(query);

    const events = await EventModel.find(query)
      .sort({ date: 1, time: 1 }) // optional: sort chronologically
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json({ success: true, events, total });
  } catch (error) {
    console.error("Approved Events GET error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch approved events" },
      { status: 500 }
    );
  }
}
