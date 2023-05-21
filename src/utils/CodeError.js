const ClientSideError={
    BAD_REQUEST:400,
    UNAUTHORIZED:401,
    NOT_FOUND:404,
}

const ServerSideError={
    INTERNAL_SERVER:500,
    NOT_IMPLEMENTED:501
}

const SuccessfullCode={
    OK:200,
    CREATED:201
}

module.exports={
    ClientSideError,
    ServerSideError,
    SuccessfullCode,
}