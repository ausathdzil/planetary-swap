import PasswordInput from '@/components/auth/password-input';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Join the fashion revolution.</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <label className="hidden" htmlFor="name">
            Name
          </label>
          <Input id="name" placeholder="Enter your name" />

          <label className="hidden" htmlFor="email">
            Email
          </label>
          <Input id="email" placeholder="Enter your email" type="email" />

          <label className="hidden" htmlFor="password">
            Password
          </label>
          <PasswordInput />

          <Button className="w-full rounded-lg">
            <Link className="w-full" href="/swap">
              Register
            </Link>
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link className="text-primary underline" href="/login">
            Login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
