import getSequelize from "@utils/database";
import PromptModel from "@models/prompts";

export const GET = async (req, {params}) => {
    try {
        const sequelize = await getSequelize();

        const prompt = await PromptModel.findOne({
            where: {
                id: params.id
            }
        });
        if (!prompt) {
            return new Response("Prompt not found", {
                status: 404
            })
        }
        return new Response(JSON.stringify(prompt), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch")
    }
}

export const PATCH = async (req, {params}) => {
    const { prompt, tag } = await req.json();
    try {
        const sequelize = await getSequelize();
        const post = await PromptModel.findOne({
            where: {
                id: params.id
            }
        });
        post.prompt = prompt;
        post.tag = tag;
        post.save();
        console.log("POST updated =", post);
        return new Response(JSON.stringify(post), {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch", {
            status: 500
        })
    }
}

export const DELETE = async (req, {params}) => {
    try {
        const sequelize = await getSequelize();
        const post = await PromptModel.findOne({
            where: {
                id: params.id
            }
        });
        post.destroy();
        return new Response("Prompt deleted", {
            status: 200
        })
    } catch (error) {
        return new Response("Failed to fetch", {
            status: 500
        })
    }
}