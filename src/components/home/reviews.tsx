import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';

export const reviews = [
  {
    name: 'Alice',
    review:
      'I love Planetary Swap! I have swapped so many clothes and found some amazing pieces.',
  },
  {
    name: 'Bob',
    review:
      'I have been using Planetary Swap for a few months now and I have saved so much money on clothes.',
  },
  {
    name: 'Charlie',
    review:
      'I love the community on Planetary Swap. Everyone is so friendly and helpful.',
  },
  {
    name: 'David',
    review:
      'I have found some amazing clothes on Planetary Swap. I would recommend it to anyone.',
  },
  {
    name: 'Eve',
    review:
      'I have saved so much money on clothes by using Planetary Swap. It is so easy to use.',
  },
];

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
        <p className="text-center">"{review}"</p>
      </CardContent>
    </Card>
  );
}
