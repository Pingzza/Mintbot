import { Box } from "@mui/material";
import Link from "next/link";

export default function Media() {
  const mediaList = [
    {
      title: "Github",
      linkText: "Pingzza",
      link: "https://github.com/",
    },
    {
      title: "Twitter",
      linkText: "@Cryptohunter_EN",
      link: "https://twitter.com/Cryptohunter_EN",
    },
    {
      title: "Polaris FORK",
      linkText: "Polaris",
      link: "https://web3polaris.xyz/",
    },
  ];

  return (
    <div className=" py-4">
      <div className=" flex items-center justify-center gap-x-4 max-sm:flex-col">
        {mediaList.map(({ title, linkText, link }) => {
          return (
            <div
              key={title}
              className=" flex items-center gap-2"
            >
              <span>{title}:</span>
              <Box
                component={Link}
                href={link}
                className=" hover:underline"
                sx={{
                  color: "primary.main",
                }}
              >
                {linkText}
              </Box>
            </div>
          );
        })}

      </div>
      <center>Open source code, you can check it when you want #transparency</center>
      { }
    </div>
  );
}
