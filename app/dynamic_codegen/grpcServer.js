var PROTO_FILE_PATH = 'D:\\MyWorkspace\\Grpc_nodejs\\proto\\Person.proto';
var grpc = require("grpc");
var grpcService = grpc.load(PROTO_FILE_PATH).com.netty.proto;

var server = new grpc.Server();

server.addService(grpcService.PersonService.service, {
    getRealNameByUserName : getRealNameByUserName,
    getPersonByAge : getPersonByAge,
    getPersonWrapperByAges : getPersonWrapperByAges,
    biTalk : biTalk
});

server.bind("localhost:8899", grpc.ServerCredentials.createInsecure());
server.start();

function getRealNameByUserName(call, callback) {
    console.log("call: " + call.request.username);

    callback(null, {realName : 'lisi'});
}

function getPersonByAge() {

}

function getPersonWrapperByAges() {

}

function biTalk() {

}


