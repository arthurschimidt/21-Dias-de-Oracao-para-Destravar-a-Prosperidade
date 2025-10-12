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
      <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 via-blue-500 to-amber-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {children}
    </Card>
  );
}
