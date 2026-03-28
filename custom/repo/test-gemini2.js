const apiKey = 'AIzaSyDDKRpGR0RIcdapY1I5BA2FOU8psE2p-x8';
const url = `https://generativelanguage.googleapis.com/v1alpha/models/gemini-3-pro-image-preview:predict?key=${apiKey}`;

async function test() {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt: 'A luxury villa in Dubai' }],
      parameters: { sampleCount: 1 }
    })
  });
  const data = await response.json();
  console.log(JSON.stringify(data).substring(0, 500));
}
test();
