module.exports = {
  addChannel: async (req, res) => {
    const { youtube_id, genre_id } = req.body;
    const db = req.app.get("db");
    db.Channels.add_channel([youtube_id, genre_id])
      .then((channel) => res.status(200).send(channel))
      .catch((err) => {
        res.status(500).send({
          errorMessage: "Oops! Something Went Wrong.",
        });
        console.log(err);
      });
  },


  loadChannels: async (req, res) => {
    const db = req.app.get('db')
    const { id } = req.params
    let [channel] = await db.Channels.load_channel(id)
    if (channel) {
      res.status(200).send(channel)
    } 
    res.status(404).send('Error')
  }
};
