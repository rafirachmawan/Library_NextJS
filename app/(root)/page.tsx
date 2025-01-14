import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";

const Home = () => (
  <>
    <BookOverview />
    <BookList />
  </>
);
export default Home;
