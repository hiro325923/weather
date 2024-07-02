fetch('data.json')
.then(response => response.json())
.then(data => console.log(data));

function Kuji(data) {
    this.data=data;
  
    this.pick = function(){
      let ret = '';
      let total = 0;
      for(let i=0;i<data.length;i++) {
        total += data[i].ritsu;
      }
  
      const rand = Math.random() * total;
      total=0;
      for(let i=0;i<data.length;i++) {
        ret = data[i].name;
        total += data[i].ritsu;
        if(total > rand) {
          break;
        }
      }
  
      return ret;
    }
  }
  const kuji = new Kuji(
    [
        {"name":"大吉","ritsu":5},
        {"name":"中吉","ritsu":10},
        {"name":"小吉","ritsu":30},
        {"name":"吉","ritsu":50},
        {"name":"凶","ritsu":20},
        {"name":"大凶","ritsu":5}
      ]
);
  
document.getElementById("kekka").innerHTML = kuji.pick();
console.log("kuji");