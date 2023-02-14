// sendMessage.handler.js

exports.handler = async function (event) {
  console.log("Sending message: ", event.Records[0].Sns.Message);

  return {
    statusCode: 200,
    body: "Message sent.",
  };
};
