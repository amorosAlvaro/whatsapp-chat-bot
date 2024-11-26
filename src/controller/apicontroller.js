const apiController = {
  verificar: (req, res) => {
    const tokenAmoros = "TOKEN_AMOROS";
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    console.log("token", token);
    console.log("challenge", challenge);
    console.log("req", req);

    try {
      console.log("Verification successful console");
      res.send(challenge);
    } catch {
      res.status(400).send();
    }
  },
  recibir: (req, res) => {
    res.send("Data received");
    console.log("Recived Console");
  },
};

export default apiController;
