  function countdownTimer() {
        
        
      
            var countDownDate = new Date("Apr 25, 2020 18:28:00").getTime();
            var now = new Date().getTime();
            var timeleft = countDownDate - now;
    
            var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
            
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("mins").innerHTML = minutes; 
            document.getElementById("secs").innerHTML = seconds;



            if (timeleft < 0) {
                    clearInterval(countdownTimer);
                    document.getElementById("countdown").innerHTML ="";

                              }
         

        
      }

      countdownTimer();
      setInterval(countdownTimer, 1000);

