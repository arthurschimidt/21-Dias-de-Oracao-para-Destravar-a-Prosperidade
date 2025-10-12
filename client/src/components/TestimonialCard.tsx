import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 mb-6 shadow-md border-b-4 border-yellow-400">
      <div className="text-6xl text-gray-300 leading-none mb-2">"</div>
      <p className="text-base md:text-lg text-gray-700 mb-4 italic">
        {quote}
      </p>
      <div className="flex justify-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="font-bold text-gray-800">{author}</p>
      {role && <p className="text-sm text-gray-600">{role}</p>}
    </div>
  );
}
