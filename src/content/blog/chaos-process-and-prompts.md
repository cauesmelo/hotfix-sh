---
title: "Chaos, Process and Prompts"
description: "Software development has gone through dramatic eras, each one a reaction to the failures of the last. Except the current one."
pubDate: "Mar 14 2026"
---

Software development is going through another moment of transformation with the rise of AI-assisted development. It feels revolutionary, and in many ways it is. But this isn't the first time our industry has gone through a dramatic shift, and it likely won't be the last.

In this post I take a quick look at the previous eras of software development and the problems each one tried to solve. Understanding that history helps put the current AI moment into perspective.

#### Chaos — 1960s

Let's go back to the 1960s. Computers were getting increasingly powerful, governments and militaries were relying more and more on software, and the systems being built were growing in size and complexity at a pace nobody was prepared for. The problem was that the way people wrote software hadn't evolved at all. There were no formal processes, no engineering discipline, no established practices. It was artisanal work. People figured things out as they went.

And, predictably, everything started catching fire.

Projects blew past deadlines and budgets. Deliverables didn't meet expectations. Some projects were simply canceled. Maintenance was an afterthought, if it was a thought at all.

<figure>
  <img src="/ibmos360.png" alt="IBM System/360 Model 50 CPU, computer operator's console, and peripherals at Volkswagen">
  <figcaption>IBM System/360 Model 50 CPU, computer operator's console, and peripherals at Volkswagen</figcaption>
</figure>

One of the projects that best symbolizes this era is IBM's OS/360. IBM tried to build a single operating system that would run across their entire mainframe family. It was unprecedented in scale and coordination. The project started with a $40 million budget and ended up costing $500 million. One of its managers, Fred Brooks, was so marked by the experience that he wrote _The Mythical Man-Month_, a book from the 1970s based on the lessons of the 1960s that is, unfortunately, still painfully relevant today. Brooks gave us phrases we still repeat like mantras: "Adding manpower to a late software project makes it later," "Nine women can't make a baby in one month," and the classic "No silver bullets in Software Engineering."

<figure>
  <img src="/nato1968.png" alt="NATO Software Engineering Conference">
  <figcaption>NATO Software Engineering Conference</figcaption>
</figure>

The situation was so dire that it became an agenda item for **NATO**. Yes, the same NATO that deals with wars and national security. In 1968, they organized a conference where the greatest minds of the time gathered to discuss the software crisis. This conference is considered the birthplace of the term "software engineering," coined by Friedrich Bauer. And it wasn't meant as a compliment. It was deliberately provocative, almost ironic. Calling what programmers did at the time "engineering" was a way of saying: if we want software to be taken seriously, especially in military and industrial contexts, we need to treat this discipline with the rigor of real engineering.

<figure>
  <img src="/steam-engine.png" alt="Steam Engine">
  <figcaption>The steam engine, the major driver in the Industrial Revolution, underscores the importance of engineering in modern history</figcaption>
</figure>

And what is engineering, really? The word comes from the Latin _ingenium_, meaning natural talent, inventiveness, the capacity to create. Later it became _engineer_ in Middle English, someone who built _engines_, which back then meant war machines, catapults, complex mechanical devices. Engineering has always been tied to complexity, risk, and responsibility. It's the art of trade-offs. There is no perfect solution, only the best possible solution within real constraints. A piece of engineering can be fast, cheap, safe, easy to maintain, flexible, simple, but rarely all of those at the same time. The engineer's job is to choose the best option given the constraints.

#### Process — 1970s to 1990s

After the chaos of the 1960s, the industry tried to professionalize. Universities began teaching Software Engineering as a formal discipline. Structured methods emerged. Process models were defined. The reasoning was straightforward: if software is complex, we should treat it like traditional engineering. Plan everything upfront. Document everything. Control every phase. Development was divided into rigid stages: requirements, design, implementation, testing, maintenance. **Predictability above all.**

<figure>
  <img src="/waterfall.png" alt="Waterfall">
  <figcaption>Waterfall model</figcaption>
</figure>

But the real world doesn't operate in neat, sequential phases. Requirements change. Context changes. Regulations change. Users change their minds. The processes of the time assumed something fundamentally flawed: that it was possible to specify everything correctly at the beginning.

This led to excessively long projects, heavy documentation, expensive and bureaucratic change processes, a lack of adaptability, and ultimately, an illusion of control. If in the 1960s the problem was chaos, by the 1980s the problem had become **rigidity**.

One of the most emblematic failures of this era was the TAURUS project at the London Stock Exchange. In the late 1980s, the Exchange decided to replace its entire physical settlement process with an integrated electronic system. It was supposed to be a structural transformation of the British financial market. The initial budget was around £45 million over four years. Everything was highly formalized, with detailed planning and heavy governance. But scope kept growing, requirements shifted as regulations evolved, and integration with banks became increasingly difficult. When the project was finally canceled in March 1993, the Exchange itself had spent around £80 million. But the real damage was in the ecosystem: banks, brokers, and other institutions had invested over £400 million adapting their own systems for TAURUS. After five years of development, the project was simply abandoned. No delivery. No working system. The total cost to the ecosystem was estimated at nearly £500 million.

#### Agility — 2000s

