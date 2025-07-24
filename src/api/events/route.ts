// app/api/event/route.ts

import { NextResponse } from "next/server";
import { dbConnect, EventModel } from "@/lib/server";
import type { Event } from "@/types";

export async function POST(request: Request) {
  try {
    await dbConnect();

    const data = (await request.json()) as Partial<Event>;

    // Required fields based on your type
    const requiredFields: (keyof Event)[] = [
      "title",
      "description",
      "location",
      "date",
      "time",
      "category",
      "email",
      "image",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { success: false, message: `Missing field: ${field}` },
          { status: 400 }
        );
      }
    }

    const createdEvent = await EventModel.create({
      ...data,
      approved: false, // Admin approval pending
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
