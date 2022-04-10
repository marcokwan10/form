const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/form", async (req, res) => {
	try {
		const { courseA, courseB, courseC } = req.body;
		const { rows } = await pool.query(
			"INSERT INTO form (course_a, course_b, course_c) VALUES($1, $2, $3) RETURNING *",
			[courseA, courseB, courseC]
		);
		console.log("👋 rows ------>", rows);
		res.json(rows[0]);
	} catch (err) {
		console.error(err);
		res.send(err);
	}
});

app.listen(5001, () => {
	console.log("Server is up on PORT 5001");
});
