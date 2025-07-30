import { NextResponse } from "next/server";
import { EventModel, dbConnect } from "@/lib/server";

export async function GET(request: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);

    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    if (id || slug) {
      const event = await EventModel.findOne({
        status: "approved",
        ...(id ? { _id: id } : { slug }),
      });

      if (!event) {
        return NextResponse.json(
          { success: false, message: "Event not found" },
          { status: 404 }
        );
      }

      return NextResponse.json({ success: true, event });
    }

    // Default: fetch paginated list
    const date = searchParams.get("date");
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const page = parseInt(searchParams.get("page") || "1", 10);

    const query: Record<string, unknown> = { status: "approved" };
    if (date) query.date = date;

    const total = await EventModel.countDocuments(query);
    const events = await EventModel.find(query)
      .sort({ date: 1, time: 1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json({ success: true, events, total });
  } catch (error) {
    console.error("Approved Events GET error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}
