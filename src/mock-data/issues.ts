import { issues } from '../modules';

const data: any[] = [{
  id: 'electoral-reform',
  name: 'Electoral reform',
  summary: `
    All voters should be valued equally in presidential elections, no matter where they live.<br><br>
    Our current Electoral College system is grounded in state laws which allocate electoral votes on
    a winner-take-all basis. This leads presidential candidates to concentrate their resources on voters
    in a handful of swing states, relegating the vast majority of the country to spectator status.<br><br>
    Instead, we should elect the president by a national popular vote—and there's a state-based,constitutional
    way to do so: The National Popular Vote interstate compact (or NPV plan). After entering the NPV agreement,
    all of a state’s electoral votes would be awarded to the presidential candidate who receives the most
    popular votes in all 50 states and the District of Columbia. [...] The policy choice for states is simple:
    to keep an increasingly broken system exactly as it is or to join with other states to guarantee election
    of the national popular vote winner.
  `,
  facts: [
    `State winner-take-all statutes adversely affect governance. “Battleground” states receive 7% more federal
     grants than “spectator” states, twice as many presidential disaster declarations, more Superfund enforcement
    exemptions, and more No Child Left Behind law exemptions.`,
    `State winner-take-all statutes have allowed candidates to win the Presidency without winning the most popular
     votes nationwide in four of our 57 presidential elections—1 in 14 times.`,
    `The U.S. Constitution (Article II, Section 1) gives the states exclusive control over awarding their electoral
     votes: “Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors....”
    The winner-take-all rule was used by only three states in 1789.`,
    `The National Popular Vote bill would guarantee the Presidency to the presidential candidate who receives the
     most popular votes in all 50 states (and the District of Columbia). Under the U.S. Constitution, the states
     have exclusive and plenary (complete) power to allocate their electoral votes, and may change their state laws
     concerning the awarding of their electoral votes at any time.`,
    `[The National Popular Vote plan] takes effect only when enough states sign on to guarantee that the national
    popular vote winner wins the presidency. That means states with a combined total of 270 electoral votes—a majority
     of the Electoral College—must join the compact for it to take effect.`,
    `[As of November 2016,] 11 States Possessing 165 Electoral Votes Have Enacted National Popular Vote Into Law,
    meaning the compact is over 60% of the way to activation.`,
    `Individual states may have their own committees to review electoral college reform`,
  ],
  reading: [
    {
      name: 'NationalPopularVote.com',
      url: 'http://www.nationalpopularvote.com/',
    }, {
      name: 'Levy, R. “Should we reform the electoral college?” CATO Policy Report. CATO Institute: March/April 2013.',
      url: 'https://www.cato.org/policy-report/marchapril-2013/should-we-reform-electoral-college',
    }, {
      name: 'FairVote’s Information Brochure on the National Popular Vote',
      url: 'https://fairvote.app.box.com/v/FairVote-NPV-brochure',
    }, {
      name: 'FairVote’s articles and resources on Presidential Elections and the National Popular Vote',
      url: 'http://www.fairvote.org/presidential_elections#presiential_elections_the_electoral_college',
    }, {
      name: 'Common Cause',
      url: 'https://secure2.convio.net/comcau/site/Advocacy?cmd=display&page=UserAction&id=1832)',
    }, {
      name: 'National Conference of State Legislatures on National Popular Vote',
      url: 'http://www.ncsl.org/research/elections-and-campaigns/national-popular-vote.aspx',
    },
  ],
}, {
  id: 'campaign-finance-reform',
  name: 'Campaign Finance Reform',
  summary: `
    The Supreme Court’s 2010 decision in Citizens United v. F.E.C. established the legal basis for the idea that
     “corporations are people” and opened the door for billionaires and special interests to spend unlimited,
     untraceable money in America’s elections.<br><br>
    This not only makes corporate influence on legislation easy, it prevents the public from understanding what
     is influencing their legislators.<br><br>
    The influx of untraceable, anonymous money forces lawmakers into a fundraising arms race, devoting excessive
    amounts of time to fundraising and answering to special interests rather than serving their constituents.
  `,
  facts: [
    `The most recent data from the Center for Responsive Politics show that with over 7 months to go before
    Election Day, the $344 million in outside spending thus far has exceeded all outside spending from the 2008
    election.[6] Outside spending this year will shatter all previous records – and money is increasingly coming
    from unknown or suspicious sources.`,
    `“Dark money” nonprofit groups regularly spend unlimited, undisclosed cash, despite regulations that limit
    such spending.[7]`,
    `Anonymous shell corporations can donate to these groups or to Super PACs, despite another long-standing law
    banning anonymous donations.[8] In some instances, these “ghost corporations” can be owned by foreign interests`,
    `In April 2016, a Koch network-backed bill that would remove the last layer of oversight over this loophole
    through the House Ways and Means Committee.`,
  ],
  reading: [
    {
      name: 'End Citizens United',
      url: 'http://endcitizensunited.org/citizens-united-and-the-campaign-finance-crisis/',
    }, {
      name: 'Democracy Is For People',
      url: 'http://www.democracyisforpeople.org/',
    },
  ],
}];

export default data;
