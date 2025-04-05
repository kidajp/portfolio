import Image, { ImageProps } from "next/image";
import { cn } from "@/utils/cn";

export const CoverImage = ({ alt, className, ...props }: ImageProps) => {
  return (
    <Image
      className={cn("aspect-video h-auto w-full rounded-md", className)}
      alt={alt}
      {...props}
    />
  );
};
