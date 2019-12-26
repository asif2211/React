class Teachers {
  constructor()
  {
    
    this.Age = "30";
    
    
  }
  
  getTeacherName()
{
  console.log(this.Age);
  
  
}
  
}
class Faculty  extends Teachers{

    constructor (){
      super();
        this.name = "asif";
        this.Age = "40"
    }

    getNameProp()
    {
         console.log(this.name);
    }

}

const fResult = new Faculty()

fResult.getTeacherName()

