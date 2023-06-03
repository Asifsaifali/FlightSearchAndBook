const ClientSideError=Object.freeze({
    BAD_REQUEST:400,
    UNAUTHORIZED:401,
    NOT_FOUND:404,
})

const ServerSideError=Object.freeze({
    INTERNAL_SERVER:500,
    NOT_IMPLEMENTED:501
})

const SuccessfullCode=Object.freeze({
    OK:200,
    CREATED:201
})

module.exports={
    ClientSideError,
    ServerSideError,
    SuccessfullCode,
}