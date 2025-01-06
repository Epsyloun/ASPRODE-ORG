const themeColor = "light";

function useThemeHook() {
  const theme = {
    palette: {
      mode: "light",
      ...(themeColor === "light" && {
        primary: {
          main: "#0f4a9a",
        },
        secondary: {
          main: "#ef7230",
        },
        white: {
          main: "#ffffff",
        },
        grey: {
          main: "#aaaaaa",
          light: "#cccccc",
          custom: "#E1E3E6",
          text: "#43474C",
        },
        black: {
          main: "#000000",
        },
        text: {
          primary: "#000000",
          grey: "#aaaaaa",
        },
        background: {
          grey: "#eeeeee",
        },
      }),
    },
    // typography: {
    //   fontFamily: ["Third-Font"].join(","),
    // },
  };

  return theme;
}

export { useThemeHook };
