function setup() {
  createCanvas(1900,950);
}

function draw() 
{
  background(255,255,255);

  if(keyIsDown(UP_ARROW))
   {
     background(255,154,0);
   }

   if(keyIsDown(DOWN_ARROW))
    {
      background(0,154,255);
    }

    if(keyIsDown(LEFT_ARROW))
     {
       background(255,0,154);
     }
     if(keyIsDown(RIGHT_ARROW))
      {
        background(50,0,255);
      }
}




