module.exports  = function valitime (req, res, next) {
    let date = new Date();
    let day = date.getDay();
    let hours = date.getHours();
    if (day != 6 && day != 0 && hours > 8 && hours < 17) {
        res.status(200);
        next();
    } else {
        next(res.send("<center><h1>Cette page disponible de lundi à vendredi  </h1></center> <br> <center><h1>de 09:00h à 17:00h</h1></center>"));
    }
};
