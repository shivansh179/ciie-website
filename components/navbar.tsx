import {
  Button,
  Kbd,
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";

import { Logo } from "@/components/icons";
import CIIELogo from "@/public/ciie_logo.png";
import Image from "next/image";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      // endContent={
      // 	<Kbd className="hidden lg:inline-block" keys={["command"]}>
      // 		K
      // 	</Kbd>
      // }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit mr-3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src="/ciie_logo.png"
              alt="logo"
              width={40}
              height={30}
              className=" translate-y-1 mr-2"
            />
            <p className="font-bold text-inherit text-2xl">CIIE</p>
          </NextLink>
        </NavbarBrand>

        <div className="hidden sm:flex gap-4 justify-start ml-6">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles(
                    siteConfig.navItems.indexOf(item) === 0
                      ? { color: "primary" }
                      : { color: "foreground" }
                  ),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="primary"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal href={siteConfig.links.twitter}>
						<TwitterIcon className="text-default-500" />
					</Link> */}
          {/* <Link isExternal href={siteConfig.links.discord}>
						<DiscordIcon className="text-default-500" />
					</Link> */}
          {/* <Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link> */}
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

        <NavbarItem className="hidden md:flex">
          <Image src="/srm_logo.png" width={100} height={50} alt={""} className=" rounded-xl border-4 border-gray-400/20"></Image>
          {/* <Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button> */}
        </NavbarItem>
      </NavbarContent>



      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        {/* <Link isExternal href={siteConfig.links.github}>
					<GithubIcon className="text-default-500" />
				</Link>*/}


        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 0
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>




    </NextUINavbar>
  );
};
