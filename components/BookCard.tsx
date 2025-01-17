import React from "react";
import Link from "@/node_modules/next/link";
import BookCover from "./BookCover";

const BookCard = ({
  id,
  title,
  genre,
  color,
  cover,
  isLoanedBook = false,
}: Book) => (
  <li>
    <Link href={`/books/${id}`}>
      <BookCover coverColor={color} coverImage={cover} />
    </Link>
  </li>
);

export default BookCard;
