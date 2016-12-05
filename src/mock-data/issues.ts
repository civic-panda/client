import { issues } from '../modules';

const data: issues.Issue[] = [{
  id: 'electoral-reform',
  name: 'Electoral reform',
  summary: `
    All voters should be valued equally in presidential elections, no matter where they live.<br><br>
    Our current Electoral College system is grounded in state laws which allocate electoral votes on a winner-take-all basis. This leads presidential candidates to concentrate their resources on voters in a handful of swing states, relegating the vast majority of the country to spectator status.<br><br>
    Instead, we should elect the president by a national popular vote—and there's a state-based, constitutional way to do so: The National Popular Vote interstate compact (or NPV plan). After entering the NPV agreement, all of a state’s electoral votes would be awarded to the presidential candidate who receives the most popular votes in all 50 states and the District of Columbia. [...] The policy choice for states is simple: to keep an increasingly broken system exactly as it is or to join with other states to guarantee election of the national popular vote winner.
  `,
  facts: [
    `State winner-take-all statutes adversely affect governance. “Battleground” states receive 7% more federal grants than “spectator” states, twice as many presidential disaster declarations, more Superfund enforcement exemptions, and more No Child Left Behind law exemptions.`,
    `State winner-take-all statutes have allowed candidates to win the Presidency without winning the most popular votes nationwide in four of our 57 presidential elections—1 in 14 times.`,
    `The U.S. Constitution (Article II, Section 1) gives the states exclusive control over awarding their electoral votes: “Each State shall appoint, in such Manner as the Legislature thereof may direct, a Number of Electors....” The winner-take-all rule was used by only three states in 1789.`,
    `The National Popular Vote bill would guarantee the Presidency to the presidential candidate who receives the most popular votes in all 50 states (and the District of Columbia). Under the U.S. Constitution, the states have exclusive and plenary (complete) power to allocate their electoral votes, and may change their state laws concerning the awarding of their electoral votes at any time.`,
    `[The National Popular Vote plan] takes effect only when enough states sign on to guarantee that the national popular vote winner wins the presidency. That means states with a combined total of 270 electoral votes—a majority of the Electoral College—must join the compact for it to take effect.`,
    `[As of November 2016,] 11 States Possessing 165 Electoral Votes Have Enacted National Popular Vote Into Law, meaning the compact is over 60% of the way to activation.`,
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
}];

export default data;
