import Link from "next/link";
import { useState } from "react";

function ServicesLink({ LinkContent, link }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div className={`w-full h-1/2 p-4 mt-2 border border-black `}>
      <Link href={link}>
        <a
          className={`h-1/2 p-4 mt-4 w-full border border-black hover:text-white hover:bg-black ${
            clicked ? "text-white bg-black" : ""
          }`}
          onClick={() => setClicked(!clicked)}
        >
          {LinkContent}
        </a>
      </Link>
    </div>
  );
}

export default ServicesLink;
