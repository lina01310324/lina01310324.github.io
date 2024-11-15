// 導入所需的模組
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// 創建 Express 應用
const app = express();

// 配置中介軟體
app.use(cors());
app.use(bodyParser.json());

// 連接 MongoDB (請用您的 MongoDB URI 替換以下字符串)
mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// 設置根端點
app.get('/', (req, res) => {
  res.send('Hello World! This is my Node.js app running on Termux!');
});

// 啟動伺服器
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
