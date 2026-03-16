import { NanoBanana } from '@cli4ai/nanobanana';

async function test() {
  try {
    const nano = new NanoBanana('AIzaSyDDKRpGR0RIcdapY1I5BA2FOU8psE2p-x8');
    const result = await nano.generateImage({
      prompt: 'A modern luxury villa in Dubai with a pool',
    });
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}
test();
