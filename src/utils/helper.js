const Comprison=(String1,String2)=>{

    const date1=new Date(String1);
    const date2=new Date(String2);
     return date1.getTime()>date2.getTime();
}

module.exports={
    Comprison
};