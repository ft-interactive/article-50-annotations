export default () => ({ // eslint-disable-line

  // link file UUID
  id: '3b9a74bc-0835-11e7-97d1-5e720a26771b',

  // canonical URL of the published page
  // https://ig.ft.com/sites/federal-reserve-march-meeting-2017 get filled in by the ./configure script
  url: 'https://ig.ft.com/sites/federal-reserve-march-meeting-2017',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'Donald Trump’s address to Congress — annotated',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The full Fed statement with FT correspondents’ notes and comments',

  topic: {
    name: 'Federal Reserve',
    url: 'https://www.ft.com/topics/organisations/Federal_Reserve',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    url: '',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Cardiff Garcia', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMTA2NQ==-QXV0aG9ycw==' },
    { name: 'Lauren Leatherby', url: 'https://www.ft.com/stream/authorsId/YWVmZWY3ZmUtMWI4ZS00NjVlLWI2OGItNzU4NjYzY2NlMDRj-QXV0aG9ycw==' },
  ],

  // Appears in the HTML <title>
  title: 'March Fed statement – annotated',

  // meta data
  description: 'The full Fed statement with comments from the FT',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2F42bb35c0-0834-11e7-97d1-5e720a26771b?source=ig&fit=scale-down&width=1200',
  socialHeadline: '',
  socialSummary: '',

  // TWITTER
twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fig.ft.com%2Fsites%2Ffederal-reserve-march-meeting-2017%2Fimages%2Fyellen_ann_twits.jpg?source=ig&width=1800',
twitterCreator: '@ft',
  // tweetText:  '',
//twitterHeadline:  'Trump\'s #Inauguration speech transcript, annotated',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fig.ft.com%2Fsites%2Ffederal-reserve-march-meeting-2017%2Fimages%2Fyellen_ann_face.jpg?source=ig&width=1800',
  // facebookHeadline: '',

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
