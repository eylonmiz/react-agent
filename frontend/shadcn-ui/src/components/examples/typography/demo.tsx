import { Typography } from '../../ui/typography';

export function TypographyDemo() {
  return (
    <div>
      <Typography variant="h1" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        The Joke Tax Chronicles
      </Typography>
      <Typography variant="body" className="leading-7 [&:not(:first-child)]:mt-6">
        Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne. One
        day, his advisors came to him with a problem: the kingdom was running out of money.
      </Typography>
      <Typography
        variant="h2"
        className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        The King's Plan
      </Typography>
      <Typography variant="body" className="leading-7 [&:not(:first-child)]:mt-6">
        The king thought long and hard, and finally came up with{' '}
        <Typography variant="anchor" href="#" className="font-medium text-primary underline underline-offset-4">
          a brilliant plan
        </Typography>
        : he would tax the jokes in the kingdom.
      </Typography>
      <Typography variant="blockquote" className="mt-6 border-l-2 pl-6 italic">
        "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the privilege."
      </Typography>
      <Typography variant="h3" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        The Joke Tax
      </Typography>
      <Typography variant="body" className="leading-7 [&:not(:first-child)]:mt-6">
        The king's subjects were not amused. They grumbled and complained, but the king was firm:
      </Typography>
      <Typography variant="list" className="my-6 ml-6 list-disc [&>li]:mt-2">
        <Typography variant="item">1st level of puns: 5 gold coins</Typography>
        <Typography variant="item">2nd level of jokes: 10 gold coins</Typography>
        <Typography variant="item">3rd level of one-liners : 20 gold coins</Typography>
      </Typography>
      <Typography variant="body" className="leading-7 [&:not(:first-child)]:mt-6">
        As a result, people stopped telling jokes, and the kingdom fell into a gloom. But there was one person who
        refused to let the king's foolishness get him down: a court jester named Jokester.
      </Typography>
      <Typography variant="h3" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Jokester's Revolt
      </Typography>
      <Typography variant="body" className="leading-7 [&:not(:first-child)]:mt-6">
        Jokester began sneaking into the castle in the middle of the night and leaving jokes all over the place: under
        the king's pillow, in his soup, even in the royal toilet. The king was furious, but he couldn't seem to stop
        Jokester.
      </Typography>
      <Typography variant="body" className="leading-7 [&:not(:first-child)]:mt-6">
        And then, one day, the people of the kingdom discovered that the jokes left by Jokester were so funny that they
        couldn't help but laugh. And once they started laughing, they couldn't stop.
      </Typography>
      <Typography variant="h3" className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        The People's Rebellion
      </Typography>
      <Typography variant="body" className="leading-7 [&:not(:first-child)]:mt-6">
        The people of the kingdom, feeling uplifted by the laughter, started to tell jokes and puns again, and soon the
        entire kingdom was in on the joke.
      </Typography>
    </div>
  );
}
