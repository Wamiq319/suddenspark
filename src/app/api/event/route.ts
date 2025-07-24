import { NextResponse } from "next/server";
import { dbConnect, EventModel } from "@/lib/server";
import { uploadToCloudinary } from "@/lib/utils/uploadToCloudinary";

export async function POST(request: Request) {
  try {
    await dbConnect();

    const formData = await request.formData();

    const requiredFields = [
      "title",
      "description",
      "location",
      "date",
      "time",
      "category",
      "email",
    ] as const;

    const data: Record<string, string> = {};
    for (const field of requiredFields) {
      const value = formData.get(field);
      if (!value || typeof value !== "string") {
        return NextResponse.json(
          { success: false, message: `Missing or invalid field: ${field}` },
          { status: 400 }
        );
      }
      data[field] = value;
    }

    let imageUrl = "";
    let imageId = "";

    const imageFile = formData.get("image") as File | null;

    if (imageFile) {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      const uploadResult = await uploadToCloudinary(buffer, imageFile.type);
      imageUrl = uploadResult.url;
      imageId = uploadResult.public_id;
    }

    const createdEvent = await EventModel.create({
      ...data,
      image: imageUrl,
      imageId,
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
