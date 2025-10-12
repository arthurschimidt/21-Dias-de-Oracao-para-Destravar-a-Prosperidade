import { Card } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
}

export default function ContentCard({ 
  title, 
  children, 
  centered = false,
  className = ""
}: ContentCardProps) {
  return (
    <Card className={`p-8 mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-primary text-3xl font-semibold mb-6">{title}</h2>
      {children}
    </Card>
  );
}
