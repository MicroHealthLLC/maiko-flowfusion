import appConfig from './app.js';

const allowedOrigins = [appConfig.webAppUrl, process.env.WEB_APP_URL, process.env.MAIKO_URL, process.env.NEXT_PUBLIC_BASE_URL]; // Replace with your frontend URL

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  methods: 'GET,HEAD,POST,DELETE',
  optionsSuccessStatus: 200,
};


export default corsOptions;
