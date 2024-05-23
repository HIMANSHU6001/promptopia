import PromptModel from "@models/prompts";

export const POST = async (req, res) => {
    console.log("POSTING PROMPT", PromptModel);
    const { user, prompt, tag } = await req.json();
    // console.log("USER ", user , " PROMPT ", prompt, " TAG ", tag);

    const newPrompt = await PromptModel.create({
        creator: user.email,
        prompt: prompt,
        tag: tag
    });
    return new Response("Prompt created in backend")
}