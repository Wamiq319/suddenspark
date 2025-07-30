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
    const query: Record<string, unknown> = {};
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

// PATCH to approve or decline an event
export async function PATCH(request: Request) {
  try {
    await dbConnect();
    const { id, action, declineReason } = await request.json();
    if (!id)
      return NextResponse.json(
        { success: false, message: "Missing event ID" },
        { status: 400 }
      );

    if (!action || !["approve", "decline"].includes(action))
      return NextResponse.json(
        {
          success: false,
          message: "Invalid action. Must be 'approve' or 'decline'",
        },
        { status: 400 }
      );

    const updateData: {
      status: string;
      declineReason?: string;
    } = {
      status: action === "approve" ? "approved" : "declined",
    };

    if (action === "decline") {
      updateData.declineReason = declineReason || "";
    }

    const updated = await EventModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updated)
      return NextResponse.json(
        { success: false, message: "Event not found" },
        { status: 404 }
      );

    return NextResponse.json({ success: true, event: updated });
  } catch (error) {
    console.error("Admin PATCH error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update event status" },
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
