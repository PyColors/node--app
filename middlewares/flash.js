module.exports = function (request, response, next) {

    // Add message flah in systeme glabal
    if (request.session.flash) {
        response.locals.flash = request.session.flash
        request.session.flash = undefined
    }

    // stock in session message flash
    request.flash = function (type, content) {
        if (request.session.flash === undefined) {
            request.session.flash = {}
        }
        request.session.flash[type] = content
    }
    next()
}