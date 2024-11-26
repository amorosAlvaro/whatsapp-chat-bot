const apiController = {
  verificar: (req, res) => {
    const tokenAmoros = "TOKEN_AMOROS";
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    try {
      res.send(challenge);
    } catch {
      res.status(400).send();
    }
  },
  recibir: (req, res) => {
    try {
      const entry = req.body["entry"][0];
      const changes = entry["changes"][0];
      const value = changes["value"];
      const messagesObject = value["messages"];

      console.log("messagesObject", messagesObject);
      res.send("EVENT_RECEIVED");
    } catch (e) {
      console.log("error: ", e);
      res.send("EVENT_RECEIVED");
    }
  },
};

export default apiController;
