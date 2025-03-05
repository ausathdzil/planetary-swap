import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { articles } from '@/lib/data';
import Link from 'next/link';

export default function BlogPage() {
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="mt-20 p-16 flex flex-col items-center gap-16">
      <h1 className="font-bold text-3xl">LATEST PLANETARY NEWS</h1>
      <ul className="grid grid-cols-4 gap-8">
        {sortedArticles.map((article) => (
          <li key={article.title}>
            <ArticleCard {...article} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function ArticleCard({
  title,
  author,
  date,
  summary,
  href,
}: {
  title: string;
  author: string;
  date: string;
  summary: string;
  href: string;
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardDescription>
          {new Date(date).toLocaleDateString('en-us', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}{' '}
          &bull; {author}
        </CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grow">
        <p>{summary}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Link className="w-full" href={href}>
          <Button className="w-full rounded-lg cursor-pointer">
            Read more
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
