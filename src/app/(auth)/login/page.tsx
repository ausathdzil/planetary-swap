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

export default function LoginPage() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Login to your account to start swapping across the fashion universe.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
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
              Login
            </Link>
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link className="text-primary underline" href="/register">
            Register
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
