const errorHandler = (err, req, res, next) =>
{
    res.json({
        errormessage: err.message
    })
}
module.exports =errorHandler