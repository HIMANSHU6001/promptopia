import getSequelize from "@utils/database";

const handler = async (req,res) => {
    if (req.method === "POST" || req.method === "GET"){
        const sequelize = await getSequelize();
        return new Response("Connected to PostgreSQL Database")
    }
    else {
        return new Response("Invalid Method") 
    }
}

export {handler as POST, handler as GET}