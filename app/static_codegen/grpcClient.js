var service = require('D:\\MyWorkspace\\Grpc_nodejs\\static_codegen\\Person_grpc_pb');
var message = require('D:\\MyWorkspace\\Grpc_nodejs\\static_codegen\\Person_pb');

var grpc = require('grpc');

var client = new service.PersonServiceClient('localhost:8899', grpc.credentials.createInsecure());

var request = new message.MyRequest();
request.setUsername('wangwu');

client.getRealNameByUserName(request, function (error, callback) {
   console.log(callback);
});