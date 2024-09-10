import ImapFlow from 'imapflow';

const transporter = ($) => {
  const client = new ImapFlow({
    host: $.auth.data.host,
    port: $.auth.data.port,
    secure: $.auth.data.useTls, // use TLS
    auth: {
      user: $.auth.data.username,
      pass: $.auth.data.password,
    }
  });
  return client
};

export default transporter;
