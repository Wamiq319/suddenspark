"use client";

import Image from "next/image";
import Link from "next/link";
import { FiTag } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  slug: string;
  image?: string;
  category?: string;
}

export const EventCard = ({
  title,
  date,
  time,
  slug,
  image,
  category,
}: EventCardProps) => {
  return (
    <div className="card bg-base-100 shadow-md w-full h-96 flex flex-col overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200">
      <figure className="h-48 w-full overflow-hidden bg-gray-100 flex-shrink-0">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={320}
            height={192}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
            No image available
          </div>
        )}
      </figure>

      <div className="card-body px-5 py-5 flex flex-col justify-between flex-1 min-h-0">
        <div className="flex flex-col gap-3 min-h-0">
          {category && (
            <div className="inline-flex items-center gap-1 text-xs font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full flex-shrink-0 w-fit">
              <FiTag className="text-yellow-600 text-sm" />
              <span className="truncate max-w-24">{category}</span>
            </div>
          )}

          <h3 className="text-lg font-semibold line-clamp-2 flex-shrink-0 leading-tight">
            {title}
          </h3>
          <p className="text-sm text-gray-600 flex-shrink-0">
            {date} • {time}
          </p>
        </div>

        <div className="mt-4 flex-shrink-0">
          <Link href={`/events/${slug}`}>
            <Button
              color="blue"
              outline
              rounded
              className="text-sm px-4 py-2.5 w-full hover:bg-blue-50"
            >
              View Event
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
