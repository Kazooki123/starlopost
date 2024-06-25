# ANALYZE

Here, we are going to talk about the topics about analyzing and data analyses and image recognition.

## Topics

- Analyzers
- How will Python handle this
- A.I
- Images in starlopost
- Anti-NSFW
- Filtering
- Image Recognition

## Analyzers

For months we are trying to implement a analyzer to our websites to analyze what users are doing to **collect** patters and use this pattern to use against **BOTS** and Attackers.

We're using Python for the job due to its performance in security and embedding such as a plugin.

## How will Python handle this?

> Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional programming.

Because of these we're also using Python as a plugin for StarloPost security despite already having Clerk Auth. Codes such as:

- Rules
- Patterns
- Utils
- Cores
- And APIs

Are strengthening the security and malicious prevention of StarloPost. So that's why we pick Python as our second language for the website itself.

## Artificial Intelligence (A.I)

We're also using A.I to make filtering and analyzing images easier more than ever. Using A.I fine tuning can enhance the process of image recognition and analyze. If the A.I sees the image as a violation to StarloPost [policy](https://starlopost.vercel.app/about), then it'll delete the thread and warn the user by email or will shown in their profile **PUBLICLY**, if not then do Nothing at all.

Not just images! Things like text, videos, or the users actions or the users behavior as well are being monitor to keep the website safe. And don't worry, your data and identity well be safe. We do not sale these as StarloPost isn't even been hold by a Company, rather than it's a project by a Solo Web Developer like me.

## Images in StarloPost

For days StarloPost now image posting using [Uploadthing](https://uploadthing.com) and [MongoDB](https://www.mongodb.com/docs/) as the backend. But one issue has raised and that's NSFW filtering.

How can a website _automatically_ filters out this NSFW images sent by users that violates the terms of service and policy of StarloPost? Well that's where Image recognition comes in but we'll talk about that later. We'll be using Python w/ PyTorch API Client to achieve such a thing automatically without manual moderation.

Additional **Note**: Media/Images are signed by "mediaUrl" by the MongoDB schema. Well then used Python libraries to detects this and see if its SFW or NSFW.

## Anti-NSFW

StarloPost policies and TOS states that users posts that are **FLAGGED** NSFW will be warned or banned depending how worse the post it filtered or sorted by rank. If its low then warn, if its high then ban.

We always keep StarloPost a safe place for creators and users as well. And this includes not just images but videos as well.

We'll use Python for the _auto_ ranking as it's performance in sorting and ranking are benchmarked well.

## Filtering

In StarloPost, images that are being filtered are being set in the sorting algorithm depending on users behavior or topic interest.

Python can do this by the form of libraries and basic _MATH_ format for ranking and filter/sorting.

## Image Recognition

> NOW FOR THAT FUN PART!

Image Recognition!

> What is this?

Image recognition is a computer vision and artificial intelligence (AI) technology that allows machines to identify
and understand objects, people, text, and actions in digital images and videos. It uses algorithms and models to
analyze patterns and objects in images and convert them into numerical or symbolic information. This allows the
computer to interpret and make sense of the visual world in a similar way to human vision.

> What is the purpose of Image Recognition in StarloPost?

For one, it helps the site feel more secure as the A.I well analyze, read and sends the data either if it's flagged against the policy or not. With this, attackers are unable to flood the site with suspicious images and videos that may find users uncomfortable to see.
