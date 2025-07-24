import { NextResponse } from "next/server";
import { dbConnect, EventModel, uploadToCloudinary } from "@/lib/server";
import type { Event } from "@/types";

export async function POST(request: Request) {
  try {
    await dbConnect();

    const formData = await request.formData();

    const title = formData.get("title")?.toString() || "";
    const description = formData.get("description")?.toString() || "";
    const location = formData.get("location")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const category = formData.get("category")?.toString() || "";
    const date = formData.get("date")?.toString() || "";
    const time = formData.get("time")?.toString() || "";
    const file = formData.get("image") as File | null;

    if (
      !title ||
      !description ||
      !location ||
      !email ||
      !category ||
      !date ||
      !time ||
      !file
    ) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const { url: image, public_id } = await uploadToCloudinary(file, "Events");

    const payload: Event = {
      title,
      description,
      location,
      email,
      category,
      date,
      time,
      image,
    };

    const createdEvent = await EventModel.create({
      ...payload,
      imageId: public_id,
      approved: false,
    });

    return NextResponse.json({ success: true, event: createdEvent });
  } catch (error) {
    console.error("Event creation error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create event",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
