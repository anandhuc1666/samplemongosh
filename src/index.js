import express from "express";
const app = express();
app.use(express.json());
const server = [];

app.post("/create", (req, res) => {
  const { email, password, name } = req.body;
  const lengthId = server.length;
  const newUser = {
    id: lengthId + 1,
    name,
    email,
    password,
  };
  server.push(newUser);
  res.json(newUser);
});
app.get("/resive", (req, res) => {
  const user = server.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    password: item.password,
  }));
  res.json(user);
});
app.patch("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  const user = server.find((item) => item.id == id);
  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;
  res.json(user);
});
app.delete("/delete/:id",async (req, res) => {
  const { id } = req.params;
    const deletedUser = await server.findByIdAndDelete(id);
    res.json({message:deletedUser})
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`server is running on ${PORT}`));
