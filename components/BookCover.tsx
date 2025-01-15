import React from "react";

const variantStyles = {
  exstraSmall: "book-cover-extra-small",
  small: "book-cover-extra-small",
  medium: "book-cover-medium",
  regular: "book-cover-regular",
  wide: "book-cover-wide",
};

interface Props {
  className?: string;
  variant?: "wide" | "small";
  coverColor?: string;
  coverUrl: string;
}

const BookCover = ({ className, variant, coverColor, coverUrl }: Props) => {
  return <div>BookCover</div>;
};

export default BookCover;
