const Container = require('./Components/container')

test("container only accept its typeeither dimesnion or measures "),(ele)=>{
   if (Container.type== ele.type) {
       Container.append(ele)

   }
   else{
       throw Error
   }
}