By the late 1990s, several engineers had recognized that the rigid approach wasn't working. Processes were slow, documentation had replaced feedback, software arrived too late. Different engineers were independently working on more iterative, feedback-oriented methods: Extreme Programming by Kent Beck, Scrum by Sutherland and Schwaber, Crystal by Alistair Cockburn, Feature-Driven Development, Adaptive Software Development.

<figure>
  <img src="/agile.png" alt="Agile">
  <figcaption>Agile manifesto meeting on 2001</figcaption>
</figure>

In February 2001, seventeen of these software practitioners met in Snowbird, Utah. Their goal was to identify shared principles across these lightweight methods, provide an alternative to the heavyweight process models, and reprioritize adaptability over rigid planning. What came out of that meeting was the Manifesto for Agile Software Development, with its four famous values:

**Individuals and interactions** over processes and tools.
**Working software** over comprehensive documentation.
**Customer collaboration** over contract negotiation.
**Responding to change** over following a plan.

It's worth noting that many of the signatories became (or already were) authors of books that shaped how we think about software: Kent Beck with TDD and Extreme Programming, Martin Fowler with Refactoring, Robert C. Martin with Clean Code, Andrew Hunt and David Thomas with The Pragmatic Programmer. The Agile Manifesto didn't create a new methodology. It gave a name and a shared identity to something that was already happening organically.

#### DevOps — 2010s

By the 2010s, iterative development was well established. Agile practices enabled short cycles and frequent feedback. But there was a structural misalignment that nobody had fully addressed: development teams were incentivized to introduce **change**, while operations teams were incentivized to maintain **stability**. Development valued speed and iteration. Operations valued predictability and control. The incentives were fundamentally different, and this wasn't just a cultural problem, it was an organizational one.

In 2008, Patrick Debois questioned at the Agile Conference: if development can work iteratively, why is infrastructure still operating under rigid, heavy processes? In 2009, at the O'Reilly Velocity Conference, Flickr presented "10+ Deploys per Day: Dev and Ops Cooperation at Flickr," showing how they had made it viable to deploy more than ten times a day, something considered unthinkable at the time.

<figure>
  <a href="https://www.youtube.com/watch?v=LdOe18KhtT4">
    <img src="/velocity09-flickr.png" alt="10+ Deploys Per Day: Dev and Ops Cooperation at Flickr">
  </a>
  <figcaption>
    10+ Deploys Per Day: Dev and Ops Cooperation at Flickr @ Velocity 09
  </figcaption>
</figure>

Flickr didn't just increase deployment frequency. They reduced the structural distance between development and operations. They advocated for shared responsibility for production outcomes, developers participating in operational concerns, operational visibility integrated into development workflows, and automation to eliminate manual handoffs. In practice, this meant continuous integration pipelines, automated deployment processes, standardized environments, real-time monitoring, and rapid rollback capabilities. The main change was organizational: deployment became a routine engineering activity, not a coordinated event.

DevOps didn't emerge as a formal framework. There was no official manifesto, no prescriptive methodology. It emerged as a **community-driven** response to a systemic problem: the fragmentation between development and operations. Gene Kim distilled the movement into three underlying principles: Flow, optimizing the stream of changes to production; Feedback, shortening the cycle between change and impact detection; and Continuous Learning, institutionalizing improvement through automation and controlled experimentation. These principles describe properties of the software delivery system, not specific tools.

#### A.I. — 2020s

And finally, we arrive at the present. The era of artificial intelligence.

Here's what I find genuinely curious about this moment: every previous era was a **reaction** to a problem. In the 1980s, formal methods emerged to fight the chaos. In the 2000s, Agile emerged to fight the bureaucracy. In the 2010s, DevOps emerged to bridge the gap between development and operations. Each shift was motivated by pain. Someone looked at the status quo, said "this isn't working," and proposed something different.

But the AI revolution didn't emerge from a problem in how we write software. It just **appeared**. It wasn't a response to a specific failure or frustration in the development process. It came from advances in a completely different field and landed on our doorstep. And that makes it fundamentally different from every transition that came before it.

<figure>
  <img src="/will-spaghetti.png" alt="Will Smith eating spaghetti">
  <figcaption>Will Smith eating spaghetti test in 2025</figcaption>
</figure>

We're used to eras that begin with a diagnosis. Chaos, rigidity, bureaucracy, fragmentation. Each time, the industry could point at what was broken and design a response. But with AI, there's no clear diagnosis driving the change. There's an incredibly powerful capability that we're still figuring out what to do with. And that's both exciting and unsettling, because for the first time we're not reacting to a problem. We're adapting to a possibility.

This raises questions that I don't think we've answered yet. What does engineering mean in the AI era? Is the bottleneck shifting again, and if so, where? Can we apply traditional engineering rigor to AI-driven systems? What are the most valuable skills in an AI-assisted world? Is deep technical knowledge becoming more valuable or less?

I don't have the answers. But I think there's something valuable in knowing the history. Every era thought it had figured things out. The 1960s thought more people would solve it. The 1980s thought more process would solve it. The 2000s thought less process would solve it. The 2010s thought better collaboration would solve it. Each era contributed something real, but none of them was the final answer.

If history teaches us anything, it's that the meaning of "good software" is a moving target. It changes as our tools change, as our constraints change, as our understanding of the problem deepens. The best we can do is stay honest about what we don't know, keep learning from what came before, and resist the temptation to believe that this time, we've finally found the silver bullet.

Fred Brooks told us there isn't one. After sixty years of evidence, I'm inclined to believe him.
