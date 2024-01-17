module.exports={
    mongoUrl:'mongodb+srv://alekseit422:Saveliy0808@cluster0.b1w7e0i.mongodb.net/Cluster0?retryWrites=true&w=majority'
    // mongoUrl:"mongodb://127.0.0.1:27017/srm"
}
// const MongoClient = require("mongodb").MongoClient;
 
// const url = "mongodb://127.0.0.1:27017/";
// // создаем объект MongoClient и передаем ему строку подключения
// const mongoClient = new MongoClient(url);
// async function run() {
//     try {
//         // Подключаемся к серверу
//         await mongoClient.connect();
//         console.log("Подключение установлено");
//         // взаимодействие с базой данных
//     }catch(err) {
//         console.log(err);
//     } finally {
//         // Закрываем подключение при завершении работы или при ошибке
//         await mongoClient.close();
//         console.log("Подключение закрыто");
//     }
// }
// run().catch(console.log);
