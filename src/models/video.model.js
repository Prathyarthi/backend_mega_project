import mongoose, { Schema } from "mongoose"

const videoModel = new Schema({}, { timestamps: true })


export const Video = mongoose.model("Video", videoModel)