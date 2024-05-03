import Link from "next/link";
import Card from "./Card";

const NotFound = ({ location }) => {
  return (
    <Card>
      <h1>Could not find location: {location}</h1>
      <Link href={"/"}>Go Home</Link>
    </Card>
  );
};

export default NotFound;
