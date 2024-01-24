//https://leetcode.com/problems/to-be-or-not-to-be/submissions/1155599740/?envType=study-plan-v2&envId=30-days-of-javascript


/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
      toBe:(argument)=>{
        if(argument === val){
            return  true
        }
        else throw new Error("Not Equal")
      },
      notToBe:(argument)=>{
        if(argument !== val){
            return true;
        }
         else throw new Error("Equal")
      }
    }
    
   };
   //console.log(expect(5).toBe(5))
   /**
    * expect(5).toBe(5); // true
    * expect(5).notToBe(5); // throws "Equal"
    */
