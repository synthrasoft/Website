interface SectionHeaderProps {
  number: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ number, title, description, align = "left" }: SectionHeaderProps) => {
  return (
    <div
      data-reveal
      className={align === "center" ? "mb-6 text-center" : "mb-6 max-w-2xl"}
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {number}
      </p>
      <h2 className="font-heading text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
