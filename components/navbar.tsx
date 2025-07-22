"use client";

import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NAV_MENU = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "E-Simaksi", href: "/e-simaksi" },
  { name: "Public Feedback", href: "/aduan" },
  { name: "Contact Us", href: "/contact-us" },
];

function NavItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <Link href={href} legacyBehavior>
        <a className="flex items-center gap-2 font-medium">{children}</a>
      </Link>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);
  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as="a"
          href="https://www.material-tailwind.com"
          target="_blank"
          className="text-lg font-bold"
          color={isScrolling ? "blue-gray" : "white"}
        >
          Tanagupa Sites
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-gray-900" : "text-white"
          }`}
        >
          {NAV_MENU.map((item) => (
            <NavItem key={item.name} href={item.href}>
              {item.name}
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="text" color={isScrolling ? "gray" : "white"}>
            Log in
          </Button>
          <a href="https://www.material-tailwind.com/blocks" target="_blank">
            <Button color={isScrolling ? "gray" : "white"}>
              blocks
            </Button>
          </a>
        </div>
        <IconButton
          variant="text"
          onClick={handleOpen}
          color={isScrolling ? "gray" : "white"}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((item) => (
              <NavItem key={item.name} href={item.href}>
                {item.name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <Button variant="text">
              Log in
            </Button>
            <a href="https://www.material-tailwind.com/blocks" target="_blank">
              <Button color="gray">
                blocks
              </Button>
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
