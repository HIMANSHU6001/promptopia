import getSequelize from "@utils/database";
import UserModel from "@models/user";
import PromptModel from "@models/prompts";


export const POST = async (req) => {
    const { userEmail } = await req.json();
    try {
        const sequelize = await getSequelize();
        const prompts = await PromptModel.findAll({
            where: {
                creator: userEmail
            },
            include: [
                {
                    model: UserModel,
                    as: 'User',
                    attributes: ['image', 'username', 'email'], // specify the fields you want to fetch from the UserModel
                },
            ]
        });
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