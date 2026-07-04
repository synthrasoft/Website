import { siteImages } from "@/data/images";

interface ImageBannerProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageBanner = ({ src, alt, className = "" }: ImageBannerProps) => (
  <div className={`relative overflow-hidden ${className}`}>
    <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
  </div>
);

const StudioStrip = () => (
  <section className="border-b border-border py-8 sm:py-10">
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid items-center gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <h2 className="font-heading text-2xl leading-tight sm:text-3xl">
            Built in Plainsboro. Working everywhere.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            A senior team of strategists, designers, and engineers, with no account-manager middle layer,
            no bloated retainers.
          </p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border md:aspect-[16/11]">
          <img
            src={siteImages.workspace}
            alt="Synthrasoft Solutions team workspace"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export { ImageBanner, StudioStrip };
