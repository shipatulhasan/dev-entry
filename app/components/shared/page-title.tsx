// components/PageTitle.tsx

type Props = {
  title: string;
  subtitle?: string;
};

export default function PageTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="space-y-2 mb-8">
      <h1 className="text-4xl font-bold">{title}</h1>

      {subtitle && (
        <p className="text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}