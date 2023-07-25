import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        products: [{ type: mongoose.Types.ObjectId, ref: "Products" }],
    },
    { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);
