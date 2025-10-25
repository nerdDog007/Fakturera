import pool from '../backend/db/db.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
dotenv.config();
import jwt from 'jsonwebtoken';
const app = express();
app.use(cors());
app.use(express.json());

async function test() {
  try {
    const res = await pool.query('SELECT NOW()');
  } catch (err) {
    console.error('error', err);
  }
}

test();
app.post('/signUp', async (req, res) => {
    try {
      const { email, password, username, name } = req.body;
      const hashPassword = await bcrypt.hash(password, 10);
  
      await pool.query(
        'INSERT INTO users(email, password, username, name) VALUES($1, $2, $3, $4)',
        [email.toLowerCase(), hashPassword, username, name]
      );
      res.status(201).json({ message: "successful" });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  });
  app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await pool.query(
        'SELECT * FROM public.users WHERE email = $1',
        [email.toLowerCase()]
      );
      if (user.rows.length === 0) {
        res.status(404).json({ message: "Use not found" });
      } else {
        const rightPassword = await bcrypt.compare(password, user.rows[0].password);
        if (rightPassword) {
          const token = jwt.sign({ userId: user.rows[0].id }, process.env.Secret_JWT);
          res.status(200).json({ token, user: user.rows[0],status:200 });
        } else {
          res.status(401).json({ message: "Invalid password" });
        }
      }
    } catch (error) {
      res.status(500).json({ message: "Something wentwrong" });
    }
  });


app.get("/navbar", async (req, res) => {
  try {
    const navbar = await pool.query(
      'SELECT * FROM public.navbar'
    );
    res.status(200).json(navbar.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Something wentwrong" });
  }
});

app.get("/terms", async (req, res) => {
  try {
    const terms = await pool.query(
      'SELECT * FROM public.terms'
    );
    const mm = terms.rows[0].terms + " " + terms.rows[1].terms;
    res.status(200).json({terms:mm});
  } catch (error) {
    console.error("Error", error);
    res.status(500).json({ message: "Something wentwrong" });
  }
});

app.get("/dashboard",async (req,res)=>{
  try{

    const dashboard = await pool.query(
      'SELECT * FROM public.users'
    );
    res.status(200).json(dashboard.rows);
  }catch(error){
    res.status(500).json({message:"Something wentwrong"});
  }
})
app.get('/priceList', AuthenticateToken, async (req, res) => {
  try {
    const priceList = await pool.query(
      'SELECT * FROM public.pricelist'
    );
    res.status(200).json(priceList.rows);
  } catch (error) {
    res.status(500).json({ message: "Something wentwrong" });
  }
});

app.put('/priceList/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { article_no, description, in_price, in_stock, price, product_service, unit } = req.body;
    console.log(req.body);
    await pool.query(
      'UPDATE public.pricelist SET article_no=$1, description=$2, in_price=$3, in_stock=$4, price=$5, product_service=$6, unit=$7 WHERE id=$8',
      [article_no, description, in_price, in_stock, price, product_service, unit, id.toString()]
    );
    res.status(200).json({ message: "Price successffully" });
  } catch (error) {
    res.status(500).json({ message: "Something wentwrong" });
  }
});

function AuthenticateToken(req, res, next) {
  const token = req.headers['authorization'].split(' ')[1];
  if (token) {
    jwt.verify(token, process.env.Secret_JWT, (err, user) => {
      if (err) {
        console.log("asdasd")
        res.status(401).json({ message: "Invailden"  });
      } else {
        console.log("qwewe")
        req.user = user;
        console.log(user+"f")
        next();
      }
    });
  } else {
    res.status(401).json({ message: "No token" });
  }
}
app.listen(3000, () => {
    console.log('port 3000');
});


