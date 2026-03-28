const apiKey = 'AIzaSyDDKRpGR0RIcdapY1I5BA2FOU8psE2p-x8';
const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${apiKey}`;

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
  if (data.predictions) {
    console.log('Success! Image generated.');
  } else {
    console.error('Failed:', JSON.stringify(data, null, 2));
  }
}
test();
