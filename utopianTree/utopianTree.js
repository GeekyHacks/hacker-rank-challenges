function utopianTree(n) {
    // Write your code here
let treeheight=1;

for(let i=0;i<n;i++){
    
    if(i%2 ===0){
       treeheight*=2;  
    }
   
    
    else{
    treeheight+=1;    
    }
    
    
}return treeheight;
}
