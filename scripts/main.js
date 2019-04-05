$(document).ready(function(){
var v = 0, u = 0, a = 0, t = 0;

  $(".initial_velocity button").click(function(){
    v = $(".initial_velocity input[name='v']").val();
    a = $(".initial_velocity input[name='a']").val();
    t = $(".initial_velocity input[name='t']").val();

    u = v - a*t;
    $(".initial_speed_output").text("Initial Velocity: "+u);
  });

  $(".final_velocity button").click(function(){
    u = $(".final_velocity input[name='u']").val();
    a = $(".final_velocity input[name='a']").val();
    t = $(".final_velocity input[name='t']").val();

    v = Number(u) + Number(a*t);
    $(".final_velocity_output").text("Final Velocity: "+v);
  });

  $(".acceleration button").click(function(){
    u = $(".acceleration input[name='u']").val();
    v = $(".acceleration input[name='v']").val();
    t = $(".acceleration input[name='t']").val();

    a = (v - u)/t;
    $(".acceleration_output").text("Acceleration: "+a);
  });

  $(".time button").click(function(){
    u = $(".time input[name='u']").val();
    v = $(".time input[name='v']").val();
    a = $(".time input[name='a']").val();

    t = (v - u)/a;
    $(".time_output").text("Time: "+t);
  });

  //Opening and closing calculators of speed //
  $(".speed_calc_menu li:nth-child(1)").click(function(){
    $(".speed_init_velocity").css("display", "block");
  });
  $("button[name='speed_init_velocity']").click(function(){
    $(".speed_init_velocity").css("display", "none");
  });


  $(".speed_calc_menu li:nth-child(2)").click(function(){
    $(".speed_final_velocity").css("display", "block");
  });
  $("button[name='speed_final_velocity']").click(function(){
    $(".speed_final_velocity").css("display", "none");
  });


  $(".speed_calc_menu li:nth-child(3)").click(function(){
    $(".speed_acceleration").css("display", "block");
  });
  $("button[name='speed_acceleration']").click(function(){
    $(".speed_acceleration").css("display", "none");
  });



  $(".speed_calc_menu li:nth-child(4)").click(function(){
    $(".speed_time").css("display", "block");
  });
  $("button[name='speed_time']").click(function(){
    $(".speed_time").css("display", "none");
  });

  //////////////////////////////////////////////////

});
