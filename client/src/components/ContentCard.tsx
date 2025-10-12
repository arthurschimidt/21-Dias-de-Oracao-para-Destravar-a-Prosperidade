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
  const emojiRegex = /(✨|🙏|📖|🌟|🌍|❓|💫|🌿|💬)/g;
  const parts = title.split(emojiRegex);
  
  return (
    <Card className={`p-8 mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl font-extrabold mb-6">
        {parts.map((part, index) => {
          if (part && part.match(emojiRegex)) {
            return <span key={index}>{part}</span>;
          }
          return (
            <span 
              key={index}
              className="bg-gradient-to-r from-purple-600 via-blue-500 to-amber-500 bg-clip-text text-transparent"
            >
              {part}
            </span>
          );
        })}
      </h2>
      {children}
    </Card>
  );
}
