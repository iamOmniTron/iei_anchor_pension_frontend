import React from "react";
import {Link} from "react-router-dom";

export default function FooterAdmin() {
  return (
    <>
      <footer className="block py-4">
        <div className="container mx-auto px-4">
          <hr className="mb-4 border-b-1 border-blueGray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-12/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()} All Rights Reserved By {" "}
                <Link to="/" className="text-blueGray-500 hover:text-blueGray-800">
                 IEI Anchor Pension
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
