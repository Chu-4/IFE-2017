        
        var Node = document.getElementsByClassName("first")[0];
        var arrs = new Array();

        document.getElementById("pre").onclick = function(){
            reset();
            preOrder(Node);
        }
        document.getElementById("mid").onclick = function(){
            reset();
            midOrder(Node);
        }
        document.getElementById("post").onclick = function(){
            reset();
            postOrder(Node);
        }
        
        function postOrder(node){
            if(!(node == null)){
                postOrder(node.children[0]);
                postOrder(node.children[1]);
                arrs.push(node);
            }
            showN(arrs);
        }

        function preOrder(node){    
            if(!(node == null)){
                arrs.push(node);
                preOrder(node.children[0]);
                preOrder(node.children[1]);
                
            }
            showN(arrs);
        }

        function midOrder(node){
            if(!(node == null)){
                midOrder(node.children[0]);
                arrs.push(node);
                midOrder(node.children[1]);
            }
            showN(arrs);
            console.log(arrs[arrs.length-1])
        }

        function showN(arrs){
            for(let i=0;i<arrs.length;i++){
                runs = setTimeout(function(){
                    arrs[i].style.background = "green"; 
                    arrs[i-1].style.background = "white";
                },i*500)
            };   
        }
        
        function reset(){           
            arrs= [];/*初始化遍历数组*/
            ab = document.getElementsByTagName("div");/*ab自动存所有符合条件的值，成一个数组*/
            for(i=0;i<ab.length;i++){
                ab[i].style.background = "white";
            }
        }