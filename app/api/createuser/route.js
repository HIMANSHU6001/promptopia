import getSequelize from "@utils/database";
import UserModel from "@models/user";

export const POST = async (req) => {
    console.log("CREATING USER");
    const { email, displayName, photoURL } = await req.json();
    const username = displayName;
    const image = photoURL;
    const sequelize = await getSequelize();
    const [user, created] = await UserModel.findOrCreate({
        where: { email },
        defaults: { username, image }
    });

    if (created) {
        console.log('User was created');
    } else {
        console.log('User already exists');
    }

    return new Response(JSON.stringify(user), {
        status: 200
    })
}
