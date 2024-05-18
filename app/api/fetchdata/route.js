// import { getClient } from "@utils/database";

// async function handler(req, res) {
//     try {
//         const conn = await getClient();
//         const query = 'SELECT * FROM promptopia LIMIT 10;'
//         const result = await conn.query(
//             query
//         );
//         console.log(result);
//         return new Response(JSON.stringify(result.rows));
//     }
//     catch (error) {
//         console.log("error")
//     }
//     conn.release();
// }

// export { handler as GET, handler as POST }