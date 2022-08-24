export default (express, bodyParser, CORS, data) => {
    const app = express();
    
    app
      .use((req, res, next) => res.status(200).set(CORS) && next())
      .use(bodyParser.urlencoded({ extended: true }))
      .get('/', async (req, res) => {
        try {
            res.status(200).json({message: "Hello\n\r"});
            data.req_num++;
        } catch (e) {
            return res.status(500).json(e);
        }
      })
  
    return app;
  }