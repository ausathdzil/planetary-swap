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
    title: 'Masa Depan Fashion Berkelanjutan',
    author: 'Ausath Ikram',
    date: '2025-01-20',
    summary:
      'Industri fashion di Indonesia terus berkembang pesat, namun di balik gemerlapnya dunia mode, terdapat dampak lingkungan yang cukup besar.',
    href: '/blog/masa-depan-fashion',
  },
  {
    title: 'Tukar Pakaian',
    author: 'Aydie Rahma',
    date: '2025-01-10',
    summary:
      'Industri fashion menjadi salah satu penyumbang terbesar limbah tekstil di dunia. Setiap tahun, jutaan ton pakaian berakhir di tempat pembuangan sampah.',
    href: '/blog/tukar-pakaian',
  },
  {
    title: 'Kisah Sukses Pengusaha Fashion Lokal',
    author: 'Ausath Ikram',
    date: '2025-01-05',
    summary:
      'Industri fashion lokal semakin berkembang pesat, berkat semangat para pengusaha muda yang berani mengambil risiko. Berikut kisah sukses mereka.',
    href: '#',
  },
  {
    title: 'Mengenal Lebih Dekat Teknik Shibori',
    author: 'Aydie Rahma',
    date: '2025-01-01',
    summary:
      'Shibori adalah teknik pewarnaan tekstil tradisional Jepang yang kini semakin populer di kalangan desainer fashion.',
    href: '#',
  },
  {
    title: 'Mengenal Berbagai Jenis Kain',
    author: 'Ausath Ikram',
    date: '2024-12-20',
    summary:
      'Kain adalah bahan dasar pembuatan pakaian. Namun, tahukah Anda bahwa ada berbagai jenis kain?',
    href: '#',
  },
  {
    title: 'Tips Memilih Pakaian yang Tepat',
    author: 'Aydie Rahma',
    date: '2024-12-10',
    summary:
      'Memilih pakaian yang tepat sesuai dengan bentuk tubuh dan warna kulit dapat membuat penampilan Anda semakin menarik.',
    href: '#',
  },
];

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
          {new Date(date).toLocaleDateString('id', {
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
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
