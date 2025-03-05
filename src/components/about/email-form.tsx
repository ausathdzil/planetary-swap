import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';

export default function EmailForm() {
  return (
    <form className="not-prose space-y-6">
      <div className="flex gap-4">
        <div className="w-full space-y-1">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            className="bg-background"
            type="text"
            id="firstName"
            name="firstName"
          />
        </div>
        <div className="w-full space-y-1">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            className="bg-background"
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input className="bg-background" type="email" id="email" name="email" />
      </div>

      <div className="space-y-1">
        <Label htmlFor="message">Message</Label>
        <Textarea
          className="resize-none bg-background"
          id="message"
          name="message"
        />
      </div>

      <div className="flex justify-end">
        <Button className="rounded-lg" type="submit">
          <Mail />
          <span>Send</span>
        </Button>
      </div>
    </form>
  );
}
