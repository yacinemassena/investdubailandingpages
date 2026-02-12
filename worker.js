export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);
    newResponse.headers.delete("X-Frame-Options");
    newResponse.headers.set("Content-Security-Policy", "frame-ancestors *");
    return newResponse;
  },
};
