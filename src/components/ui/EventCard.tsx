"use client";

import Image from "next/image";
import Link from "next/link";
import { FiTag } from "react-icons/fi";
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
    <div className="card bg-base-100 shadow-md w-full max-w-sm h-[480px] flex flex-col overflow-hidden border border-gray-100 hover:shadow-lg transition">
      <figure className="h-48 w-full overflow-hidden bg-gray-100">
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

      <div className="card-body px-4 py-5 flex flex-col justify-between">
        <div>
          {category && (
            <div className="inline-flex items-center gap-1 text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full mb-2">
              <FiTag className="text-yellow-600 text-sm" />
              {category}
            </div>
          )}

          <h3 className="text-lg font-semibold mb-1 line-clamp-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-1">
            {date} • {time}
          </p>
          <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
        </div>

        <div className="mt-4">
          <Link href={`/events/${slug}`}>
            <Button
              color="blue"
              outline
              rounded
              className="text-sm px-4 py-2 w-full"
            >
              View Event
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
