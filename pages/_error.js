import React from "react";
import Link from "next/link";

const indexPage = () => (
  <div>
    <h1>Oops, something went wrong.</h1>
    <p>
      Try{" "}
      <Link href="/">
        <a>going back</a>
      </Link>
    </p>
  </div>
);

export default indexPage;
