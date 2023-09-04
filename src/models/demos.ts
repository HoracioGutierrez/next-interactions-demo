import mongoose, { InferSchemaType, model } from "mongoose";

const demoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    payload : {
        type: String,
        required: true
    }
},{
    timestamps: true
})

export type DemoType = InferSchemaType<typeof demoSchema>

export default mongoose.models.Demo || model('Demo', demoSchema)