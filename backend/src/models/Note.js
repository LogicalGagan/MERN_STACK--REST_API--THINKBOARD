import mongoose  from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            Required : true
        },
        content: {
            type: String,
            Required : true
        }
    },
    {
        timestamps: true
    }
);

const Note = mongoose.model("Note",noteSchema)

export default Note;