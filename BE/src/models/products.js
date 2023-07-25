import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const productsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        price: {
            type: Number,
        },
        img: {
            type: String,
        },
        description: {
            type: String
        },
        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: "Category",
        },
    },
    { timestamps: true, versionKey: false }
);

productsSchema.plugin(mongoosePaginate);
export default mongoose.model("Products", productsSchema);
