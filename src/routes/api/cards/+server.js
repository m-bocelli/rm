export function GET({ request }) {
    
    return new Response(JSON.stringify({test: "hello world"}), {status: 200})
}