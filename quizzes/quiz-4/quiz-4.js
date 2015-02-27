function myTimer()
{

  setInterval(function()
  {
    var t = new Date();
    console.log(t.getMinutes() + ":" + t.getSeconds());
  }, 1000);
}
module.exports = myTimer;
