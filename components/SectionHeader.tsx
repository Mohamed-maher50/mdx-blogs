interface SectionHeaderProps {
  title: string;
  description?: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <header className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">
        {title}
      </h1>

      {description && (
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </header>
  );
};
