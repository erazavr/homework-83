const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema(
    {
      name: {
          type: String,
          required: true
      },
      image: String,
      info: String,
    },
    { versionKey: false }
    );
const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;
