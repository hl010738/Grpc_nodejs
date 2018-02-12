// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var Person_pb = require('./Person_pb.js');

function serialize_com_netty_proto_MyRequest(arg) {
  if (!(arg instanceof Person_pb.MyRequest)) {
    throw new Error('Expected argument of type com.netty.proto.MyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_netty_proto_MyRequest(buffer_arg) {
  return Person_pb.MyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_netty_proto_MyResponse(arg) {
  if (!(arg instanceof Person_pb.MyResponse)) {
    throw new Error('Expected argument of type com.netty.proto.MyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_netty_proto_MyResponse(buffer_arg) {
  return Person_pb.MyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_netty_proto_PersonRequest(arg) {
  if (!(arg instanceof Person_pb.PersonRequest)) {
    throw new Error('Expected argument of type com.netty.proto.PersonRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_netty_proto_PersonRequest(buffer_arg) {
  return Person_pb.PersonRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_netty_proto_PersonResponse(arg) {
  if (!(arg instanceof Person_pb.PersonResponse)) {
    throw new Error('Expected argument of type com.netty.proto.PersonResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_netty_proto_PersonResponse(buffer_arg) {
  return Person_pb.PersonResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_netty_proto_PersonResponseList(arg) {
  if (!(arg instanceof Person_pb.PersonResponseList)) {
    throw new Error('Expected argument of type com.netty.proto.PersonResponseList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_netty_proto_PersonResponseList(buffer_arg) {
  return Person_pb.PersonResponseList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_netty_proto_StreamRequest(arg) {
  if (!(arg instanceof Person_pb.StreamRequest)) {
    throw new Error('Expected argument of type com.netty.proto.StreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_netty_proto_StreamRequest(buffer_arg) {
  return Person_pb.StreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_netty_proto_StreamResponse(arg) {
  if (!(arg instanceof Person_pb.StreamResponse)) {
    throw new Error('Expected argument of type com.netty.proto.StreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_netty_proto_StreamResponse(buffer_arg) {
  return Person_pb.StreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var PersonServiceService = exports.PersonServiceService = {
  getRealNameByUserName: {
    path: '/com.netty.proto.PersonService/getRealNameByUserName',
    requestStream: false,
    responseStream: false,
    requestType: Person_pb.MyRequest,
    responseType: Person_pb.MyResponse,
    requestSerialize: serialize_com_netty_proto_MyRequest,
    requestDeserialize: deserialize_com_netty_proto_MyRequest,
    responseSerialize: serialize_com_netty_proto_MyResponse,
    responseDeserialize: deserialize_com_netty_proto_MyResponse,
  },
  getPersonByAge: {
    path: '/com.netty.proto.PersonService/getPersonByAge',
    requestStream: false,
    responseStream: true,
    requestType: Person_pb.PersonRequest,
    responseType: Person_pb.PersonResponse,
    requestSerialize: serialize_com_netty_proto_PersonRequest,
    requestDeserialize: deserialize_com_netty_proto_PersonRequest,
    responseSerialize: serialize_com_netty_proto_PersonResponse,
    responseDeserialize: deserialize_com_netty_proto_PersonResponse,
  },
  getPersonWrapperByAges: {
    path: '/com.netty.proto.PersonService/getPersonWrapperByAges',
    requestStream: true,
    responseStream: false,
    requestType: Person_pb.PersonRequest,
    responseType: Person_pb.PersonResponseList,
    requestSerialize: serialize_com_netty_proto_PersonRequest,
    requestDeserialize: deserialize_com_netty_proto_PersonRequest,
    responseSerialize: serialize_com_netty_proto_PersonResponseList,
    responseDeserialize: deserialize_com_netty_proto_PersonResponseList,
  },
  biTalk: {
    path: '/com.netty.proto.PersonService/biTalk',
    requestStream: true,
    responseStream: true,
    requestType: Person_pb.StreamRequest,
    responseType: Person_pb.StreamResponse,
    requestSerialize: serialize_com_netty_proto_StreamRequest,
    requestDeserialize: deserialize_com_netty_proto_StreamRequest,
    responseSerialize: serialize_com_netty_proto_StreamResponse,
    responseDeserialize: deserialize_com_netty_proto_StreamResponse,
  },
};

exports.PersonServiceClient = grpc.makeGenericClientConstructor(PersonServiceService);
