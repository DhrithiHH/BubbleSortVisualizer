let element=[];
  let array=[];
  for(let i=0;i<10;i++)
    {
      element[i]=document.getElementById(i+1).style;
      array[i]=(Math.random()*100)%100;
      
    }
    show();
    function show()
    {
      for(let i=0;i<10;i++)
        {
          element[i].height=array[i]+"%";
          
        }
   
    }
    
    
    function action()
    {
      let i=0,j=0;
      const id= setInterval(move,150);
      function move()
      {
        show();
        element[j].backgroundColor="white";
        if(j!=9)
        {
          element[j+1].backgroundColor="white";
        }
        if((j!=0)&&(i<10))
        {
          element[j-1].backgroundColor="blue";
        }
        
        if(array[j]>array[j+1])
        {
          element[j].backgroundColor="red";
          element[j+1].backgroundColor="red";
          let temp=array[j];
          array[j]=array[j+1];
          array[j+1]= temp;
        }
        j++;
        
        if(j==(10-i))
        {
          if(i==10)
          {
            clearIntervel(id);
          }
          else
          {

            j=0;
            i++;
            
          }
        }
      }
    }