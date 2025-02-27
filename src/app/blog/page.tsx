import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const articles = [
  {
    title: 'Masa Depan Fashion Berkelanjutan di Indonesia',
    author: 'Ausath Ikram',
    date: '1 Februari 2025',
    summary:
      'Industri fashion di Indonesia terus berkembang pesat, namun di balik gemerlapnya dunia mode, terdapat dampak lingkungan yang cukup besar.',
    href: '/blog/masa-depan-fashion',
  },
  {
    title: 'Tukar Pakaian, Solusi untuk Mengurangi Limbah Fashion',
    author: 'Aydie Rahma',
    date: '15 Januari 2025',
    summary:
      'Industri fashion menjadi salah satu penyumbang terbesar limbah tekstil di dunia. Setiap tahun, jutaan ton pakaian berakhir di tempat pembuangan sampah.',
    href: '/blog/tukar-pakaian',
  },
];

export default function BlogPage() {
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section className="mt-20 p-16 flex flex-col items-center gap-16">
      <h1 className="font-bold text-3xl">LATEST NEWS</h1>
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
    <Card className="h-[300px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{author}</CardDescription>
        <p>{date}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{summary}</p>
      </CardContent>
      <CardFooter>
        <Link className="w-full" href={href}>
          <Button className="w-full rounded-lg cursor-pointer">Read More</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
