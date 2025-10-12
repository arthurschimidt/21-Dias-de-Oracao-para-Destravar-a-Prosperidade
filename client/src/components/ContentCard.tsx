import { Card } from "@/components/ui/card";

interface ContentCardProps {
  title: string;
  children: React.ReactNode;
  centered?: boolean;
  className?: string;
  icon?: React.ReactNode;
  bgColor?: string;
}

export default function ContentCard({ 
  title, 
  children, 
  centered = false,
  className = "",
  icon,
  bgColor = "bg-white"
}: ContentCardProps) {
  return (
    <Card className={`p-8 mb-10 ${bgColor} shadow-md ${centered ? 'text-center' : ''} ${className}`}>
      {icon && (
        <div className="flex justify-center mb-4">
          {icon}
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        {title}
      </h2>
      {children}
    </Card>
  );
}
