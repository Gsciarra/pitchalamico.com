import Image from "next/image";
import logo from "../../../public/logo.svg";

console.log(logo);

export default function Logo() {
  const logoImageData = isImageData(logo) ? logo : null;
  return logoImageData ? (
    <Image
      src={logoImageData.src}
      width={logoImageData.width}
      height={logoImageData.height}
      alt={"Pitcha l'amico logo"}
      className={"inline"}
    />
  ) : null;
}

type ImageData = {
  src: string;
  width: number;
  height: number;
  blurDataURL: null | string;
  blurWidth: number;
  blurHeight: number;
};

function isImageData(data: unknown): data is ImageData {
  return (
    typeof data === "object" &&
    data !== null &&
    "src" in data &&
    "width" in data &&
    "height" in data &&
    "blurDataURL" in data &&
    "blurWidth" in data &&
    "blurHeight" in data
  );
}
