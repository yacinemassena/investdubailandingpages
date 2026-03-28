const apiKey = 'AIzaSyDDKRpGR0RIcdapY1I5BA2FOU8psE2p-x8';
const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${apiKey}`;

async function test() {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{
        parts: [{ text: "Generate an image of a luxury villa in Dubai" }]
      }]
    })
  });
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2).substring(0, 1000));
}
test();
