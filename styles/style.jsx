import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "IBM Plex Sans, sans-serif",
    body: "IBM Plex Sans, sans-serif",
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label":
              {
                transform: "scale(0.85) translateY(-24px)",
                color: "#000000",
                borderRadius: "5px",
              },
            label: {
              color: "#000",
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
    Button: {
      variants: {
        primary: {
          bgColor: "lightMode.btnBgColor",
          size: "md",
          color: "lightMode.white",
          fontWeight: "700",
          _hover: {
            bgColor: "lightMode.btnBgColor",
          },
          _focus: {
            bgColor: "lightMode.btnBgColor",
          },
          _active: {
            bgColor: "lightMode.btnBgColor",
          },
        },
        blue: {
          bgColor: "lightMode.blue",
          size: "md",
          color: "lightMode.white",
          fontWeight: "700",
          _hover: {
            bgColor: "lightMode.blue",
          },
          _focus: {
            bgColor: "lightMode.blue",
          },
          _active: {
            bgColor: "lightMode.blue",
          },
        },
        danger: {
          bgColor: "red.500",
          color: "#f3f3f3",
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
    darkMode: {
      mainBgColor: "#243641",
      navBgColor: "#1C2A35",
      secBgColor: "#243641",
      miniBgColor: " #1C2A35",
      inputBgColor: "#1c2b36",
      btnTextColor: "black",
      darkTextColor: "#000000",
      mainTextColor: "#84C9FB",
      labelTextColor: "#D2D2D240",
      cardBgColor: "#1C2A35",
      labelBgColor: "#1991DD",
    },
    lightMode: {
      mainBgColor: "linear-gradient(to right, #9796F0 , #FBC7D4)",
      navBgColor: "#00609C",
      secBgColor: "#D9E3EB",
      inputBgColor: "white",
      miniBgColor: "#FFFFFF",
      darkTextColor: "#000000",
      mainTextColor: "#000000",
      btnTextColor: "black",
      labelTextColor: "#00000040",
      cardBgColor: "#FFFFFF",
      btnBgColor: "#59A9E9",
      labelBgColor: "#7BB4E3",
    },
  },
});