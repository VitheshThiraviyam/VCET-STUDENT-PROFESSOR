import mongoose from "mongoose";

const ConnectDB = async () => {
    try
    {
        await mongoose.connect("mongodb+srv://23cseb60vithesh_db_user:FSDUuI0R5pdUyDbT@cluster0.u4xb83z.mongodb.net/?appName=Cluster0");
        console.log("DB connected");
    }
    catch(error)
    {
        console.log(error);
    }
}

export default ConnectDB;