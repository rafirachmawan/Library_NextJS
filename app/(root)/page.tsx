import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { sampleBooks } from "@/constans/index";

const Home = () => (
  <>
    <BookOverview {...sampleBooks[0]} />
    <BookList
      title="Latest Books"
      Book={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);
export default Home;
