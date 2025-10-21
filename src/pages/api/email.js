export async function GET() {
  return new Response(JSON.stringify({ 
    email: 'dev@slithersoftware.com' 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
