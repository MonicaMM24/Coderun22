module.exports = function myMiddleware(req, res, next) {
    const today = new Date();
    
    const time = today.getHours() + ":" + today.getMinutes();
    
    const log = time + " - " + req.originalURL + " - " + "Request received";

    console.log(log);
    
    res.status(404).send('Unhandled route');
  }
  