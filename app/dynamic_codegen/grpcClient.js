var PROTO_FILE_PATH = 'D:\\MyWorkspace\\Grpc_nodejs\\proto\\Person.proto';
var grpc = require("grpc");
var grpcService = grpc.load(PROTO_FILE_PATH).com.netty.proto;

var client = new grpcService.PersonService('localhost:8899', grpc.credentials.createInsecure());

client.getRealNameByUserName({username : 'zhangsan'}, function (error, respData) {
    console.log(respData);
});