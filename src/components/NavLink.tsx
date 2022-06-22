import { useColorModeValue } from "@chakra-ui/color-mode";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextLink from "next/link";

export const NavLink = (props: { [x: string]: any; href: any; name: any; }) => {
    const { href, name, ...rest } = props;
    var isActive = false;
    const { pathname } = useRouter();
  
    if (href !== "/") {
      const [, group] = href.split("/");
  
      isActive = pathname.includes(group);
    } else {
      if (href === pathname) {
        isActive = true;
      }
    }
  
    return (
      <NextLink href={href} passHref>
        <Button
          aria-current={isActive ? "page" : undefined}
          variant="ghost"
          size="md"
          {...rest}
          _activeLink={{
            color: useColorModeValue("neutral.1100", "neutralD.1100"),
            bg: useColorModeValue("neutral.100", "neutralD.300"),
          }}
          _hover={{
            bg: useColorModeValue("neutral.200", "neutralD.200"),
          }}
          px={4}
        >
          {name}
        </Button>
      </NextLink>
    );
  }