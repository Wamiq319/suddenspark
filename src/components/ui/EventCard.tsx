"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  slug: string;
  image?: string;
  category?: string;
}

export const EventCard = ({
  id,
  title,
  description,
  date,
  time,
  slug,
  image,
  category,
}: EventCardProps) => {
  return (
    <div className="card bg-base-100 shadow-sm w-full max-w-sm text-left">
      <figure className="h-48 w-full overflow-hidden bg-gray-200">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={192}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
            No image available
          </div>
        )}
      </figure>

      <div className="card-body px-4 py-5">
        {category && (
          <div className="text-xs font-semibold gold mb-2">{category}</div>
        )}

        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">
          {date} • {time}
        </p>
        <p className="text-sm text-gray-700 line-clamp-2">{description}</p>

        <div className="mt-4">
          <Link href={`/events/${slug}`}>
            <Button color="blue" outline rounded className="text-sm px-4 py-2">
              View Event
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
