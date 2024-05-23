import PromptModel from "@models/prompts";
import UserModel from "@models/user";
import getSequelize from "@utils/database";


export const GET = async (req) => {
    
    try {
        console.log("Fetching all prompts");
        const sequelize = await getSequelize();
        const prompts = await PromptModel.findAll({
            include: [
                {
                    model: UserModel,
                    as: 'User',
                    attributes: ['image','username','email'], // specify the fields you want to fetch from the UserModel
                },
            ]
        })
        // const users = await UserModel.findAll({})
        return new Response(JSON.stringify(prompts), {
            status: 200
        })
    } catch (error) {
        console.log(error);
        return new Response("Failed to fetch", {
            status: 500
        })
    }
}