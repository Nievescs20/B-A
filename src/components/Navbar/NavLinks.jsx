import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import { links } from "../../data";

function NavLinks({ handleClose }) {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      <div>
        <Link to="/" onClick={() => handleClose(false)}>
          <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5">
            Home
          </h1>
        </Link>
      </div>
      {links.map((link) => (
        <div key={uuidv4()}>
          <div className="px-0 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <div>
                  {heading === link.name ? (
                    <GoChevronUp color="black" />
                  ) : (
                    <GoChevronDown />
                  )}
                </div>
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2"></span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="bg-white p-5 min-w-[250px] drop-shadow-lg">
                    {link.sublinks?.map((mysublinks) => (
                      <div key={uuidv4()}>
                        <h1 className="text-lg font-semibold underline">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks?.sublink.map((slink) => (
                          <li
                            className="text-sm text-gray-600 my-2.5 relative"
                            key={uuidv4()}
                          >
                            <Link
                              to={slink.link}
                              className="hover:text-secondary"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks) => (
              <div key={uuidv4()}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
                  ></h1>
                  <div
                    className={`${
                      heading === slinks.Head ? "md:hidden" : "hidden"
                    } mt-[-50px]`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-7" key={uuidv4()}>
                        <Link
                          to={slink.link}
                          onClick={() => handleClose(false)}
                        >
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div>
        <Link to="/contact-me" onClick={() => handleClose(false)}>
          <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5">
            Contact Me
          </h1>
        </Link>
      </div>
    </>
  );
}

export default NavLinks;
