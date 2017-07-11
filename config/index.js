import article from './article';
import getFlags from './flags';
import getOnwardJourney from './onward-journey';
import axios from 'axios';

function annotateSpeech(annotations) {
  let manipulatedHtml = speechBody.html;
  annotations.forEach((annotation) => {
    manipulatedHtml = manipulatedHtml.replace(annotation.match, `<mark class="annotation-highlight">${annotation.match}</mark>`)
  });

  return manipulatedHtml;
}

export default async function() {
  const d = await article();
  const flags = await getFlags();
  const onwardJourney = await getOnwardJourney();

  let intro;
  let headline;
  let summary;
  let title;
  let description;
  let speech;
  let socialImage;
  let socialHeadline;
  let tweetText;
  let twitterHeadline;
  let facebookHeadline;

  const berthaId = '1CcDeL0nHpXlnAeGn2a8iNAmDK-Hw9yn1y6HPxv9nues';
  const endpoint = `http://bertha.ig.ft.com/view/publish/gss/${berthaId}/speech,pageText`;
  try {
    const res = await axios(endpoint);
    const pageText = res.data.pageText;
    intro = pageText.filter((d) => d.key === 'introText')[0].value;
    headline = pageText.filter((d) => d.key === 'headline')[0].value;
    summary = pageText.filter((d) => d.key === 'standfirst')[0].value;
    title = headline;
    description = summary;
    speech = `"Dear President Tusk,

On 23 June last year, the people of the United Kingdom voted to leave the European Union. As I have said before, that decision was no rejection of the values we share as fellow Europeans. Nor was it an attempt to do harm to the European Union or any of the remaining member states. On the contrary, the United Kingdom wants the European Union to succeed and prosper. Instead, the referendum was a vote to restore, as we see it, our national self-determination. We are leaving the European Union, but we are not leaving Europe – and we want to remain committed partners and allies to our friends across the continent.

Earlier this month, the United Kingdom Parliament confirmed the result of the referendum by voting with clear and convincing majorities in both of its Houses for the European Union (Notification of Withdrawal) Bill. The Bill was passed by Parliament on 13 March and it received Royal Assent from Her Majesty The Queen and became an Act of Parliament on 16 March.

Today, therefore, I am writing to give effect to the democratic decision of the people of the United Kingdom. I hereby notify the European Council in accordance with Article 50(2) of the Treaty on European Union of the United Kingdom’s intention to withdraw from the European Union. In addition, in accordance with the same Article 50(2) as applied by Article 106a of the Treaty Establishing the European Atomic Energy Community, I hereby notify the European Council of the United Kingdom’s intention to withdraw from the European Atomic Energy Community. References in this letter to the European Union should therefore be taken to include a reference to the European Atomic Energy Community.

This letter sets out the approach of Her Majesty’s Government to the discussions we will have about the United Kingdom’s departure from the European Union and about the deep and special partnership we hope to enjoy – as your closest friend and neighbour – with the European Union once we leave. We believe that these objectives are in the interests not only of the United Kingdom but of the European Union and the wider world too.

It is in the best interests of both the United Kingdom and the European Union that we should use the forthcoming process to deliver these objectives in a fair and orderly manner, and with as little disruption as possible on each side. We want to make sure that Europe remains strong and prosperous and is capable of projecting its values, leading in the world, and defending itself from security threats. We want the United Kingdom, through a new deep and special partnership with a strong European Union, to play its full part in achieving these goals. We therefore believe it is necessary to agree the terms of our future partnership alongside those of our withdrawal from the European Union.

The Government wants to approach our discussions with ambition, giving citizens and businesses in the United Kingdom and the European Union – and indeed from third countries around the world – as much certainty as possible, as early as possible.

I would like to propose some principles that may help to shape our coming discussions, but before I do so, I should update you on the process we will be undertaking at home, in the United Kingdom.

## The process in the United Kingdom

As I have announced already, the Government will bring forward legislation that will repeal the Act of Parliament – the European Communities Act 1972 – that gives effect to EU law in our country. This legislation will, wherever practical and appropriate, in effect convert the body of existing European Union law (the “acquis”) into UK law. This means there will be certainty for UK citizens and for anybody from the European Union who does business in the United Kingdom. The Government will consult on how we design and implement this legislation, and we will publish a White Paper tomorrow. We also intend to bring forward several other pieces of legislation that address specific issues relating to our departure from the European Union, also with a view to ensuring continuity and certainty, in particular for businesses. We will of course continue to fulfil our responsibilities as a member state while we remain a member of the European Union, and the legislation we propose will not come into effect until we leave.

From the start and throughout the discussions, we will negotiate as one United Kingdom, taking due account of the specific interests of every nation and region of the UK as we do so. When it comes to the return of powers back to the United Kingdom, we will consult fully on which powers should reside in Westminster and which should be devolved to Scotland, Wales and Northern Ireland. But it is the expectation of the Government that the outcome of this process will be a significant increase in the decision-making power of each devolved administration.

## Negotiations between the United Kingdom and the European Union

The United Kingdom wants to agree with the European Union a deep and special partnership that takes in both economic and security cooperation. To achieve this, we believe it is necessary to agree the terms of our future partnership alongside those of our withdrawal from the EU.

If, however, we leave the European Union without an agreement the default position is that we would have to trade on World Trade Organisation terms. In security terms a failure to reach agreement would mean our cooperation in the fight against crime and terrorism would be weakened. In this kind of scenario, both the United Kingdom and the European Union would of course cope with the change, but it is not the outcome that either side should seek. We must therefore work hard to avoid that outcome.

It is for these reasons that we want to be able to agree a deep and special partnership, taking in both economic and security cooperation, but it is also because we want to play our part in making sure that Europe remains strong and prosperous and able to lead in the world, projecting its values and defending itself from security threats. And we want the United Kingdom to play its full part in realising that vision for our continent.

## Proposed principles for our discussions

Looking ahead to the discussions which we will soon begin, I would like to suggest some principles that we might agree to help make sure that the process is as smooth and successful as possible.

### i. We should engage with one another constructively and respectfully, in a spirit of sincere cooperation

> Since I became Prime Minister of the United Kingdom I have listened carefully to you, to my fellow EU Heads of Government and the Presidents of the European Commission and Parliament. That is why the United Kingdom does not seek membership of the single market: we understand and respect your position that the four freedoms of the single market are indivisible and there can be no “cherry picking”. We also understand that there will be consequences for the UK of leaving the EU: we know that we will lose influence over the rules that affect the European economy. We also know that UK companies will, as they trade within the EU, have to align with rules agreed by institutions of which we are no longer a part – just as UK companies do in other overseas markets.

### ii. We should always put our citizens first

> There is obvious complexity in the discussions we are about to undertake, but we should remember that at the heart of our talks are the interests of all our citizens. There are, for example, many citizens of the remaining member states living in the United Kingdom, and UK citizens living elsewhere in the European Union, and we should aim to strike an early agreement about their rights.

### iii. We should work towards securing a comprehensive agreement

> We want to agree a deep and special partnership between the UK and the EU, taking in both economic and security cooperation. We will need to discuss how we determine a fair settlement of the UK’s rights and obligations as a departing member state, in accordance with the law and in the spirit of the United Kingdom’s continuing partnership with the EU. But we believe it is necessary to agree the terms of our future partnership alongside those of our withdrawal from the EU.

### iv. We should work together to minimise disruption and give as much certainty as possible

> Investors, businesses and citizens in both the UK and across the remaining 27 member states – and those from third countries around the world – want to be able to plan. In order to avoid any cliff-edge as we move from our current relationship to our future partnership, people and businesses in both the UK and the EU would benefit from implementation periods to adjust in a smooth and orderly way to new arrangements. It would help both sides to minimise unnecessary disruption if we agree this principle early in the process.

### v. In particular, we must pay attention to the UK’s unique relationship with the Republic of Ireland and the importance of the peace process in Northern Ireland

> The Republic of Ireland is the only EU member state with a land border with the United Kingdom. We want to avoid a return to a hard border between our two countries, to be able to maintain the Common Travel Area between us, and to make sure that the UK’s withdrawal from the EU does not harm the Republic of Ireland. We also have an important responsibility to make sure that nothing is done to jeopardise the peace process in Northern Ireland, and to continue to uphold the Belfast Agreement.

### vi. We should begin technical talks on detailed policy areas as soon as possible, but we should prioritise the biggest challenges

> Agreeing a high-level approach to the issues arising from our withdrawal will of course be an early priority. But we also propose a bold and ambitious Free Trade Agreement between the United Kingdom and the European Union. This should be of greater scope and ambition than any such agreement before it so that it covers sectors crucial to our linked economies such as financial services and network industries. This will require detailed technical talks, but as the UK is an existing EU member state, both sides have regulatory frameworks and standards that already match. We should therefore prioritise how we manage the evolution of our regulatory frameworks to maintain a fair and open trading environment, and how we resolve disputes. On the scope of the partnership between us – on both economic and security matters – my officials will put forward detailed proposals for deep, broad and dynamic cooperation.

### vii. We should continue to work together to advance and protect our shared European values

> Perhaps now more than ever, the world needs the liberal, democratic values of Europe. We want to play our part to ensure that Europe remains strong and prosperous and able to lead in the world, projecting its values and defending itself from security threats.

## The task before us

As I have said, the Government of the United Kingdom wants to agree a deep and special partnership between the UK and the EU, taking in both economic and security cooperation. At a time when the growth of global trade is slowing and there are signs that protectionist instincts are on the rise in many parts of the world, Europe has a responsibility to stand up for free trade in the interest of all our citizens. Likewise, Europe’s security is more fragile today than at any time since the end of the Cold War. Weakening our cooperation for the prosperity and protection of our citizens would be a costly mistake. The United Kingdom’s objectives for our future partnership remain those set out in my Lancaster House speech of 17 January and the subsequent White Paper published on 2 February.

We recognise that it will be a challenge to reach such a comprehensive agreement within the two-year period set out for withdrawal discussions in the Treaty. But we believe it is necessary to agree the terms of our future partnership alongside those of our withdrawal from the EU. We start from a unique position in these discussions – close regulatory alignment, trust in one another’s institutions, and a spirit of cooperation stretching back decades. It is for these reasons, and because the future partnership between the UK and the EU is of such importance to both sides, that I am sure it can be agreed in the time period set out by the Treaty.

The task before us is momentous but it should not be beyond us. After all, the institutions and the leaders of the European Union have succeeded in bringing together a continent blighted by war into a union of peaceful nations, and supported the transition of dictatorships to democracy. Together, I know we are capable of reaching an agreement about the UK’s rights and obligations as a departing member state, while establishing a deep and special partnership that contributes towards the prosperity, security and global power of our continent."`;

    socialImage = pageText.filter((d) => d.key === 'socialImage')[0].value;
    socialHeadline = pageText.filter((d) => d.key === 'socialHeadline')[0].value;
    tweetText = pageText.filter((d) => d.key === 'tweetText')[0].value;
    twitterHeadline = pageText.filter((d) => d.key === 'twitterHeadline')[0].value;
    facebookHeadline = pageText.filter((d) => d.key === 'facebookHeadline')[0].value;
  } catch (e) {
    console.log('Error getting content from Bertha', e);
  }

  return {
    ...d,
    berthaId,
    intro,
    headline,
    summary,
    title,
    description,
    speech,
    socialImage,
    socialHeadline,
    tweetText,
    twitterHeadline,
    facebookHeadline,
    flags,
    onwardJourney,
  };
}
