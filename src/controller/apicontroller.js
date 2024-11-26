const apiController = {
  verificar: (req, res) => {
    res.send("Verification successful");
    console.log("Verification Console");
  },
  recibir: (req, res) => {
    res.send("Data received");
    console.log("Recived Console");
  },
};

export default apiController;
