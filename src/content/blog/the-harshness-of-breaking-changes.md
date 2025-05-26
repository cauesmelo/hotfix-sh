---
title: "The harshness of breaking changes"
description: "A practical look at how breaking changes impact developers, with examples from Python, Angular, Yarn, and other tools we use every day."
pubDate: "May 26 2025"
---

Breaking changes are part of the job. If you’ve been in software for more than a few years, you’ve felt it. The update that broke everything, the upgrade path that’s actually a full rewrite, the new “best practices” that turn your current codebase into legacy overnight.

Some breaking changes are necessary. They clean up legacy baggage, unlock performance, or enable new paradigms. But others feel arbitrary, rushed, or like a betrayal of trust. What makes a breaking change harsh isn’t just what it breaks, it’s what it costs: time, momentum, user confidence, and sometimes entire communities.

#### The cost of breaking changes

When Python 3.0 was released in 2008, it introduced big improvements: Unicode strings by default, a reworked division operator, and `print` as a function. All good things, technically speaking. But it broke compatibility with Python 2.x, and that split the community in half.

For over a decade, major libraries didn’t migrate. Companies running production systems stuck with Python 2. The result was years of fragmentation, polyfills, “dual support” strategies, and tutorials that began with “this only works in Python 3.” It wasn’t until January 1, 2020, when Python 2 officially reached end-of-life, that the ecosystem finally moved on. Today, Python 3 is stronger than ever. But the cost of that transition was enormous.

Breaking changes, even when justified, have consequences.

AngularJS to Angular 2 is another infamous case. Angular 2, released in 2016, was a complete rewrite. It replaced controllers and scopes with a component-based architecture, mandated RxJS, and required TypeScript. There was no real upgrade path, only a migration project. For many teams, it was easier to switch to something else entirely.

That “something else” was often React or Vue. And it wasn’t just about syntax or tooling, it was about trust. Google had rewritten the entire framework without preserving compatibility. Once you break that kind of contract, users hesitate to invest again. Angular 2+ has matured into a powerful platform, but it still carries the baggage of that transition.

React, by contrast, pulled off a major change with far less pain. In 2019, they introduced Hooks, arguably the most significant shift in how React apps are written. But they did it carefully. Hooks were backward-compatible. Class components continued to work. Migration was optional. No forced rewrites.

The result? Widespread adoption, minimal backlash, and a smoother transition to the new model. React didn’t demand change, it **enabled** it. That’s a playbook more projects should follow.

Vue 3 took a similar path, although the landing was a bit rougher. Released in 2020, it introduced the Composition API, full TypeScript support, and a revamped reactivity engine. These were meaningful improvements, but they came with breaking changes.

To ease the shift, the Vue team provided a migration build that let developers upgrade incrementally. Even so, adoption was slower than expected. Vuex, Vue Router, and third-party UI libraries needed updates. Some teams waited months, or even years, to fully switch. In hindsight, even Vue’s creator acknowledged they had underestimated the transition cost. But credit where it's due, they communicated clearly and did their best to make the pain manageable.

<figure>
  <img src="/this-is-fine.png" alt="This is fine">
</figure>

And then there’s Yarn.

When it launched, Yarn quickly became the default package manager for serious JS projects. It was faster and more deterministic than npm. Then everything changed when ~the Fire Nation attacked~ Yarn 2 (a.k.a. Berry) was released in 2019.

Yarn 2 introduced Plug’n’Play (PnP), which eliminated the `node_modules` directory entirely. In theory, it was a brilliant solution to long-standing performance and dependency issues. In practice, it broke everything.

Many tools simply didn’t work without `node_modules`. Projects had to be reconfigured, build scripts rewritten, and strange bugs hunted down. Adoption plummeted. Yarn 1 remained the default for many, while others switched back to npm or moved to pnpm. Even years later, Yarn 2 still feels like a completely separate ecosystem. It’s a classic example of innovation that outpaced the ecosystem, and the users.

Finally, there are libraries that seem to provide breaking changes as a service.

Next.js has steadily introduced powerful features, API routes, hybrid rendering, server components, and most recently, the App Router. Each step forward improves flexibility, but it also comes with learning curves, outdated docs, and architectural overhauls. Maintaining a large Next.js app now means constantly re-evaluating your approach every few months. And because of this aggressive evolution, I’ve noticed more developers preferring to avoid Next.js unless absolutely necessary, alongside other concerns that I won’t dive into in this article.

React Router is even more dramatic. From v3 to v4, it was a complete redesign, routes became components, the mental model shifted entirely. Then v5 refined things, and v6 changed it again. With the v6.4+ series, React Router started integrating concepts from Remix (which now shares maintainers), including data loaders, fetch patterns, and file-based routing. At this point, the library barely resembles what it once was.

This kind of churn adds up. Even small breaking changes accumulate. Teams lose time to rewrites. Documentation falls out of sync. Tutorials become obsolete. You might never hit a single “version bump crisis,” but the day-to-day friction slowly wears everyone down.

Because of these constant changes to React Router, alternative libraries like [Wouter](https://github.com/molefrog/wouter) have emerged, offering a simpler API, smaller bundle size, and a more stable experience, which is basically what every developer wants from a foundational library.

#### Breaking things the right way

One of the cleanest breaking changes in tech didn’t come from software, but hardware: Apple’s transition from PowerPC to Intel in 2005. At the time, it felt impossible. IBM couldn’t deliver low-power chips for laptops, and the roadmap had been stalling for two years. IBM probably thought Apple wouldn’t have the guts to pull off something as messy as migrating everything to Intel. What they didn’t count on was that an angry Steve Jobs could move mountains.

To make it work, Apple rolled out a staged strategy. Legacy PowerPC binaries would run through an emulation layer called Rosetta, built by a small company Apple quietly acquired. Rosetta translated PowerPC’s RISC instructions into Intel’s x86 in real time. It was obviously slower, but incredibly impressive for the time, most apps just worked.

When the switch was announced, it came with real solutions. Developers got updated Xcode tools to build Universal Binaries that ran on both architectures with almost no changes. Some apps were recompiled in hours. For everything else, Rosetta filled the gap and kept things running.

Apple gave a full year of notice, shipped early Intel hardware to developers, provided solid documentation, and supported PowerPC for years after. The result was smooth adoption and minimal disruption. The ecosystem moved forward, but no one was left behind.

Fifteen years later, Apple did it again with Apple Silicon. Universal 2 and Rosetta 2 followed the same playbook, and the results were even better. Intel apps ran fast, native apps ran faster, and developers barely missed a step.

Breaking changes can work if you give people tools, time, and a way to keep moving. Apple did all three and had the will to make it happen.

#### We can't avoid breaking changes, but we can pick priorities

In the end, breaking changes are necessary for progress. No one wants to be stuck with legacy tech forever. Breaking changes come down to priorities, you can choose to focus on trust, stability, performance, features, hype, or user experience. But chasing cutting-edge performance or hype at the expense of user experience can backfire, leading to a frustrated user base.

There’s no formula for pulling off a major overhaul successfully. It depends. But we can learn from the past, both from projects that introduced breaking changes without hurting their users, and from those that failed, showing us what not to do. The best projects treat change like a contract: they communicate early, provide migration tools, and never assume users have time to waste.

We can’t avoid breaking changes forever, but we can make them as seamless as possible.
