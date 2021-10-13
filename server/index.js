const express = require("express");
const app = express();
const cors = require("cors");
const { request } = require("express");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//Routes
//create user
app.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, age, email, password } = req.body;
    const reg_user = await pool.query(
      "INSERT INTO users (first_name, last_name ,age ,email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [firstname, lastname, age, email, password]
    );
    res.status(200).send({
      code: 6,
      data: reg_user.rows,
    });
  } catch (err) {
    res.status(200).send({
      code: 9,
      message: err.message,
    });
    console.error(err.message);
  }
});

//login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const getUser = await pool.query('select * from users where "email" = $1', [
      email,
    ]);
    if (getUser.rows[0] && getUser.rows[0].email) {
      if (password == getUser.rows[0].password) {
        // console.log("inside");
        res.status(200).send({
          code: 6,
          data: getUser.rows[0],
        });
        // res.json(getUser.rows[0]);
      } else {
        res.status(200).send({
          code: 9,
          message: "password not matched",
        });
        // res.json("invalid password");
      }
    } else {
      res.status(200).send({
        code: 9,
        message: "invalid email",
      });
      // res.json("invalid email");
    }
  } catch (err) {
    res.status(200).send({
      code: 10,
      message: err.message,
    });
    // console.error(err);
  }
});

//create task
app.post("/postTask", async (req, res) => {
  try {
    console.log(req.body);
    const { title, desc, deadline, priority, status, creatorId } = req.body;
    const new_task = await pool.query(
      'INSERT INTO tasks (task_title, task_description, task_deadline, task_priority, task_status, "creatorId") VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, desc, new Date(deadline), priority, status, creatorId]
    );
    res.status(200).send({
      code: 6,
      data: new_task.rows,
    });
  } catch (e) {
    console.error(e.message);
    res.status(200).send({
      code: 10,
      message: e.message,
    });
  }
});

//get all tasks
app.get("/getTasks/:creatorId", async (req, res) => {
  try {
    const { creatorId } = req.params;
    console.log("creator id", creatorId);
    const allTasks = await pool.query(
      'SELECT * FROM tasks where "creatorId" = $1',
      [creatorId]
    );
    res.status(200).send({
      code: 6,
      data: allTasks.rows,
    });
    // res.json(allTasks.rows);
  } catch (e) {
    console.error(e.message);
    res.status(200).send({
      code: 10,
      message: e.message,
    });
  }
});

// get single task
app.get("/getTask/:id", async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const singleTask = await pool.query(
      "SELECT * FROM tasks where task_id = $1",
      [id]
    );
    // res.json(singleTask.rows);
    res.status(200).send({
      code: 6,
      data: singleTask.rows,
    });
  } catch (e) {
    console.error(e.message);
    res.status(200).send({
      code: 10,
      message: e.message,
    });
  }
});

//update task
app.post("/updateTask", async (req, res) => {
  try {
    const { title, desc, deadline, priority, status, id } = req.body;
    const update_task = await pool.query(
      "UPDATE tasks SET (task_title, task_description, task_deadline, task_priority, task_status) = ($1, $2, $3, $4,$5) WHERE task_id = $6 returning *",
      [title, desc, new Date(), priority, status, id]
    );
    // res.json(update_task.rows);
    res.status(200).send({
      code: 6,
      data: update_task.rows,
    });
  } catch (e) {
    console.error(e.message);
    res.status(200).send({
      code: 10,
      message: e.message,
    });
  }
});

// delete task
app.post("/deleteTask", async (req, res) => {
  try {
    const { id } = req.body;
    const deleteTask = await pool.query(
      "DELETE FROM tasks where task_id = $1 returning *",
      [id]
    );

    // res.json(deleteTask.rows);
    res.status(200).send({
      code: 6,
      data: deleteTask.rows,
    });
  } catch (e) {
    console.error(e.message);
    res.status(200).send({
      code: 10,
      message: e.message,
    });
  }
});

app.listen(5000, () => {
  console.log("server started at 5000");
});
