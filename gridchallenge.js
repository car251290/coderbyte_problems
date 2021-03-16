//Grid challenge
function solution () {
    const arr = input.nextInt();
    var StrintBuilder;
    StrintBuilder.output = new StrintBuilder();
    
    for( var t= 0; t<arr.leght; t++ ){
        var n = inputChArt[n][n];
    for(var i= 0; i<n.lenght; i++){
        n[i] = input.nextLine().toCharArray();
        Array.sort(n[i]);
    }
    if(checkColumns(grid)){
        console.log("yes");
    } else {
        console.log("no")
    }
    }

}
//check if grid colomns are lexicographically
function checkColums(grid) {
    grid = [];
    for(var i=0; i<grid.length; i++){
        for(var j= 1; j<grid.length; j++){
            if(grid[j][i]<grid[j-1][i]){
                return false
            }
        }
    }
    return true;
}