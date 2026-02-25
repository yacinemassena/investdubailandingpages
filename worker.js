export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle chat API endpoint
    if (url.pathname === '/api/chat' && request.method === 'POST') {
      try {
        const { messages } = await request.json();
        
        if (!env.ANTHROPIC_API_KEY) {
          return new Response(JSON.stringify({ error: 'API key not configured' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': env.ANTHROPIC_API_KEY,
            'anthropic-version': '2023-06-01'
          },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 1024,
            system: messages.find(m => m.role === 'system')?.content || '',
            messages: messages.filter(m => m.role !== 'system').map(m => ({
              role: m.role,
              content: m.content
            }))
          })
        });

        if (!anthropicResponse.ok) {
          const errorText = await anthropicResponse.text();
          console.error('Anthropic API error:', errorText);
          return new Response(JSON.stringify({ error: 'Failed to get AI response' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
          });
        }

        const data = await anthropicResponse.json();
        return new Response(JSON.stringify({ 
          content: data.content[0].text 
        }), {
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (error) {
        console.error('Chat API error:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);
    newResponse.headers.delete("X-Frame-Options");
    newResponse.headers.set("Content-Security-Policy", "frame-ancestors *");
    return newResponse;
  },
};
