import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

type BookCoverVariant = "exstraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyles: Record<BookCoverVariant, string> = {
  exstraSmall: "book-cover-extra-small",
  small: "book-cover-extra-small",
  medium: "book-cover-medium",
  regular: "book-cover-regular",
  wide: "book-cover-wide",
};

interface Props {
  className?: string;
  variant?: BookCoverVariant;
  coverColor: string;
  coverUrl: string;
}

const BookCover = ({
  className,
  variant = "regular",
  coverColor = "#012B48",
  coverImage = "https://placehold.co/400x600.png",
}: Props) => {
  return (
    <div
      className={cn(
        "relative transition-all duration-300",
        variantStyles[variant],
        className
      )}
    >
      Book Side SVG
      <div
        className="absolute z-10"
        style={{ left: "12%", width: "87.5%", height: "88%" }}
      >
        <Image
          src={coverImage}
          alt="Book Cover"
          fill
          className="rounded-sm  object-fill"
        />
      </div>
    </div>
  );
};

export default BookCover;
