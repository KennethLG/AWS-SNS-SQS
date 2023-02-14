// receiveMessage.handler.js

exports.handler = async function (event) {
  console.log("Received message: ", event.Records[0].body);

  return {
    statusCode: 200,
    body: "Message received.",
  };
};
