rscfg = {
    _id: 'Arbiter',
    members: [
        { _id: 0, host: "rs-Arbiter-1:20017"},
        { _id: 1, host: "rs-Arbiter-1:20018"},
        { _id: 2, host: "rs-Arbiter-1:20019"}
    ]
}

rs.initiate(rscfg)
rs.conf()