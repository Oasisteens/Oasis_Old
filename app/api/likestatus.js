import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const likestatusSchema = new Schema ({
    title: {
        type: String
    },
    username: {
        type: String
    },
    status: {
        type: Boolean
    }
})

export default mongoose.models.Likestatus || mongoose.model('Likestatus', likestatusSchema)