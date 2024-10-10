import{MongoClient} from "mongodb"
const connection = MongoClient.connect("mongodb+srv://adityakamodiya:11223344@cluster0.j4ukslx.mongodb.net/Aadii_infotech?retryWrites=true&w=majority&appName=Cluster0")
export const dbName = "Aadii_infotech"
export default connection
// mongodb://127.0.0.1:27017
// mongodb+srv://adityakamodiya:11223344@cluster0.j4ukslx.mongodb.net/MulterData?retryWrites=true&w=majority&appName=Cluster0