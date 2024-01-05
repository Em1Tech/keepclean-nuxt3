export function limitTitle (string = '', limit = 0) {  
   if(string.length > limit) {
      return string.substring(0, limit) + '...';
   } else {
      return string.substring(0, limit)
   }
}