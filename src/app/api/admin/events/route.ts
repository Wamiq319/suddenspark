import { NextResponse } from "next/server";
import { dbConnect, EventModel } from "@/lib/server";

// GET all events (pending + approved)
export async function GET(request: Request) {
  try {
    await dbConnect();
    // Parse date, limit, and page from query string
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const page = parseInt(searchParams.get("page") || "1", 10);
    let query: any = {};
    if (date) {
      query.date = date;
    }
    const total = await EventModel.countDocuments(query);
    const events = await EventModel.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    return NextResponse.json({ success: true, events, total });
  } catch (error) {
    console.error("Admin GET error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

// PATCH to approve an event
export async function PATCH(request: Request) {
  try {
    await dbConnect();
    const { id } = await request.json();
    if (!id)
      return NextResponse.json(
        { success: false, message: "Missing event ID" },
        { status: 400 }
      );

    const updated = await EventModel.findByIdAndUpdate(
      id,
      { approved: true },
      { new: true }
    );
    if (!updated)
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 }
      );

    return NextResponse.json({ success: true, event: updated });
  } catch (error) {
    console.error("Admin PATCH error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to approve event" },
      { status: 500 }
    );
  }
}

// DELETE event
export async function DELETE(request: Request) {
  try {
    await dbConnect();
    const { id } = await request.json();
    if (!id)
      return NextResponse.json(
        { success: false, message: "Missing event ID" },
        { status: 400 }
      );

    const deleted = await EventModel.findByIdAndDelete(id);
    if (!deleted)
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 }
      );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin DELETE error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete event" },
      { status: 500 }
    );
  }
}
