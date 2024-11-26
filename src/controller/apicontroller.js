const apiController = {
  verificar: (req, res) => {
    res.send("Verification successful");
  },
  recibir: (req, res) => {
    res.send("Data received");
  },
};

export default apiController;
