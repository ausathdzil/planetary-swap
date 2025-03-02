import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';

export function ReviewCard({ name, review }: { name: string; review: string }) {
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <Card className="w-full max-w-[400px]">
      <CardContent className="flex flex-col items-center justify-center p-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Avatar>
            <AvatarFallback>{firstLetter}</AvatarFallback>
          </Avatar>
          <p className="text-sm font-medium">{name}</p>
        </div>
        <p className="text-center">&quot;{review}&quot;</p>
      </CardContent>
    </Card>
  );
}
