import React, { useEffect, useState } from "react";
import { Flex, Text, Icon } from "@tremor/react";
import { CashIcon } from "@heroicons/react/outline";
import Link from "next/link";
import authTimeToken from "@/fetch/auth/authTimeToken";
type Props = {};

const naigationLinkes = [
  {
    name: "Home",
    href: "/",
  }, 

  {
    name: "About",
    href: "/about",
  },

  {
    name: "Login",
    href: "/login",
  }
]

function Navbar({}: Props) {
  const [toggle, setToggle] = useState(false);
  const [authState, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      if ((await authTimeToken())) {
        setAuth(true)
      }else {
        setAuth(false)
      }
    })();
  }, [])
  return (
    <div>
      <nav>
        <div className="flex justify-between p-2 min-h-[5vh] items-center bg-zinc-100">
          <section>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </Link>
          </section>

          {/* toggle button */}
          <section>
            <button onClick={() => setToggle((prev) => !prev)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </section>
        </div>

        {/* toggle nav bar */}

        {toggle ? (
          <section className="transition-all delay-300 shadow-md shadow-slate-200">
            <ul className=" flex flex-col">
              {naigationLinkes.map((nav) => {
                return (
                  <li className="pt-2" key={nav.name}>
                    <Link href={nav.href}>
                      {nav.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
