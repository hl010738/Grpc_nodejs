var service = require('D:\\MyWorkspace\\Grpc_nodejs\\static_codegen\\Person_grpc_pb');
var message = require('D:\\MyWorkspace\\Grpc_nodejs\\static_codegen\\Person_pb');

var grpc = require('grpc');

var server = new grpc.Server();

server.addService(service.PersonServiceService, {
    getRealNameByUserName : getRealNameByUserName,
    getPersonByAge : getPersonByAge,
    getPersonWrapperByAges : getPersonWrapperByAges,
    biTalk : biTalk
});


server.bind("localhost:8899", grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUserName(call, callback) {
    console.log("call: " + call.request.getUsername());

    var response = new message.MyResponse();
    response.setRealname('赵柳');

    callback(null, response);
}

function getPersonByAge() {

}

function getPersonWrapperByAges() {

}

function biTalk() {

}