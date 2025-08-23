interface SkillSetProps {
  children: React.ReactNode;
  title: string;
}
export default function SkillSet({ children, title }: SkillSetProps) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="sm:text-2xl lg:text-xl font-semibold text-gray-300">
        {`< ${title} >`}
      </h3>
      <div className="flex flex-wrap gap-4">{children}</div>
    </section>
  );
}
